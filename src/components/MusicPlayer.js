import React, { useState, useRef, useEffect } from "react";
import sugar from "../assets/Sugar.mp3";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showHint, setShowHint] = useState(true);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                audioRef.current.pause();
            } else if (isPlaying) {
                audioRef.current.play();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, [isPlaying]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHint(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed top-16 right-4 z-40 sm:text-lg text-3xl">
            <div className="relative">
                <button
                    onClick={togglePlay}
                    className="bg-fuchsia-700 text-white md:p-2 p-4 rounded-lg shadow-lg focus:outline-none opacity-75 hover:opacity-100"
                >
                    {isPlaying ? "Pausar" : "Reproducir"}
                </button>
                {showHint && (
                    <div className="absolute right-full top-[50%] transform -translate-y-1/2 mr-2 flex items-center animate-fade-in-out">
                        <span className="bg-white text-gray-700 p-2 rounded-lg shadow-lg sm:text-lg text-3xl text-center whitespace-nowrap">
                            ¡Hacé clic para escuchar!
                        </span>
                        <div className="ml-1 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
                    </div>
                )}
            </div>
            <audio ref={audioRef} src={sugar} loop />
        </div>
    );
};

export default MusicPlayer;
