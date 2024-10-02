import React, { useState } from 'react';
import styles from './VideoCarousel.module.css';

const VideoCarousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    const index = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextVideo = () => {
    const index = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.prevButton} onClick={prevVideo}>
        &#10094; {/* Setas para navegação */}
      </button>

      <div className={styles.videoContainer}>
        <video
          key={currentIndex}
          controls
          className={styles.video}
          src={videos[currentIndex]}
          autoPlay
            muted
            loop
        />
      </div>

      <button className={styles.nextButton} onClick={nextVideo}>
        &#10095;
      </button>
    </div>
  );
};

export default VideoCarousel;
