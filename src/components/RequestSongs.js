import { db } from "../firebase";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import music from "../assets/music.png";

export default function RequestSongs() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            if (data.song) {
                await db.collection("songs").add(data);
                toast.success("¡Solicitud enviada con éxito!");
                reset();
            }
        } catch (error) {
            toast.error("Ocurrió un error al enviar la solicitud.");
        }
    };

    return (
        <div className="relative bg-white rounded-3xl overflow-hidden items-center justify-center shadow-lg w-full max-w-3xl mx-auto md:min-w-[600px] pb-2 px-4">
            <div className="m-4">
                <div className="flex justify-center items-center max-w-32 mx-auto">
                    <img
                        src={music}
                        alt="music"
                        className="object-cover animate-pulse"
                    />
                </div>
                <p className="sm:text-3xl text-6xl font-black mb-6 mt-4 text-gray-600 text-center break-words whitespace-normal">
                    ¿Qué música te gustaría escuchar durante la fiesta?
                </p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 text-center"
                >
                    <div className="relative p-2">
                        <input
                            type="text"
                            id="song"
                            {...register("song", { required: true })}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:ring-0 focus:border-fuchsia-900 focus:ring-fuchsia-900 focus:outline-fuchsia-900 peer
                                        mt-1 shadow-sm sm:text-3xl text-6xl font-black"
                            placeholder=" "
                        />
                        <label
                            htmlFor="song"
                            className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-fuchsia-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 sm:text-xl text-6xl"
                        >
                            Nombre del tema
                        </label>
                        <span className="absolute inset-y-0 right-0 pr-3 pt-2 flex items-center text-fuchsia-600 sm:text-3xl text-6xl font-black">
                            *
                        </span>
                    </div>
                    <div className="relative p-2">
                        <input
                            type="text"
                            id="artist"
                            {...register("artist", { required: false })}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:ring-0 focus:border-fuchsia-900 focus:ring-fuchsia-900 focus:outline-fuchsia-900 peer
                                        mt-1 shadow-sm sm:text-3xl text-6xl font-black"
                            placeholder=" "
                        />
                        <label
                            htmlFor="artist"
                            className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-fuchsia-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 sm:text-xl text-6xl"
                        >
                            Artista
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fuchsia-400 rounded-lg px-5 py-2.5 text-center me-2 mb-2 mx-auto sm:text-3xl text-6xl font-black"
                    >
                        Solicitar
                    </button>
                    <span className="p-2 block text-gray-500 sm:text-3xl text-6xl font-black">
                        Los campos marcados con{" "}
                        <mark className="text-fuchsia-600 bg-white">*</mark> son
                        requeridos
                    </span>
                </form>
            </div>
        </div>
    );
}
