import { useEffect, useState } from "react";
import { db } from "../firebase";
import { CSVLink } from "react-csv";

export default function SongList() {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const csvHeaders = [
        { label: "Artista", key: "artist" },
        { label: "Canción", key: "song" },
    ];

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const snapshot = await db.collection("songs").get();
                const songsList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setSongs(songsList);
            } catch (err) {
                setError("Error al cargar las canciones.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    if (loading) return;
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-fuchsia-900 border-8 h-64 w-64"></div>
    </div>;
    if (error) return <p>{error}</p>;

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12 text-gray-600 text-center">
                Lista de Canciones
            </h2>
            <table className="min-w-full divide-y divide-gray-300 text-xl mb-8 rounded-3xl">
                <thead className=" font-black">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-gray-600 uppercase tracking-wider text-center"
                        >
                            Artista
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-gray-600 uppercase tracking-wider text-center"
                        >
                            Nombre
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 font-bold">
                    {songs.length > 0 ? (
                        songs.map((song) => (
                            <tr key={song.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                                    {song.artist !== null
                                        ? song.artist
                                        : "Desconocido"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                                    {song.song}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="2"
                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                            >
                                No hay canciones disponibles.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <CSVLink
                data={songs}
                headers={csvHeaders}
                filename="canciones-solicitadas.csv"
            >
                <div className="text-center cursor-default">
                    <button
                        type="button"
                        className="text-white bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fuchsia-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-5 cursor-pointer"
                    >
                        Exportar como CSV
                    </button>
                </div>
            </CSVLink>
        </div>
    );
}
