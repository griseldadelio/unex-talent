import React from 'react';

export const VideoInner = () => {
  return (
    <div className="hero_inner">
      <video
        className="video_inner"
        autoPlay
        loop
        muted
        src={
          'https://www.hydrogengroup.com/proxy_blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS8yT3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--52e3be8790cebb9231cf82965ce3ad9e02fdcfc5/website_hero_video_14_1.mp4'
        }
      />
      <div className="title_inner" data-aos="fade-down">
        <div className="text-center display-3 fw-bold">Your Next Talent</div>
      </div>
    </div>
  );
};
