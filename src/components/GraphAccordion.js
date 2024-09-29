import { useState } from "react";
import PieChart from "./PieChart";

export default function GraphAccordion({
    totalAcceptedInvitations,
    totalRejectedInvitations,
}) {
    const [isHidden, setIsHidden] = useState(false);
    return (
        <div id="accordion-arrow-icon" data-accordion="open">
            <h2 id="accordion-arrow-icon-heading-1">
                <button
                    type="button"
                    className="mt-5 flex items-center justify-between w-full font-medium rtl:text-right text-gray-800 bg-gray-200 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 cursor-default"
                    data-accordion-target="#accordion-arrow-icon-body-1"
                    aria-expanded={!isHidden}
                    aria-controls="accordion-arrow-icon-body-1"
                >
                    <h1
                        className="pb-3 mb-2 text-2 font-bold leading-none tracking-tight text-gray-900 md:text-lg lg:text-xl cursor-pointer"
                        onClick={() => setIsHidden(!isHidden)}
                    >
                        {!isHidden ? "Ver " : "Ocultar "}
                        <mark className="px-2 text-white bg-fuchsia-900 rounded">
                            gráfico
                        </mark>
                    </h1>
                </button>
            </h2>
            {isHidden ? (
                <div
                    id="accordion-arrow-icon-body-1"
                    aria-labelledby="accordion-arrow-icon-heading-1"
                >
                    <div className="p-5 border border-b-0 border-gray-200 mx-auto flex justify-center">
                        <PieChart
                            totalAcceptedInvitations={totalAcceptedInvitations}
                            totalRejectedInvitations={totalRejectedInvitations}
                        />
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
