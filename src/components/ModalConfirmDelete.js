import React from "react";

export default function ModalConfirmDelete({ isOpen, onCancel, onConfirm }) {
    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="bg-white rounded-lg p-6 z-10">
                <p className="mb-4">
                    ¿Estás seguro de que deseas eliminar esta invitación?
                </p>
                <div className="flex justify-center">
                    <button
                        className="mr-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                        onClick={onConfirm}
                    >
                        Eliminar
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    ) : null;
}
