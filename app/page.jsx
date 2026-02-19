"use client"

import { useEffect, useRef } from "react";
import { initFaceLandmarker } from "./lib/vision/initFace";


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
 
  useEffect(() => {
    async function setup() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true
      })
    
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }

      function loop() {
        if (!videoRef.current) return
        
        requestAnimationFrame(loop)
      }
      loop()
    }
    setup()
  }, [])

  return (
    <div className="">
      <video ref={videoRef} autoPlay playsInline className="w-96" />
    </div>
  );
}
