import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactIcon = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copiedMauro, setCopiedMauro] = useState(false);
    const [copiedSheila, setCopiedSheila] = useState(false);
    const modalRef = useRef(null);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const copyToClipboard = (phoneNumber, numberCopied) => {
        if (numberCopied === "mauro") {
            navigator.clipboard.writeText(phoneNumber).then(() => {
                setCopiedMauro(true);
                setCopiedSheila(false);
                setTimeout(() => {
                    setCopiedMauro(false);
                }, 3000);
            });
        }
        if (numberCopied === "sheila") {
            navigator.clipboard.writeText(phoneNumber).then(() => {
                setCopiedSheila(true);
                setCopiedMauro(false);
                setTimeout(() => {
                    setCopiedSheila(false);
                }, 3000);
            });
        }
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            toggleModal();
        }
    };

    React.useEffect(() => {
        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <>
            <div className="fixed bottom-4 right-4 z-40">
                <button
                    onClick={toggleModal}
                    className="bg-fuchsia-700 text-white px-4 py-3 rounded-full shadow-lg focus:outline-none opacity-75 hover:opacity-100"
                >
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
                    <div
                        ref={modalRef}
                        className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full overflow-hidden min-w-[700px]"
                    >
                        <button
                            className="absolute top-3 right-3 z-50 text-gray-700 hover:text-gray-900"
                            onClick={toggleModal}
                        >
                            ✕
                        </button>
                        <div className="container py-12 px-4">
                            <div className="m-4 mb-1">
                                <h1 className="p-2 mb-3 text-2 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                                    Datos de{" "}
                                    <mark className="px-2 text-white bg-fuchsia-900 rounded">
                                        contacto
                                    </mark>
                                </h1>
                                <p className="p-2 text-gray-500 lg:text-xl md:text-2xl text-5xl font-bold">
                                    Si tenés alguna duda, por favor escribinos
                                    para que podamos ayudarte
                                </p>
                                <p className="p-2 text-gray-500 lg:text-base md:text-xl text-5xl font-bold py-4">
                                    Pista: podés copiar los números haciendo
                                    click sobre los mismos
                                </p>
                                <ul className="space-y-4 text-left text-gray-500 max-h-[40rem] overflow-y-auto">
                                    <li className="flex flex-col space-y-1 mb-5">
                                        <div className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-3.5 h-3.5 text-fuchsia-600"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 16 12"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5.917 5.724 10.5 15 1.5"
                                                />
                                            </svg>
                                            <span
                                                onClick={() =>
                                                    copyToClipboard(
                                                        "3624562428",
                                                        "mauro"
                                                    )
                                                }
                                                className="lg:text-3xl text-4xl font-semibold cursor-pointer"
                                            >
                                                (362) 456 2428
                                            </span>
                                        </div>
                                        <div className="pl-7 lg:text-2xl text-3xl text-gray-400">
                                            <p>Mauro</p>
                                        </div>
                                    </li>
                                    <li className="flex flex-col space-y-1 mb-5">
                                        <div className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-3.5 h-3.5 text-fuchsia-600"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 16 12"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5.917 5.724 10.5 15 1.5"
                                                />
                                            </svg>
                                            <span
                                                onClick={() =>
                                                    copyToClipboard(
                                                        "3624387493",
                                                        "sheila"
                                                    )
                                                }
                                                className="lg:text-3xl text-4xl font-semibold cursor-pointer"
                                            >
                                                (362) 438 7493
                                            </span>
                                        </div>
                                        <div className="pl-7 lg:text-2xl text-3xl text-gray-400">
                                            <p>Sheila</p>
                                        </div>
                                    </li>
                                </ul>
                                {copiedMauro && (
                                    <p className="text-gray-600 text-lg mt-4 text-center">
                                        ¡Copiaste el númmero de Mauro
                                        correctamente!
                                    </p>
                                )}
                                {copiedSheila && (
                                    <p className="text-gray-600 text-lg mt-4 text-center">
                                        ¡Copiaste el númmero de Sheila
                                        correctamente!
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactIcon;
