"use client";

import React, { useEffect, useRef, useState } from 'react';

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);
  const dataArrayRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    const audio = new Audio();
    // You can replace this with your actual audio file path
    // Supported formats: .mp3, .wav, .ogg, .m4a
    audio.src = '/audio/background-music.mp3'; // Placeholder - user needs to add audio file
    audio.loop = true;
    audio.volume = 0.5;
    
    audio.onerror = () => {
      console.warn('Audio file not found. Please add an audio file to /public/audio/background-music.mp3');
    };
    
    audioRef.current = audio;

    // Initialize Audio Context and Analyser
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      analyserRef.current = analyser;
      audioContextRef.current = audioContext;
      dataArrayRef.current = dataArray;

      // Connect audio to analyser
      const source = audioContext.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
    } catch (error) {
      console.error('Error initializing audio context:', error);
    }

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, []);

  const isPlayingRef = useRef(false);
  
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const draw = () => {
    if (!canvasRef.current || !analyserRef.current || !dataArrayRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;

    analyser.getByteFrequencyData(dataArray);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw audio waveform (similar to cineshader.com style)
    const barCount = 20;
    const barWidth = canvas.width / barCount;
    const barSpacing = 0.5;
    
    // Check for dark mode
    const isDark = document.documentElement.classList.contains('dark');
    ctx.fillStyle = isDark ? '#ffffff' : '#060607';
    ctx.strokeStyle = isDark ? '#ffffff' : '#060607';

    for (let i = 0; i < barCount; i++) {
      const dataIndex = Math.floor((i / barCount) * dataArray.length);
      const normalizedValue = dataArray[dataIndex] / 255;
      const barHeight = Math.max(1, normalizedValue * canvas.height);

      // Draw bar with smooth animation
      ctx.fillRect(
        i * barWidth + barSpacing,
        canvas.height - barHeight,
        barWidth - barSpacing * 2,
        barHeight
      );
    }

    // Continue animation if playing
    if (isPlayingRef.current) {
      animationFrameRef.current = requestAnimationFrame(draw);
    }
  };

  useEffect(() => {
    if (isPlaying && canvasRef.current) {
      draw();
    } else if (canvasRef.current) {
      // Clear canvas when paused
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [isPlaying]);

  const togglePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      } else {
        // Resume audio context if suspended (required by browser autoplay policies)
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          await audioContextRef.current.resume();
        }
        await audioRef.current.play();
        setIsPlaying(true);
        draw();
      }
    } catch (error) {
      console.error('Error toggling audio:', error);
    }
  };

  return (
    <button
      className="nav_btn_lg nav_btn_light flex items-center justify-center hover:bg-white py-6 cursor-pointer transition-all duration-300 active:scale-95"
      onClick={togglePlayPause}
      aria-label={isPlaying ? 'Pause Audio' : 'Play Audio'}
      type="button"
    >
      <canvas
        ref={canvasRef}
        width={20}
        height={12}
        className="block"
        style={{ imageRendering: 'crisp-edges' }}
      />
    </button>
  );
};

export default MusicButton;
