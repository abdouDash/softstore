"use client";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Playback prevented", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <audio ref={audioRef} src="/call-back.mp3" loop />
      <button 
        onClick={togglePlay}
        className="bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 p-4 rounded-full text-white shadow-2xl hover:bg-[#2A2A2A] transition-all duration-300 hover:scale-110"
        title="Toggle Music"
      >
        {isPlaying ? <Volume2 size={20} className="animate-pulse" /> : <VolumeX size={20} className="text-gray-400" />}
      </button>
    </div>
  );
}
