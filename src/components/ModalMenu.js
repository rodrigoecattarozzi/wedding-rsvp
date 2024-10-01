import React from "react";

export default function ModalMenu({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-lg overflow-hidden items-center justify-center shadow-lg w-full max-w-2xl mx-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-3 z-50 text-gray-700 hover:text-gray-900"
                    onClick={onClose}
                >
                    ✕
                </button>
                <div className="container py-12 px-4 min-w-[400px]">
                    <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden">
                        <div className="m-4 mb-1">
                            <h1 className="p-2 mb-3 text-2 font-extrabold leading-none tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                                <mark className="px-2 text-white bg-fuchsia-900 rounded">
                                    Menú
                                </mark>{" "}
                                completo
                            </h1>
                            <ul class="space-y-4 text-left text-gray-500 max-h-[40rem] overflow-y-auto">
                                <li class="flex flex-col space-y-1 mb-5">
                                    <div class="flex items-center space-x-3">
                                        <svg
                                            class="flex-shrink-0 w-3.5 h-3.5 text-fuchsia-600"
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
                                        <span class="md:text-3xl text-4xl font-semibold">
                                            Bocaditos fríos y calientes
                                        </span>
                                    </div>
                                    <div class="pl-7 md:text-2xl text-3xl text-gray-400">
                                        <p>Entrada</p>
                                    </div>
                                </li>
                                <li class="flex flex-col space-y-1 mb-5">
                                    <div class="flex items-center space-x-3">
                                        <svg
                                            class="flex-shrink-0 w-3.5 h-3.5 text-fuchsia-600"
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
                                        <span class="md:text-3xl text-4xl font-semibold">
                                            Medallón de lomo con salsa
                                            Portobelho y milhoja de papas
                                        </span>
                                    </div>
                                    <div class="pl-7 md:text-2xl text-3xl text-gray-400">
                                        <p>Plato Principal</p>
                                    </div>
                                </li>
                                <li class="flex flex-col space-y-1 mb-5">
                                    <div class="flex items-center space-x-3">
                                        <svg
                                            class="flex-shrink-0 w-3.5 h-3.5 text-fuchsia-600"
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
                                        <span class="md:text-3xl text-4xl font-semibold">
                                            Copa helada con charlotte de chocolate y frutas de estación
                                        </span>
                                    </div>
                                    <div class="pl-7 md:text-2xl text-3xl text-gray-400">
                                        <p>Postre</p>
                                    </div>
                                </li>
                                <li class="flex flex-col space-y-1 mb-5">
                                    <div class="flex items-center space-x-3">
                                        <svg
                                            class="flex-shrink-0 w-3.5 h-3.5 text-fuchsia-600"
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
                                        <span class="md:text-3xl text-4xl font-semibold">
                                            Pernil de ternera en pancitos saborizados
                                        </span>
                                    </div>
                                    <div class="pl-7 md:text-2xl text-3xl text-gray-400">
                                        <p>Trasnoche</p>
                                    </div>
                                </li>
                                <li class="flex flex-col space-y-1 mb-5">
                                    <div class="flex items-center space-x-3">
                                        <svg
                                            class="flex-shrink-0 w-3.5 h-3.5 text-fuchsia-600"
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
                                        <span class="md:text-3xl text-4xl font-semibold">
                                            Gaseosa, Cerveza, Vino, Agua (con y sin gas)
                                        </span>
                                    </div>
                                    <div class="pl-7 md:text-2xl text-3xl text-gray-400">
                                        <p>Bebidas</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
