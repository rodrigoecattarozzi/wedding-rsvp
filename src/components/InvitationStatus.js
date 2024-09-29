import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { CSVLink } from "react-csv";
import ModalConfirmDelete from "./ModalConfirmDelete";
import GraphAccordion from "./GraphAccordion";

const InvitationStatus = () => {
    const [invitations, setInvitations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filteredInvitations, setFilteredInvitations] = useState([]);
    const [selectedInvitation, setSelectedInvitation] = useState(null);

    useEffect(() => {
        const fetchInvitations = async () => {
            setIsLoading(true);
            const snapshot = await db.collection("invitations").get();
            const invitationList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            // Filtrar invitaciones donde algunos campos importantes están vacíos
            const validInvitations = invitationList.filter(
                (invitation) => invitation.name && invitation.email
            );

            setInvitations(validInvitations);
            setFilteredInvitations(validInvitations);
            setIsLoading(false);
        };
        fetchInvitations();
    }, []);

    const deleteInvitation = (id) => {
        setSelectedInvitation(id);
    };

    const confirmDelete = async () => {
        try {
            await db.collection("invitations").doc(selectedInvitation).delete();
            setInvitations(
                invitations.filter(
                    (invitation) => invitation.id !== selectedInvitation
                )
            );
            setFilteredInvitations(
                filteredInvitations.filter(
                    (invitation) => invitation.id !== selectedInvitation
                )
            );
            setSelectedInvitation(null);
        } catch (error) {
            console.error("Error deleting invitation:", error);
        }
    };

    const cancelDelete = () => {
        setSelectedInvitation(null);
    };

    const handleFilter = (filter) => {
        if (filter === "all") {
            setFilteredInvitations(invitations);
        } else if (filter === "accepted") {
            setFilteredInvitations(
                invitations.filter(
                    (invitation) =>
                        invitation.accepted === true &&
                        invitation.name &&
                        invitation.email
                )
            );
        } else if (filter === "rejected") {
            setFilteredInvitations(
                invitations.filter(
                    (invitation) =>
                        invitation.accepted === false &&
                        invitation.name &&
                        invitation.email
                )
            );
        }
    };

    const handleFilterDinner = (filter) => {
        if (filter === "all") {
            setFilteredInvitations(invitations);
        } else if (filter === "dinner") {
            setFilteredInvitations(
                invitations.filter(
                    (invitation) =>
                        invitation.cena === "Cena" &&
                        invitation.name &&
                        invitation.email
                )
            );
        } else if (filter === "party") {
            setFilteredInvitations(
                invitations.filter(
                    (invitation) =>
                        invitation.cena === "Fiesta" &&
                        invitation.name &&
                        invitation.email
                )
            );
        }
    };

    const totalAcceptedInvitations = invitations.filter(
        (invitation) => invitation.accepted
    ).length;

    const totalRejectedInvitations = invitations.filter(
        (invitation) => !invitation.accepted
    ).length;

    const csvHeaders = [
        { label: "Nombre", key: "name" },
        { label: "Email", key: "email" },
        { label: "Aceptada", key: "accepted" },
        { label: "Restricción alimentaria", key: "diet" },
    ];

    return (
        <div>
            <h1 className="p-5 pb-3 mb-2 text-2 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                Estado de las{" "}
                <mark className="px-2 text-white bg-fuchsia-900 rounded">
                    invitaciones
                </mark>
            </h1>
            {invitations.length > 0 ? (
                <div className="mb-5 ml-5 mr-5">
                    <div>
                        <div className="mb-5">
                            <label
                                htmlFor="filter"
                                className="block mb-1 text-base font-medium text-gray-900"
                            >
                                Filtrar por
                            </label>
                            <div className="flex">
                                <select
                                    id="filter"
                                    className="min-w-[200px] block w-200 px-1 py-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-fuchsia-900 focus:border-fuchsia-900 mr-4"
                                    onChange={(e) =>
                                        handleFilter(e.target.value)
                                    }
                                >
                                    <option className="py-2" value="all">
                                        Todas
                                    </option>
                                    <option className="py-2" value="accepted">
                                        Aceptadas
                                    </option>
                                    <option className="py-2" value="rejected">
                                        Rechazadas
                                    </option>
                                </select>
                                <select
                                    id="filter"
                                    className="min-w-[200px] block w-200 px-1 py-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-fuchsia-900 focus:border-fuchsia-900"
                                    onChange={(e) =>
                                        handleFilterDinner(e.target.value)
                                    }
                                >
                                    <option className="py-2" value="all">
                                        Todas
                                    </option>
                                    <option className="py-2" value="dinner">
                                        Cena
                                    </option>
                                    <option className="py-2" value="party">
                                        Fiesta
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}

            {isLoading ? (
                <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                    <div className="border-t-transparent border-solid animate-spin  rounded-full border-fuchsia-900 border-8 h-64 w-64"></div>
                </div>
            ) : filteredInvitations.length > 0 ? (
                <div className="m-5">
                    <table className="min-w-full border-collapse rounded-lg overflow-hidden">
                        <thead className="bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 text-white block md:table-header-group">
                            <tr className="border md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
                                <th className="p-2 text-center ring-white ring-1 text-white md:border block md:table-cell md:w-1/4">
                                    Nombre
                                </th>
                                <th className="p-2 text-center ring-white ring-1 text-white md:border block md:table-cell md:w-1/4">
                                    Email
                                </th>
                                <th className="p-2 text-center ring-white ring-1 text-white md:border block md:table-cell md:w-1/4">
                                    Restricción alimentaria
                                </th>
                                <th className="p-2 text-center ring-white ring-1 text-white md:border block md:table-cell">
                                    Cena
                                </th>
                                <th className="p-2 text-center ring-white ring-1 text-white md:border block md:table-cell">
                                    Aceptada
                                </th>
                                <th className="p-2 text-center ring-white ring-1 text-white md:border block md:table-cell">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-300 block md:table-row-group">
                            {filteredInvitations.map((invitation) => (
                                <tr
                                    key={invitation.id}
                                    className="bg-white hover:bg-gray-200 border-b border-gray-200 md:border-none block md:table-row"
                                >
                                    <td className="p-2 md:border text-left block md:table-cell md:w-1/4">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                            Nombre
                                        </span>
                                        {invitation.name}
                                    </td>
                                    <td className="p-2 md:border text-left block md:table-cell md:w-1/4">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                            Email
                                        </span>
                                        {invitation.email}
                                    </td>

                                    <td className="p-2 md:border text-left block md:table-cell break-all md:w-1/4">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                            Restricción alimentaria
                                        </span>
                                        {invitation.diet}
                                    </td>
                                    <td className="p-2 md:border text-left block md:table-cell break-all md:w-1/4">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                            Cena
                                        </span>
                                        {invitation.cena}
                                    </td>
                                    <td className="p-2 md:border text-left block md:table-cell">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                            Aceptada
                                        </span>
                                        {invitation.accepted ? (
                                            <div className="flex items-center">
                                                <svg
                                                    className="w-[20px] h-[20px] text-green-600"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.8"
                                                        d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
                                                    />
                                                </svg>{" "}
                                                <span className="ml-1">
                                                    Aceptada
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center">
                                                <svg
                                                    className="w-[20px] h-[20px] text-red-600"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.8"
                                                        d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"
                                                    />
                                                </svg>{" "}
                                                <span className="ml-1">
                                                    Rechazada
                                                </span>
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-2 md:border text-left block md:table-cell">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                            Acciones
                                        </span>
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mx-auto flex"
                                            onClick={() =>
                                                deleteInvitation(invitation.id)
                                            }
                                        >
                                            <svg
                                                className="w-[20px] h-[20px] text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pt-5 flex items-center space-x-5">
                        <div className="flex items-center space-x-1">
                            <svg
                                className="w-[20px] h-[20px] text-green-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                    d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
                                />
                            </svg>{" "}
                            <span className="text-lg font-medium text-gray-900">
                                {totalAcceptedInvitations}
                            </span>
                        </div>{" "}
                        <div className="flex items-center space-x-1">
                            <svg
                                className="w-[20px] h-[20px] text-red-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                    d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"
                                />
                            </svg>
                            <span className="text-lg font-medium text-gray-900">
                                {totalRejectedInvitations}
                            </span>
                        </div>
                    </div>
                    <GraphAccordion
                        totalAcceptedInvitations={totalAcceptedInvitations}
                        totalRejectedInvitations={totalRejectedInvitations}
                    />
                    <div className="text-center cursor-default">
                        <CSVLink
                            data={filteredInvitations}
                            headers={csvHeaders}
                            filename="invitaciones-boda.csv"
                        >
                            <button
                                type="button"
                                className="text-white bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fuchsia-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-5 cursor-pointer"
                            >
                                Exportar como CSV
                            </button>
                        </CSVLink>
                    </div>
                    <ModalConfirmDelete
                        isOpen={!!selectedInvitation}
                        onCancel={cancelDelete}
                        onConfirm={confirmDelete}
                    />
                </div>
            ) : (
                <p>No hay datos</p>
            )}
        </div>
    );
};

export default InvitationStatus;
