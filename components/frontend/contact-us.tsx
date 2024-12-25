"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  PenLine,
  School,
  PanelsTopLeft,
  User,
  ShoppingCart,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";

import SubmitButton from "../FormInputs/SubmitButton";

import PhoneInput from "../FormInputs/PhoneInput";

// // function that handles phone number formatting by removing the leading zero if present, but only if it hasn't already been removed

// const formatPhoneNumber = (phoneNumber: string): string => {
//   // Convert to string in case a number is passed
//   const numberString = phoneNumber.toString();

//   // Check if number starts with '0'
//   if (numberString.startsWith('0')) {
//     return numberString.substring(1); // Remove the first character (0)
//   }

//   // If it doesn't start with 0 or isn't 10 digits, return as is
//   return numberString;
// };

export type RegisterInputProps = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneCode, setPhoneCode] = useState("");

  // const initialCountry: (typeof countries)[0] | undefined = countries.find(
  //   (item) => item.countryCode === "initialCountryCode"
  // );

  // const [selectedCountry, setSelectedCountry] = useState<any>(initialCountry);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputProps>();

  async function onSubmit(data: RegisterInputProps) {
    console.log(phoneCode);
    data.phone = data.phone[0]==='0'?data.phone.substring(1):data.phone;
    const phoneNumber = `${phoneCode}${data.phone}`;
    console.log(phoneNumber);
  }

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="col-span-2 bg-white p-6 rounded-2xl">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl text-center font-semibold">
                  Kontaktujte nás pro demo verze szystému
                </h3>
                <p className="text-muted-foreground text-sm text-center px-6 py-2 mb-4 max-w-xl mx-auto">
                  Vyplňte formulář níže a náš tým vás bude kontaktovat s
                  personalizovanou prezentací systému.
                </p>
                <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <TextInput
                      label="Křestní jméno"
                      register={register}
                      name="name"
                      errors={errors}
                      placeholder="Např. Karel"
                      icon={PenLine}
                    />
                    <TextInput
                      label="Příjmení"
                      register={register}
                      name="name"
                      errors={errors}
                      placeholder="Např. Novotný"
                      icon={PenLine}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <TextInput
                      label="Email Address"
                      register={register}
                      name="email"
                      type="email"
                      errors={errors}
                      placeholder="Např. novotny@gmail.com"
                      icon={Mail}
                    />
                    <PhoneInput
                      register={register}
                      errors={errors}
                      label="Váš telefon (např. 999888777)"
                      name="phone"
                      toolTipText="Vyberte kód země a napište své číslo"
                      setPhoneCode={setPhoneCode}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <TextInput
                      label="Název školy"
                      register={register}
                      name="school"
                      errors={errors}
                      placeholder="Např. Gymnázium Jihlava"
                      icon={School}
                    />
                    <TextInput
                      register={register}
                      name="country"
                      label="Země"
                      // options={countries}
                      // option={selectedCountry}
                      // setOption={setSelectedCountry}
                      errors={errors}
                      placeholder="Např. Česká republika"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <TextInput
                      label="Školní web/stránka na sociálních sítích"
                      register={register}
                      name="schoolPage"
                      errors={errors}
                      placeholder="Např. http://www.gymnaziumjihlava.cz/"
                      icon={PanelsTopLeft}
                    />
                    <TextInput
                      label="Počet studentů"
                      register={register}
                      name="students"
                      errors={errors}
                      placeholder="Např. 300"
                      icon={User}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <TextInput
                      label="Vaše pozice v instituci"
                      register={register}
                      name="role"
                      errors={errors}
                      placeholder="Vaše pozice"
                      icon={User}
                    />
                    <TextInput
                      label="Zájem o produkt (Které funkce potřebujete?)"
                      register={register}
                      name="students"
                      errors={errors}
                      placeholder="Např. "
                      icon={ShoppingCart}
                    />
                  </div>
                  <TextInput
                    label="Jak jste se o nás dozvěděli?"
                    register={register}
                    name="students"
                    errors={errors}
                    placeholder="Např."
                    icon={Code}
                  />

                  <SubmitButton
                    buttonIcon={Send}
                    title="Odeslat"
                    loading={isLoading}
                    loadingTitle="Odesílání, prosím čekejte..."
                  />
                </form>
              </CardContent>
            </Card>

            <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Consultation Card */}
              <Card className="bg-[#1B5E20] text-white">
                <CardHeader>
                  <h2 className="text-2xl font-semibold">
                    Schedule a Consultation with Our Experts
                  </h2>
                  <p className="text-gray-100">
                    Discuss your agricultural needs and explore tailored
                    solutions with our sales team.
                  </p>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="secondary"
                    className="bg-white text-[#1B5E20] hover:bg-gray-100"
                  >
                    Book your Appointment
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info Card */}
              <Card className="bg-[#B4E33D]">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Contact Our Team
                  </h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-800">
                      <Mail className="h-5 w-5" />
                      <h3 className="font-semibold">Email Us</h3>
                    </div>
                    <div className="space-y-1 ml-7">
                      <p>info@agrikkom.co.ug</p>
                      <p>sales@agrikkom.co.ug</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-800">
                      <Phone className="h-5 w-5" />
                      <h3 className="font-semibold">Call Us</h3>
                    </div>
                    <div className="space-y-1 ml-7">
                      <p>+256 743 529 455</p>
                      <p>+256 758 289 019</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-800">
                      <MapPin className="h-5 w-5" />
                      <h3 className="font-semibold">Visit Us</h3>
                    </div>
                    <p className="ml-7">
                      Plot 3426, Kikulu Zone, Kyanja, Kampala, Uganda
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
