import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface TextInputProps {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isRequired?: boolean;
  type?: string;
  className?: string;
  defaultValue?: string;
}

export default function TextInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue="",
  
}: TextInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="pt-[15.25px] text-[#6B7280] text-[13px]"
      >
        {label}
      </label>
      <div className="mt-[13px]">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className="block px-4 border-[#E5E7EB] rounded-lg ring-[#E5E7EB] ring-1 focus:ring-[#E5E7EB] focus:ring-1 ring-inset focus:ring-inset w-full h-[44px] text-[#6B7280] placeholder:text-[#6B7280] placeholder:text-[12px] sm:leading-6"
          placeholder={`Enter your ${name.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-red-600 text-sm">{label} is required</span>
        )}
      </div>
    </div>
  );
}