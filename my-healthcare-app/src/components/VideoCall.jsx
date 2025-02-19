import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Change this to your backend URL when deployed

const VideoCall = () => {
  const [myId, setMyId] = useState("");
  const [remoteId, setRemoteId] = useState("");
  const [peerConnection, setPeerConnection] = useState(null);
  const myVideo = useRef();
  const remoteVideo = useRef();

  useEffect(() => {
    socket.on("connect", () => {
      setMyId(socket.id);
    });

    socket.on("offer", async (data) => {
      const peer = createPeer();
      peer.setRemoteDescription(new RTCSessionDescription(data.offer));

      const answer = await peer.createAnswer();
      await peer.setLocalDescription(answer);

      socket.emit("answer", { to: data.from, answer });
    });

    socket.on("answer", (data) => {
      peerConnection?.setRemoteDescription(new RTCSessionDescription(data.answer));
    });

    socket.on("ice-candidate", (data) => {
      peerConnection?.addIceCandidate(new RTCIceCandidate(data.candidate));
    });
  }, [peerConnection]);

  const createPeer = () => {
    const peer = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", { to: remoteId, candidate: event.candidate });
      }
    };

    peer.ontrack = (event) => {
      remoteVideo.current.srcObject = event.streams[0];
    };

    setPeerConnection(peer);
    return peer;
  };

  const startCall = async () => {
    // Get a list of available media devices
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === "videoinput");
  
    if (videoDevices.length > 1) {
      // If multiple cameras are available, select the front-facing one
      const selectedDeviceId = videoDevices[0].deviceId; // Change index [0] to [1] if needed
      var constraints = { video: { deviceId: { exact: selectedDeviceId } }, audio: true };
    } else {
      // Use default camera
      var constraints = { video: true, audio: true };
    }
  
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    myVideo.current.srcObject = stream;
  
    const peer = createPeer();
    stream.getTracks().forEach((track) => peer.addTrack(track, stream));
  
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
  
    socket.emit("offer", { to: remoteId, offer });
  };
  

  return (
    <div>
      <h2>My ID: {myId}</h2>
      <input
        type="text"
        placeholder="Enter remote ID"
        value={remoteId}
        onChange={(e) => setRemoteId(e.target.value)}
      />
      <button onClick={startCall}>Start Call</button>

      <div style={{ display: "flex" }}>
        <video ref={myVideo} autoPlay playsInline muted />
        <video ref={remoteVideo} autoPlay playsInline />
      </div>
    </div>
  );
};

export default VideoCall;
