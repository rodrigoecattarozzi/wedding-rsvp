import React from "react";

export default function CustomImput({
    label,
    id,
    error,
    type,
    placeholder,
    value,
    onChange,
}) {
    return (
        <div>
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-red-700"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                className={`bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && (
                <p className="mt-2 text-sm text-red-600">
                    <span className="font-medium">Oh, snap!</span> {error}
                </p>
            )}
        </div>
    );
}
