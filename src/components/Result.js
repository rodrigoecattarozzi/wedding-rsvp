import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import textureImage from "../assets/textured_paper_@2X.png";

export default function Result() {
    const [response, setResponse] = useState(false);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const variableValue = params.get("isAccepted");

    useEffect(() => {
        if (variableValue === "true") {
            setResponse(true);
        }
    }, [variableValue]);

    return (
        <div
            className="min-h-screen bg-gradient-to-r from-fuchsia-300 via-fuchsia-200 to-fuchsia-300 text-gray-800"
            style={{
                backgroundImage: `url(${textureImage}), linear-gradient(90deg, rgba(253,164,175,1) 0%, rgba(254,205,211,1) 50%, rgba(253,164,175,1) 100%)`,
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                backgroundRepeat: "repeat",
            }}
        >
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">
                    {response ? "¡Solicitud Aceptada!" : "Solicitud Rechazada"}
                </h1>
                <p className="text-gray-600 mb-6">
                    {response
                        ? "Gracias por aceptar la solicitud. Estamos felices de que formes parte de esta fiesta."
                        : "Lamentamos que hayas rechazado la solicitud."}
                </p>
            </div>
        </div>

        </div>
    );
}
