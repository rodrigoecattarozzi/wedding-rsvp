import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import InvitationForm from "./InvitationForm";
import RequestSongs from "./RequestSongs";
import textureImage from "../assets/textured_paper_@2X.png";
import fotoMyS from "../assets/IMG_5377-Mejorado-NR.jpg";
import divider from "../assets/divider-2.png";
import church from "../assets/church.png";
import clothesMan from "../assets/groom.png";
import clothesWoman from "../assets/dress.png";
import gift from "../assets/gift.png";
import invitationIcon from "../assets/invitation.png";
import information from "../assets/file.png";
import instagram from "../assets/instagram.png";
import cocktail from "../assets/cocktail.png";

import reminder from "../assets/reminder.png";
import toast from "../assets/toast.png";

import womanDressOne from "../assets/women/0896db9bdb50a0a5a7a203ea9bd48bd9.jpg";
import womanDressTwo from "../assets/women/5d1438c8830160108bf365fbb21938a6.jpg";
import womanDressThree from "../assets/women/9de1c444a41d39656eef44cfabe96d3b.jpg";
import womanDressFour from "../assets/women/19e329765c8cf274e7da9831207c32c3.jpg";
import womanDressFive from "../assets/women/46a0b85fb6a2081fd67d1698687b7c4d.jpg";
import womanDressSix from "../assets/women/9ca172bb9ef8330ec0d60e3336e06377.jpg";
import womanDressSeven from "../assets/women/d20f9d7cf3776d7f8a2ceee9cb08bc3a.jpg";

import manSuitOne from "../assets/men/28dcef1881e96ce0c353bbdc83c6aaa4.jpg";
import manSuitTwo from "../assets/men/58f2fe146bac0b783b15508f5bc60d5b.jpg";
import manSuitThree from "../assets/men/8193f591f5845b17d970e63342bb079c.jpg";
import manSuitFour from "../assets/men/86b882ece83ebc7a0a7b6317d095e0e1.jpg";
import manSuitFive from "../assets/men/90eff5e1c8e69526daec302765242728.jpg";
import manSuitSix from "../assets/men/af83091c1ac36d000d7a0b03746f932e.jpg";
import manSuitSeven from "../assets/men/fb0e51afeb845c4348d73632be90fe1e.jpg";
import ModalDrinks from "./ModalDrinks";

const HomePage = () => {
    const [buttonVisible, setButtonVisible] = useState(true);
    const weddingDate = new Date("2024-11-16T21:00:00");
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDrinksOpen, setIsDrinksOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("#MauroyShei").then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 3000);
        });
    };

    const maleSlides = [
        {
            src: manSuitOne,
            alt: "Slide 1",
        },
        {
            src: manSuitTwo,
            alt: "Slide 2",
        },
        {
            src: manSuitThree,
            alt: "Slide 3",
        },
        {
            src: manSuitFour,
            alt: "Slide 4",
        },
        {
            src: manSuitFive,
            alt: "Slide 5",
        },
        {
            src: manSuitSix,
            alt: "Slide 6",
        },
        {
            src: manSuitSeven,
            alt: "Slide 7",
        },
    ];

    const femaleSlides = [
        {
            src: womanDressOne,
            alt: "Slide 1",
            text: "",
        },
        {
            src: womanDressTwo,
            alt: "Slide 2",
        },
        {
            src: womanDressThree,
            alt: "Slide 3",
        },
        {
            src: womanDressFour,
            alt: "Slide 4",
        },
        {
            src: womanDressFive,
            alt: "Slide 5",
        },
        {
            src: womanDressSix,
            alt: "Slide 6",
        },
        {
            src: womanDressSeven,
            alt: "Slide 7",
        },
    ];

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    const openDrinks = () => {
        setIsDrinksOpen(true);
    };

    const closeDrinks = () => {
        setIsDrinksOpen(false);
    };

    function calculateTimeLeft() {
        const difference = +weddingDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setButtonVisible(false);
            } else {
                setButtonVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const smoothScrollTo = (target, duration) => {
        const start = window.scrollY;
        const startTime = performance.now();

        const targetPosition = target.getBoundingClientRect().top + start;
        const distance = targetPosition - start;

        const scrollStep = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easing = easeInOutCubic(progress);

            window.scrollTo(0, start + distance * easing);

            if (elapsed < duration) {
                requestAnimationFrame(scrollStep);
            }
        };

        requestAnimationFrame(scrollStep);
    };

    const scrollToDetails = () => {
        const element = document.getElementById("details");
        smoothScrollTo(element, 2000);
        setButtonVisible(false);
    };

    const handleCopyPhone = () => {
        const phoneNumber = "3624562484";
        navigator.clipboard.writeText(phoneNumber);
        setCopiedPhone(true);

        setTimeout(() => {
            setCopiedPhone(false);
        }, 3000);
    };

    // Google Calendar Link (dates in UTC)
    const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=Casamiento+Sheila+%26+Mauro&dates=20241117T000000Z/20241117T040000Z&details=¡Acompañanos+en+la+celebración+de+nuestra+boda!&location=Santuario+Inmaculada+Concepción&sf=true&output=xml`;

    // Apple Calendar Link with ICS format
    const appleCalendarLink = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0ABEGIN:VTIMEZONE%0D%0ATZID:America/Argentina/Cordoba%0D%0ABEGIN:STANDARD%0D%0ADTSTART:20240407T000000%0D%0ATZOFFSETFROM:-0300%0D%0ATZOFFSETTO:-0300%0D%0ATZNAME:-03%0D%0AEND:STANDARD%0D%0AEND:VTIMEZONE%0D%0ABEGIN:VEVENT%0D%0ADTSTART;TZID=America/Argentina/Cordoba:20241116T210000%0D%0ADTEND;TZID=America/Argentina/Cordoba:20241117T010000%0D%0ASUMMARY:Casamiento%20Sheila%20%26%20Mauro%0D%0ADESCRIPTION:¡Acompañanos%20en%20la%20celebración%20de%20nuestra%20boda!%0D%0ALOCATION:Santuario%20Inmaculada%20Concepción%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR`;

    return (
        <div
            className="text-fuchsia-900"
            style={{
                backgroundImage: `url(${textureImage}), linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(250,232,255,1) 100%)`,
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                backgroundRepeat: "repeat",
                fontFamily: "'Poiret One', sans-serif",
            }}
        >
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                closeOnClick
                pauseOnHover
                draggable
                toastClassName={() =>
                    "relative flex items-center justify-between p-4 max-w-xs mx-auto mt-4 rounded-lg shadow-lg text-white bg-gradient-to-r from-fuchsia-900 to-fuchsia-600"
                }
                bodyClassName={() => "flex items-center text-sm"}
            />
            <div
                className={
                    buttonVisible
                        ? "min-h-screen flex flex-col justify-center items-center text-center"
                        : "flex flex-col justify-center items-center text-center"
                }
            >
                <header className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 m-auto">
                    <div className="">
                        <div className="relative">
                            <img
                                src={fotoMyS}
                                alt="fotoMyS"
                                className="rounded-[150px] sm:h-[45vh] md:h-[55vh] lg:h-[70vh] object-cover"
                            />
                        </div>
                    </div>
                    <div className="text-center m-auto font-normal">
                        <h1
                            className="text-9xl"
                            style={{ fontFamily: "'Italianno', cursive" }}
                        >
                            Sheila
                            <br></br>&<br></br>Mauro
                        </h1>
                        <p className="text-4xl mt-10 font-bold">
                            ¡NOS CASAMOS!
                        </p>
                    </div>
                </header>
                <div className="absolute bottom-0 mb-4">
                    {buttonVisible && (
                        <div className="absolute bottom-0 mb-4 transition-opacity duration-500 ease-in-out">
                            <button
                                onClick={scrollToDetails}
                                className="text-xl text-fuchsia-900 hover:text-fuchsia-950 focus:outline-none"
                            >
                                <svg
                                    className="w-10 h-10 text-fuchsia-900 hover:text-fuchsia-950 focus:outline-none"
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
                                        strokeWidth="2"
                                        d="m19 9-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="container px-2 py-16 mx-auto">
                <div className="flex justify-center">
                    <img
                        src={divider}
                        alt="divider"
                        className="object-cover animate-pulse"
                    />
                </div>
                <section id="details" className="mb-12 text-center">
                    <h2 className="text-3xl text-gray-600 mb-6">SÓLO FALTAN</h2>
                    <div className="sm:text-base md:text-8xl text-5xl flex justify-center items-center space-x-7 sm:space-x-[1px] bg-white rounded-3xl shadow-lg max-w-[850px] mx-auto">
                        <div className="md:p-7 sm:p-3 text-gray-600 flex flex-col items-center">
                            <span>{timeLeft.days || "0"}</span>
                            <div className="lg:text-2xl sm:text-base md:text-xl">
                                DÍAS
                            </div>
                        </div>
                        <div className="md:p-7 sm:p-3 text-gray-600 flex flex-col items-center">
                            <span>{timeLeft.hours || "0"}</span>
                            <div className="lg:text-2xl sm:text-base md:text-xl">
                                HORAS
                            </div>
                        </div>
                        <div className="md:p-7 sm:p-3 text-gray-600 flex flex-col items-center">
                            <span>{timeLeft.minutes || "0"}</span>
                            <div className="lg:text-2xl sm:text-base md:text-xl">
                                MINUTOS
                            </div>
                        </div>
                        <div className="md:p-7 sm:p-3 text-gray-600 flex flex-col items-center">
                            <span>{timeLeft.seconds || "0"}</span>
                            <div className="lg:text-2xl sm:text-base md:text-xl">
                                SEGUNDOS
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center">
                    <img src={divider} alt="divider" className="object-cover" />
                </div>
                <section className="mb-12 grid lg:grid-cols-2 md:grid-cols-1 md:gap-6 sm:grid-cols-1 sm:gap-6">
                    <div>
                        <div className="bg-white rounded-3xl shadow-lg p-8 mb-4">
                            <div className="flex justify-center items-center max-w-32 mx-auto">
                                <img
                                    src={church}
                                    alt="church"
                                    className="object-cover animate-pulse"
                                />
                            </div>
                            <ul className="list-disc list-inside md:text-3xl sm:text-3xl text-9xl text-center text-gray-600 font-black">
                                <p className="mt-14 font-black">
                                    16 de noviembre de 2024
                                </p>
                                <p className="mt-14 font-black">21:15 HS</p>
                                <p className="mt-14 font-black">
                                    <button className="text-white bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fuchsia-400 rounded-lg md:text-3xl sm:text-2xl text-6xl font-black px-5 py-2.5 text-center me-2 mb-2 mx-auto whitespace-nowrap sm:whitespace-break-spaces">
                                        <a
                                            href="https://maps.app.goo.gl/b71PGVQVL8afEADi8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            PARROQUIA INMACULADA CONCEPCIÓN
                                        </a>
                                    </button>
                                </p>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white rounded-3xl shadow-lg p-8 mb-4">
                            <div className="flex justify-center items-center max-w-32 mx-auto">
                                <img
                                    src={toast}
                                    alt="toast"
                                    className="object-cover animate-pulse"
                                />
                            </div>
                            <ul className="list-disc list-inside md:text-3xl sm:text-3xl text-9xl text-center text-gray-600 font-black">
                                <p className="mt-14 font-black">
                                    16 de noviembre de 2024
                                </p>
                                <p className="mt-14 font-black">24:00 HS</p>
                                <p className="mt-14 font-black">
                                    <button className="text-white bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fuchsia-400 rounded-lg md:text-3xl sm:text-2xl text-6xl font-black px-5 py-2.5 text-center me-2 mb-2 mx-auto whitespace-nowrap sm:whitespace-break-spaces">
                                        <a
                                            href="https://maps.app.goo.gl/kqs1bh2s3g13BN5g6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            SALÓN "RANCHO DORADO"
                                        </a>
                                    </button>
                                </p>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center">
                    <img
                        src={divider}
                        alt="divider"
                        className="object-cover animate-pulse"
                    />
                </div>
                <section className="mb-12 grid lg:grid-cols-2 md:grid-cols-1 md:gap-6 sm:grid-cols-1 sm:gap-6 max-w-full">
                    <div>
                        <div className="bg-white rounded-3xl shadow-lg p-8 mb-4">
                            <div className="flex justify-center items-center max-w-32 mx-auto">
                                <img
                                    src={information}
                                    alt="information"
                                    className="object-cover animate-pulse"
                                />
                            </div>
                            <ul className="list-disc list-inside md:text-3xl sm:text-3xl text-9xl text-center text-gray-600">
                                <p className="mt-14">
                                    Costo por persona: $15.000
                                </p>
                                <p className="mt-14">
                                    Por transferencia a MercadoPago
                                </p>
                                <div className="mt-14 flex items-center justify-center whitespace-nowrap sm:whitespace-break-spaces">
                                    <p>Enviar comprobante al (362) 456-2484</p>

                                    <button
                                        className="ml-6 text-fuchsia-700 hover:text-fuchsia-900"
                                        onClick={handleCopyPhone}
                                    >
                                        <FontAwesomeIcon
                                            icon={
                                                copiedPhone ? faCheck : faCopy
                                            }
                                            size="lg"
                                        />
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white rounded-3xl shadow-lg p-8 mb-4">
                            <div className="flex justify-center items-center max-w-32 mx-auto">
                                <img
                                    src={gift}
                                    alt="gift"
                                    className="object-cover animate-pulse"
                                />
                            </div>
                            <ul className="list-disc list-inside md:text-3xl sm:text-3xl text-9xl text-center text-gray-600">
                                <p className="mt-14 break-words">
                                    CVU: 0000003100071315749735
                                </p>
                                <p className="mt-14">Alias: boda.mauyshei</p>
                                <p className="mt-14">
                                    Mauro Cattarozzi - MercadoPago
                                </p>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center">
                    <img
                        src={divider}
                        alt="divider"
                        className="object-cover animate-pulse"
                    />
                </div>
                <section className="mx-auto max-w-[850px]">
                    <div>
                        <div className="bg-white rounded-3xl shadow-lg p-8 mb-4">
                            <div className="flex justify-center items-center max-w-32 mx-auto">
                                <img
                                    src={cocktail}
                                    alt="cocktail"
                                    className="object-cover animate-pulse"
                                />
                            </div>
                            <ul className="list-disc list-inside md:text-3xl sm:text-3xl text-5xl text-center text-gray-600">
                                <p className="mt-14 mb-10">
                                    ¡HAY BARRA LIBRE!
                                </p>
                                <div className="mb-12 max-w-full justify-center items-center">
                                    <div>
                                        <div className="flex justify-center items center">
                                            <button
                                                className="text-white bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fuchsia-400 rounded-lg md:text-3xl sm:text-3xl px-5 py-2.5 text-center mb-2 mx-auto text-6xl font-black"
                                                onClick={openDrinks}
                                            >
                                                Tragos en barra
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <ModalDrinks
                                    isOpen={isDrinksOpen}
                                    onClose={closeDrinks}
                                />
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center">
                    <img
                        src={divider}
                        alt="divider"
                        className="object-cover animate-pulse"
                    />
                </div>
                <section className="mb-12 grid md:grid-cols-2 sm:grid-cols-1 gap-8">
                    <div>
                        <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg w-full mx-auto pb-6">
                            <div className="m-4">
                                <div className="flex justify-center items-center max-w-32 mx-auto">
                                    <img
                                        src={clothesMan}
                                        alt="clothesMan"
                                        className="object-cover animate-pulse mb-4"
                                    />
                                </div>
                                <div className="space-x-4">
                                    <p className="md:text-2xl sm:text-2xl text-5xl font-black mb-2 text-gray-800 text-center whitespace-nowrap">
                                        ELEGANTE RIGUROSO
                                    </p>
                                    <p className="md:text-xl sm:text-2xl text-4xl font-black mb-2 text-gray-600 text-center break-words whitespace-normal">
                                        En el caso de los chicos, pueden optar
                                        por trajes de cualquier color
                                    </p>
                                    <p className="md:text-xl sm:text-2xl text-4xl font-black mb-2 text-gray-600 text-center break-words whitespace-normal">
                                        excepto{" "}
                                        <span className="text-red-600">
                                            BLANCO, crema, rosa claro.
                                        </span>
                                    </p>
                                    <p className="md:text-xl sm:text-2xl text-4xl font-black mb-2 text-gray-600 text-center break-words whitespace-normal">
                                        A elección de cada uno si quiere usar
                                        corbata, moño,
                                    </p>
                                    <p className="md:text-xl sm:text-2xl text-4xl font-black mb-4 text-gray-600 text-center whitespace-nowrap">
                                        chaleco, tirantes, etc.
                                    </p>
                                </div>
                                <Carousel slides={maleSlides} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg w-full mx-auto pb-6">
                            <div className="m-4">
                                <div className="flex justify-center items-center max-w-32 mx-auto">
                                    <img
                                        src={clothesWoman}
                                        alt="clothesWoman"
                                        className="object-cover animate-pulse mb-4"
                                    />
                                </div>
                                <div className="space-x-4">
                                    <p className="md:text-2xl sm:text-2xl text-5xl font-black mb-2 text-gray-800 text-center whitespace-nowrap">
                                        ELEGANTE RIGUROSO
                                    </p>
                                    <p className="md:text-xl sm:text-2xl text-4xl font-black mb-2 text-gray-600 text-center break-words whitespace-normal">
                                        Las chicas, siempre diosas, pueden ir
                                        como quieran.
                                    </p>
                                    <p className="md:text-xl sm:text-2xl text-4xl font-black mb-2 text-gray-600 text-center break-words whitespace-normal">
                                        El color{" "}
                                        <span className="text-red-600">
                                            BLANCO
                                        </span>{" "}
                                        está reservado para la novia.
                                    </p>
                                    <p className="md:text-xl sm:text-2xl text-4xl font-black mb-2 text-gray-600 text-center break-words whitespace-normal">
                                        <span className="text-red-600">
                                            Evitar también colores similares.
                                        </span>
                                    </p>
                                    <p className="md:text-xl sm:text-2xl text-4xl font-black mb-4 text-gray-600 text-center break-words whitespace-normal">
                                        Además de sandalias, llevar zapatillas
                                        para bailar más cómodas.
                                    </p>
                                </div>
                                <Carousel slides={femaleSlides} />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center">
                    <img
                        src={divider}
                        alt="divider"
                        className="object-cover animate-pulse"
                    />
                </div>
                <section className="mb-8 mt-8 text-center">
                    <div className="relative text-white bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 rounded-3xl overflow-hidden items-center justify-center shadow-lg w-full mx-auto max-w-[850px]">
                        <div className="m-4">
                            <div className="flex justify-center items-center max-w-32 mx-auto">
                                <img
                                    src={invitationIcon}
                                    alt="invitation"
                                    className="object-cover animate-pulse mb-4"
                                />
                            </div>
                            <p className="md:text-3xl sm:text-2xl text-6xl font-black mb-6 text-gray-200">
                                Responder lo antes posible
                            </p>
                            <button
                                className="text-gray-700 bg-gradient-to-br from-gray-300 to-gray-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-500 rounded-lg md:text-3xl sm:text-2xl px-5 py-2.5 text-center me-2 mb-2 mx-auto text-6xl font-black"
                                onClick={openForm}
                            >
                                Formulario de asistencia
                            </button>
                            <InvitationForm
                                isOpen={isFormOpen}
                                onClose={closeForm}
                                dinner="Fiesta"
                            />
                        </div>
                    </div>
                </section>
                <div className="flex justify-center">
                    <img
                        src={divider}
                        alt="divider"
                        className="object-cover animate-pulse"
                    />
                </div>
                <section className="mb-8 mt-8 text-center">
                    <div className="relative bg-white rounded-3xl overflow-hidden items-center justify-center shadow-lg w-full mx-auto max-w-[850px] pb-4">
                        <div className="m-4">
                            <div className="flex justify-center items-center max-w-32 mx-auto">
                                <img
                                    src={instagram}
                                    alt="instagram"
                                    className="object-cover animate-pulse mb-4"
                                />
                            </div>
                            <p className="md:text-3xl sm:text-2xl text-6xl font-black mb-6 text-gray-600">
                                Compartí cada momento con nosotros, usando
                                nuestro hashtag
                            </p>
                            <p className="md:text-lg sm:text-lg text-3xl font-black mb-1 text-gray-600">
                                Tocá el botón para copiarlo
                            </p>
                            <button
                                onClick={handleCopy}
                                className="text-white bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fuchsia-400 rounded-lg md:text-3xl sm:text-2xl text-6xl font-black px-5 py-2.5 text-center me-2 mb-2 mx-auto"
                            >
                                #MauroyShei
                            </button>
                            {copied && (
                                <p className="text-gray-600 text-lg mt-4">
                                    ¡Copiado correctamente!
                                </p>
                            )}
                        </div>
                    </div>
                </section>
                <div className="flex justify-center">
                    <img
                        src={divider}
                        alt="divider"
                        className="object-cover animate-pulse"
                    />
                </div>
                <section className="mt-8 text-center">
                    <div className="relative bg-white rounded-3xl overflow-hidden items-center justify-center shadow-lg w-full mx-auto max-w-[850px] pb-4">
                        <div className="m-4">
                            <div className="flex justify-center items-center max-w-32 mx-auto">
                                <img
                                    src={reminder}
                                    alt="reminder"
                                    className="object-cover animate-pulse mb-4"
                                />
                            </div>
                            <div className="space-x-4">
                                <p className="md:text-2xl sm:text-xl text-6xl font-black mb-6 text-gray-600 text-center break-words whitespace-normal">
                                    ¡Agregá el evento a tu calendario para no
                                    olvidarte!
                                </p>
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                                    <a
                                        href={googleCalendarLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 md:text-2xl sm:text-xl text-6xl font-black"
                                    >
                                        Google Calendar
                                    </a>
                                    <a
                                        href={appleCalendarLink}
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 md:text-2xl sm:text-xl text-6xl font-black"
                                    >
                                        Apple Calendar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center">
                    <img
                        src={divider}
                        alt="divider"
                        className="object-cover animate-pulse"
                    />
                </div>
                <section className="mb-8 mt-8 text-center">
                    <RequestSongs />
                </section>
            </div>
            <footer className="bg-gray-100 text-gray-700 py-6 lg:py-3 mt-10 relative">
                <div className="max-w-screen-xl mx-auto text-center">
                    <p className="lg:text-lg text-2xl mb-4">
                        ¿Te gustó lo que ves? <br />
                        <span className="font-semibold lg:text-sm text-2xl">
                            Crea una experiencia única para tu evento
                        </span>
                    </p>
                    <a
                        href="https://wa.me/5493624068462?text=Hola,%20estoy%20interesado%20en%20tus%20servicios%20de%20diseño%20web"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-gradient-to-br from-fuchsia-900 to-fuchsia-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fuchsia-400 rounded-lg md:text-xl sm:text-xl text-3xl font-black px-5 py-2.5 text-center me-2 mb-2 mx-auto"
                    >
                        Contactame para más detalles
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
