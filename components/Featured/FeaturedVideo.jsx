import React, { useEffect, useRef, useState } from "react";

const FeaturedVideo = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Handle video errors
  const handleVideoError = () => {
    if (process.env.NODE_ENV === 'development') {
      console.error("Video failed to load or play");
    }
    setVideoError(true);
  };

  // Only load video when it's visible and user interacts
  const handleVideoClick = () => {
    if (!isVideoLoaded && videoRef.current) {
      setIsVideoLoaded(true);
      setVideoError(false);
      videoRef.current.load();
    }
  };

  // Intersection Observer to detect when video is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Video
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Experience our latest work in motion
        </p>
      </div>
      
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Video Element with Performance Optimizations */}
        <video
          ref={videoRef}
          className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl"
          controls
          preload="none"
          poster="/textures/555.jpg"
          playsInline
          muted
          onClick={handleVideoClick}
          onError={handleVideoError}
          onLoadStart={() => setVideoError(false)}
        >
          {isVideoLoaded && isVideoVisible && (
            <>
              <source src="/videos/KnobStudio_Ad1.mp4" type="video/mp4" />
            </>
          )}
          Your browser does not support the video tag.
        </video>
        
        {/* Loading overlay - shows until video is loaded */}
        {!isVideoLoaded && !videoError && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl cursor-pointer" onClick={handleVideoClick}>
            <div className="text-center mb-2 text-white">
              <div className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">Click to load video</div>
              <div className="text-sm sm:text-base text-gray-300">Experience our latest work</div>
            </div>
          </div>
        )}

        {/* Error overlay removed as requested */}
      </div>
    </div>
  );
};

export default FeaturedVideo;
