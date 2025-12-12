"use client";
import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface TextareaInputProps {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isRequired?: boolean;
  // type?: string;
  className?: string;
}

export default function TextareaInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  // type = "text",
  className = "sm:col-span-2",
}: TextareaInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 font-medium text-gray-900 text-sm leading-6"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className="block shadow-sm py-1.5 border-0 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
        {errors[`${name}`] && (
          <span className="text-red-600 text-sm">{label} is required</span>
        )}
      </div>
    </div>
  );
}