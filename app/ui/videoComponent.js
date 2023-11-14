'use client';
import React, { useRef, useEffect, useState } from 'react';

export const VideoComponent = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoLoad = () => {
      setIsVideoLoaded(true);
    };
    video.addEventListener('loadeddata', handleVideoLoad);
    return () => {
      video.removeEventListener('loadeddata', handleVideoLoad);
    };
  }, []);

  return (
    <div
      className={`hero_inner videoContainer${
        isVideoLoaded ? ` videoLoaded` : ''
      }`}
    >
      {!isVideoLoaded && (
        <div className="pre-video-content">
          <div
            className="title_inner"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="text-center display-3 fw-bold">
              Your Next Talent
            </div>
          </div>
        </div>
      )}
      <video
        className={`video_inner${isVideoLoaded ? ' visible' : ''}`}
        autoPlay
        loop
        muted
        ref={videoRef}
        src={
          'https://www.hydrogengroup.com/proxy_blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS8yT3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--52e3be8790cebb9231cf82965ce3ad9e02fdcfc5/website_hero_video_14_1.mp4'
        }
        type="video/mp4"
      />
    </div>
  );
};
