import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import textureImage from "../assets/textured_paper_@2X.png";

function CreateUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === passwordRepeat) {
            try {
                await auth.createUserWithEmailAndPassword(email, password);
                setError(null);
                navigate("/invitation-status");
            } catch (error) {
                setError(error.message);
            }
        } else {
            setError("Las contraseñas no coinciden");
        }
    };

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
            <div className="flex items-center justify-center min-h-screen container mx-auto">
                <div className="p-8 rounded-lg bg-white shadow-lg w-full max-w-md mx-auto overflow-hidden min-w-[500px]">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-600">
                        Nuevo usuario
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 text-center"
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm text-left font-medium text-gray-600"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border-gray-300 border-2 rounded-md shadow-sm focus:outline-none focus:border-fuchsia-900 focus:ring-fuchsia-900 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 text-left"
                            >
                                Contraseña:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-900 focus:border-fuchsia-900 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="passwordRepeat"
                                className="block text-sm font-medium text-gray-700 text-left"
                            >
                                Repetir contraseña:
                            </label>
                            <input
                                type="password"
                                id="passwordRepeat"
                                value={passwordRepeat}
                                onChange={(e) =>
                                    setPasswordRepeat(e.target.value)
                                }
                                required
                                className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-900 focus:border-fuchsia-900 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fuchsia-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-auto"
                        >
                            Crear
                        </button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;
