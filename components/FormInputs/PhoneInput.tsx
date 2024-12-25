"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Select from "react-tailwindcss-select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";
import { europeanCountries } from "../data/countries";

type TextInputProps = {
  register: any;
  setPhoneCode: any;
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
  setPhoneCode,
  errors,
  label,
  type,
  name,
  toolTipText,
  unit,
  icon,
  placeholder,
}: TextInputProps) {
  const Icon = icon;
  const initialCountryCode = "CZ";
  const modifiedCountries = europeanCountries.map((country) => {
    return {
      value: country.value,
      label: `${country.flag} ${country.countryCode} (${country.phoneCode})`,
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
  console.log(initialCountry);

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (europeanCountries = selectedCountry) => {
    setSelectedCountry(europeanCountries);
    setPhoneCode(europeanCountries.phoneCode);
    console.log(europeanCountries);
  };

  useEffect(() => {
    setPhoneCode(selectedCountry.phoneCode);
  }, [selectedCountry.phoneCode, setPhoneCode]);

  // Custom register to combine country code with phone number
  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    // Remove all non-numeric characters
    const formattedValue = value.replace(/\D/g, "");
    setPhoneNumber(formattedValue);
    // Set the value of the input to the selected country's phone code
    const fullPhoneNumber = `${selectedCountry.phoneCode} ${formattedValue}`;
    register(name).onChange({
      target: {
        name,
        value: fullPhoneNumber,
      },
    });
  }

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
          <div className="w-36">
            <div className="">
              <div className="flex items-center space-x-2">
                <Select
                  isSearchable
                  primaryColor="purple"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  options={modifiedCountries}
                  //placeholder={label}
                />
              </div>
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
              type="tel"
              onChange={handlePhoneChange}
              {...register(`${name}`, { required: true })}
              className={cn(
                "block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 text-sm",
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
        {errors[name] && (
          <span className="text-xs text-red-600">{label} je vyžadováno</span>
        )}
      </div>
    </div>
  );
}
