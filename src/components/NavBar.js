import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../AuthContext";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
    const { currentUser, loading } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleLogout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (loading) {
        return <div className="text-center p-4">Loading...</div>;
    } else {
        if (!currentUser) return null;
        return (
            <nav className="bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 p-4 flex justify-between items-center">
                <div className="space-x-4">
                    <Link
                        to="/dinner-details"
                        className="text-white hover:text-gray-400 transition duration-300"
                    >
                        Detalles cena
                    </Link>
                    <Link
                        to="/party-details"
                        className="text-white hover:text-gray-400 transition duration-300"
                    >
                        Detalles fiesta
                    </Link>
                    <Link
                        to="/invitation-status"
                        className="text-white hover:text-gray-400 transition duration-300"
                    >
                        Invitaciones
                    </Link>
                    <Link
                        to="/songs-list"
                        className="text-white hover:text-gray-400 transition duration-300"
                    >
                        Canciones
                    </Link>
                </div>
                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white hover:text-gray-400 transition duration-300 font-bold"
                    >
                        {currentUser.email}
                    </button>
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 z-50 bg-white rounded-md shadow-lg py-2">
                            <Link
                                to="/new-user"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Crear nuevo usuario
                            </Link>
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    handleLogout();
                                }}
                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                            >
                                Salir
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        );
    }
}