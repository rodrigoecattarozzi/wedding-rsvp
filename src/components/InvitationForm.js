import React from "react";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const InvitationForm = ({ isOpen, onClose, dinner }) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: { errors },
    } = useForm();

    setValue("cena", dinner);

    const onSubmit = async (data) => {
        const { email } = data;

        const emailExists = await db
            .collection("invitations")
            .where("email", "==", email)
            .get();
        if (!emailExists.empty) {
            setError("email", {
                type: "manual",
                message: "Este email ya ha sido registrado",
            });
            return;
        }

        try {
            await db.collection("invitations").add(data);
            navigate(`/result?isAccepted=${data.accepted}`);
        } catch (error) {
            console.error("Error al agregar documento: ", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-lg overflow-hidden items-center justify-center shadow-lg max-w-3xl mx-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-3 z-50 text-gray-700 hover:text-gray-900"
                    onClick={onClose}
                >
                    ✕
                </button>
                <div className="container py-12 px-4 min-w-[300px]">
                    <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden min-w-[300px]whitespace-nowrap sm:whitespace-break-spaces">
                        <div className="m-4 mb-1">
                            <h1 className="p-2 mb-3 text-2xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-3xl md:text-4xl whitespace-break-spaces">
                                Completá tus{" "}
                                <mark className="px-2 text-white bg-fuchsia-900 rounded">
                                    datos
                                </mark>
                            </h1>
                            <p className="p-2 text-gray-500 lg:text-base sm:text-xl text-5xl font-bold whitespace-break-spaces">
                                Por favor, revisá la información antes de
                                enviarla
                            </p>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="pt-3"
                            >
                                <div className="relative p-2">
                                    <input
                                        type="text"
                                        {...register("name", {
                                            required: true,
                                        })}
                                        id="name"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:ring-0 focus:border-fuchsia-900 focus:ring-fuchsia-900 focus:outline-fuchsia-900 peer
                                        mt-1 shadow-sm sm:text-3xl text-6xl font-black"
                                        placeholder=" "
                                    />
                                    {errors.name && (
                                        <p className="text-red-500">
                                            {errors.name.message}
                                        </p>
                                    )}
                                    <label
                                        htmlFor="name"
                                        className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-fuchsia-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 sm:text-xl text-6xl"
                                    >
                                        ¿Cuál es tu nombre?
                                    </label>
                                    <span className="absolute inset-y-0 right-0 pr-3 pt-2 flex items-center text-fuchsia-600 sm:text-3xl text-6xl font-black">
                                        *
                                    </span>
                                </div>
                                <div className="relative p-2">
                                    <input
                                        type="email"
                                        {...register("email", {
                                            required: true,
                                        })}
                                        id="email"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:ring-0 focus:border-fuchsia-900 focus:ring-fuchsia-900 focus:outline-fuchsia-900 peer mt-1 shadow-sm sm:text-3xl text-6xl font-black"
                                        placeholder=" "
                                    />
                                    {errors.email && (
                                        <p className="text-red-500">
                                            {errors.email.message}
                                        </p>
                                    )}
                                    <label
                                        htmlFor="email"
                                        className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-fuchsia-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 sm:text-xl text-6xl"
                                    >
                                        ¿Cuál es tu e-mail?
                                    </label>
                                    <span className="absolute inset-y-0 right-0 pr-3 pt-2 flex items-center text-fuchsia-600 sm:text-3xl text-6xl font-black">
                                        *
                                    </span>
                                </div>
                                <div className="relative p-2">
                                    <textarea
                                        {...register("diet")}
                                        id="diet"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:ring-0 focus:border-fuchsia-900 focus:ring-fuchsia-900 focus:outline-fuchsia-900 peer mt-1 shadow-sm sm:text-3xl text-6xl font-black"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="diet"
                                        className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-fuchsia-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 sm:text-xl text-6xl"
                                    >
                                        ¿Tenés alguna restricción alimentaria?
                                    </label>
                                </div>
                                <div className="p-2">
                                    <label className="inline-flex items-center me-5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            {...register("accepted")}
                                            className="sr-only peer"
                                        />
                                        <div className="relative w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-fuchsia-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-fuchsia-900"></div>
                                        <span className="ms-3 text-gray-900 sm:text-3xl text-6xl font-black">
                                            Confirmo asistencia
                                        </span>
                                    </label>
                                </div>
                                <input
                                    type="hidden"
                                    {...register("cena")}
                                    value="Cena"
                                />
                                <div className="p-2 text-center">
                                    <button
                                        type="submit"
                                        className="text-white bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fuchsia-400  rounded-lg px-5 py-2.5 text-center me-2 mb-2 mt-8 mx-auto sm:text-3xl text-6xl font-black"
                                    >
                                        Enviar respuesta
                                    </button>
                                    {errors.email && (
                                        <p className="text-red-500">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                                <span className="p-2 block text-gray-500 sm:text-3xl text-6xl font-black">
                                    Los campos marcados con{" "}
                                    <mark className="text-fuchsia-600 bg-white">
                                        *
                                    </mark>{" "}
                                    son requeridos
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvitationForm;
