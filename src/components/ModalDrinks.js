import React from "react";

export default function ModalDrinks({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-lg overflow-hidden items-center justify-center shadow-lg w-full max-w-3xl mx-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-3 z-50 text-gray-700 hover:text-gray-900"
                    onClick={onClose}
                >
                    ✕
                </button>
                <div className="container py-12 px-4">
                    <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden min-w-[500px]">
                        <div className="m-4 mb-1">
                            <h1 className="p-2 mb-3 text-2 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                                Barra de{" "}
                                <mark className="px-2 text-white bg-fuchsia-900 rounded">
                                    Tragos
                                </mark>
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
                                        <span class="lg:text-3xl text-4xl font-semibold">
                                            DAIQUIRI DE FRUTILLA
                                        </span>
                                    </div>
                                    <div class="pl-7 lg:text-2xl text-3xl text-gray-400">
                                        <p>Ron, frutillas, limón, azúcar</p>
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
                                        <span class="lg:text-3xl text-4xl font-semibold">
                                            DAIQUIRI TROPICAL
                                        </span>
                                    </div>
                                    <div class="pl-7 lg:text-2xl text-3xl text-gray-400">
                                        <p>Ron, duraznos, naranja, maracuyá, limón, azúcar</p>
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
                                        <span class="lg:text-3xl text-4xl font-semibold">
                                            GANCIA
                                        </span>
                                    </div>
                                    <div class="pl-7 lg:text-2xl text-3xl text-gray-400">
                                        <p>Gancia, Sprite, limón</p>
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
                                        <span class="lg:text-3xl text-4xl font-semibold">
                                            FERNET
                                        </span>
                                    </div>
                                    <div class="pl-7 lg:text-2xl text-3xl text-gray-400">
                                        <p>Fernet Branca, Coca-Cola</p>
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
                                        <span class="lg:text-3xl text-4xl font-semibold">
                                            GLOW BERRIES
                                        </span>
                                    </div>
                                    <div class="pl-7 lg:text-2xl text-3xl text-gray-400">
                                        <p>Vodka frambuesa, Sprite, granadina</p>
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
                                        <span class="lg:text-3xl text-4xl font-semibold">
                                            SOHO
                                        </span>
                                    </div>
                                    <div class="pl-7 lg:text-2xl text-3xl text-gray-400">
                                        <p>Gancia, licor de kiwi, blue curaçao, limón, Sprite</p>
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
                                        <span class="lg:text-3xl text-4xl font-semibold">
                                            CUBA LIBRE
                                        </span>
                                    </div>
                                    <div class="pl-7 lg:text-2xl text-3xl text-gray-400">
                                        <p>Ron, Coca-Cola, limón</p>
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
                                        <span class="lg:text-3xl text-4xl font-semibold">
                                            CAMPARI
                                        </span>
                                    </div>
                                    <div class="pl-7 lg:text-2xl text-3xl text-gray-400">
                                        <p>Campari, jugo de naranja</p>
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
                                        <span class="lg:text-3xl text-4xl font-semibold">
                                            SEX ON THE BEACH
                                        </span>
                                    </div>
                                    <div class="pl-7 lg:text-2xl text-3xl text-gray-400">
                                        <p>Vodka, licor de durazno, jugo de naranja, granadina</p>
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
                                        <span class="lg:text-3xl text-4xl font-semibold">
                                            GIN TONIC TRADICIONAL
                                        </span>
                                    </div>
                                    <div class="pl-7 lg:text-2xl text-3xl text-gray-400">
                                        <p>Gin, agua tónica, limón</p>
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
