import React, { useEffect, useState, useRef } from 'react';
import './Carousel.css';
import gusec from '../assets/gusec.mp4';
import video1 from '../assets/video.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';

function Carousel() {
  const videoRef = useRef(null);
  const [text, setText] = useState(''); // Initial state is an empty string
  const fullText = "Welcome to GUIITAR Council";

  useEffect(() => {
    // Typing animation
    let index = 0;
    const typingTimer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // Slice ensures precise state updates
        index++;
      } else {
        clearInterval(typingTimer);
      }
    }, 150);

    // Video playback logic
    const playVideo = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        videoRef.current.playbackRate = 0.9;
      }
    }, 1000);

    return () => {
      clearTimeout(playVideo);
      clearInterval(typingTimer);
    };
  }, [fullText]);
  
  
  return (
    <div className="carousel">
     <video
  ref={videoRef}
  autoPlay={true}
  loop
  muted
  playsInline
  className="carousel-video"
>
  <source src={video5} type="video/mp4" />
</video>

      <div className="carousel-content">
        <h1>{text || '\u00A0'}</h1> {/* Use non-breaking space to avoid empty rendering */}
        <p>
          GU Incubation Innovation Technology and Applied Research (GUIITAR) Council is registered under section 8 of Companies Act, 2013 which has been established by GSFC University at Vadodara, dedicated to promote and support creativity, innovation and spirit of enterprise among young minds and innovators.
        </p>
        <div className="cta-buttons">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSchfX1JB-oZvQOm4ff9iJuQjD9f1Tu3T84OT3279RoHjq_ivg/viewform" className="btn" target="_blank" rel="noopener noreferrer">Apply for SSIP Grant</a>
        <a href="" className="btn" target="_blank" rel="noopener noreferrer">Apply for Nodal Grant</a>
        
        </div>

      </div>
    </div>
  );
}

export default Carousel;