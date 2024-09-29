import React from "react";
import textureImage from "../assets/textured_paper_@2X.png";

export default function NotFound() {
    return (
        <div
            className="flex items-center justify-center h-screen bg-gradient-to-r from-fuchsia-100 via-fuchsia-300 to-fuchsia-500"
            style={{
                backgroundImage: `url(${textureImage}), linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(250,232,255,1) 100%)`,
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                backgroundRepeat: "repeat",
                fontFamily: "'Poiret One', sans-serif",
            }}
        >
            <div className="text-center text-white px-10 py-12 bg-opacity-90 bg-gray-900 rounded-xl shadow-2xl">
                <h1 className="text-7xl font-extrabold mb-4 animate-bounce">
                    404
                </h1>
                <p className="text-2xl mb-8">
                    ¡Ups! Esta página no existe o no tenés los permisos para acceder...
                </p>
            </div>
        </div>
    );
}
