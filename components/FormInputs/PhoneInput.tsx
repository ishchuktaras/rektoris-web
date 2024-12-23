"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Select from "react-tailwindcss-select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";
import { countries } from "../data/countries";

type PhoneInputProps = {
  register: any;
  errors: any;
  label: string;
  type?: string;
  name: string;
  toolTipText?: string;
  unit?: string;
  placeholder?: string;
  icon?: any;
};

export default function PhoneInput({
  register,
  errors,
  label,
  type = "text",
  name,
  toolTipText,
  unit,
  icon,
  placeholder,
}: PhoneInputProps) {
  const Icon = icon;
  const initialCountryCode = "CZ";
  const modifiedCountries = countries.map((country) => {
    return {
      value: country.value,
      label: `${country.flag} ${country.countryCode} ${country.phoneCode}`,
      phoneCode: country.phoneCode,
      currencyCode: country.currencyCode,
      countryCode: country.countryCode,
      flag: country.flag,
    };
  });
  const initialCountry = modifiedCountries.find(
    (item) => item.countryCode === initialCountryCode
  );

  const [selectedCountry, setSelectedCountry] = useState<any>(initialCountry);

  const [phoneNumber, setPhoneNumber] = useState("");

  // Handle country selection
  const handleCountryChange = (country: any) => {
    setSelectedCountry(country);
    console.log(country);
  };

  // Handle phone number input
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanValue = value.replace(/\D/g, "");
    setPhoneNumber(cleanValue);

    // Update the hidden input with full phone number
    const fullNumber = `${selectedCountry.phoneCode}${cleanValue}`;

    register(name).onChange({
      target: {
        name,
        value: fullNumber,
      },
    });
  };

  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button>
                  <CircleHelp className="w-4 h-4 text-slate-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="mt-2">
        <div className="flex gap-2">
          <div className="w-32">
            <div className="flex items-center space-x-2">
              <Select
                isSearchable
                primaryColor="purple"
                value={selectedCountry}
                onChange={handleCountryChange}
                options={modifiedCountries}
                placeholder={label}
              />
            </div>
          </div>
          <div className="relative rounded-md flex-1">
            {icon && (
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Icon className="text-slate-300 w-4 h-4" />
              </div>
            )}
            <input
              id={name}
              type={type}
              {...register(`${name}`, { required: true })}
              className={cn(
                "block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-sm",
                (errors[`${name}`] && "focus:ring-red-500 pl-8") ||
                  (icon && "pl-8")
              )}
              placeholder={placeholder || label}
            />
            {unit && (
              <p className="bg-white py-2 px-3 rounded-tr-md rounded-br-md absolute inset-y-0 right-1 my-[2px] flex items-center">
                {unit}
              </p>
            )}
          </div>
        </div>
        {errors[`${name}`] && (
          <span className="text-xs text-red-600">Pole "{label}" je povinné</span>
        )}
      </div>
    </div>
  );
}
