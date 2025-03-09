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
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import PhoneInput from "../FormInputs/PhoneInput";
import { europeanCountries } from "../data/countries";
import FormSelectInput from "../FormInputs/FormSelectInput";
import TextArea from "../FormInputs/TextAreaInput";
import toast from "react-hot-toast";
import { createContact } from "@/actions/admin";

export type ContactProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  schoolName: string;
  country: string;
  schoolPage: string;
  numberOfStudents: number;
  role: string;
  media: string;
  pointsToSolve: string;
};

export const ContactUs: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [phoneCode, setPhoneCode] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      schoolName: "",
      schoolPage: "",
      numberOfStudents: 0,
      pointsToSolve: "",
    },
  });

  const roles = [
    { value: "principal/head_teacher", label: "Ředitel/vedoucí učitel" },
    { value: "deputy_director", label: "Zástupce ředitele" },
    { value: "department_head", label: "Vedoucí oddělení" },
    { value: "teacher", label: "Učitel" },
    { value: "admin_staff", label: "Administrativní pracovníci" },
    { value: "it_coordinator", label: "IT koordinátor" },
    { value: "counselor", label: "Školní poradce" },
    { value: "librarian", label: "Školní knihovník" },
    { value: "coordinator", label: "Programový koordinátor" },
    { value: "other", label: "Jiný zaměstnanec" },
  ];

  const media = [
    { value: "facebook", label: "Facebook" },
    { value: "google", label: "Google" },
    { value: "instagram", label: "Instagram" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "twitter", label: "Twitter" },
    { value: "youtube", label: "YouTube" },
    { value: "other", label: "Jiné" },
  ];

  const initialCountryCode = "CZ";
  const initialCountry = europeanCountries.find(
    (item) => item.countryCode === initialCountryCode
  );
  const [selectedCountry, setSelectedCountry] = useState<any>(initialCountry);
  const [selectedRole, setSelectedRole] = useState<any>(roles[0]);
  const [selectedMedia, setSelectedMedia] = useState<any>(media[0]);

  async function onSubmit(data: ContactProps) {
    data.phone = data.phone[0] === "0" ? data.phone.substring(1) : data.phone;
    const phoneNumber = `${phoneCode}${data.phone}`;
    data.phone = phoneNumber;
    data.country = selectedCountry.label;
    data.role = selectedRole.value;
    data.media = selectedMedia.value;
    data.numberOfStudents = Number(data.numberOfStudents);

    try {
      setLoading(true);
      const res = await createContact(data);
      setLoading(false);
      toast.success("Vaše žádost byla úspěšně odeslána!");
      reset();
    } catch (error) {
      setLoading(false);
      toast.error("Došlo k chybě. Zkuste to prosím znovu.");
      console.error(error);
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white p-6">
                <h3 className="text-2xl font-semibold">
                  Požádejte o demo verzi systému
                </h3>
                <p className="text-gray-100 mt-2">
                  Vyplňte formulář níže a náš tým vás bude kontaktovat s
                  personalizovanou prezentací systému.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <TextInput
                      label="Křestní jméno"
                      register={register}
                      name="firstName"
                      errors={errors}
                      placeholder="Např. Karel"
                      icon={PenLine}
                    />
                    <TextInput
                      label="Příjmení"
                      register={register}
                      name="lastName"
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
                      label="Váš telefon (s kódem země)"
                      name="phone"
                      toolTipText="Vyberte kód země a napište své číslo"
                      setPhoneCode={setPhoneCode}
                      placeholder="Vaše telefonní číslo"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <TextInput
                      label="Název školy"
                      register={register}
                      name="schoolName"
                      errors={errors}
                      placeholder="Např. Gymnázium Jihlava"
                      icon={School}
                    />
                    <FormSelectInput
                      label="Vyberte zemi"
                      options={europeanCountries}
                      option={selectedCountry}
                      setOption={setSelectedCountry}
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
                      name="numberOfStudents"
                      errors={errors}
                      placeholder="Např. 300"
                      icon={User}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormSelectInput
                      label="Vyberte pozice v instituci"
                      options={roles}
                      option={selectedRole}
                      setOption={setSelectedRole}
                    />
                    <FormSelectInput
                      label="Jak jste se o nás dozvěděli?"
                      options={media}
                      option={selectedMedia}
                      setOption={setSelectedMedia}
                    />
                  </div>

                  <TextArea
                    label="Podělte se s námi o klíčové problémy, které chcete vyřešit"
                    register={register}
                    name="pointsToSolve"
                    errors={errors}
                  />

                  <SubmitButton
                    buttonIcon={Send}
                    title="Odeslat žádost"
                    loading={loading}
                    loadingTitle="Odesílání, prosím čekejte..."
                    className="w-full mt-2"
                  />
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Consultation Card */}
            <Card className="bg-gradient-to-br from-[#884dee] to-[#7b3dd1] text-white shadow-lg border-0 overflow-hidden">
              <CardHeader>
                <h2 className="text-2xl font-semibold">
                  Domluvte si konzultaci
                </h2>
                <p className="text-gray-100 mt-2">
                  Diskutujte o svých potřebách v oblasti školního managementu a
                  prozkoumejte přizpůsobená řešení s naším týmem.
                </p>
              </CardHeader>
              <CardContent className="pb-6">
                <Button
                  variant="secondary"
                  className="w-full bg-white text-[#884dee] hover:bg-gray-100 group"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Rezervujte si svůj termín</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card className="bg-white shadow-lg border-0 overflow-hidden">
              <CardHeader className="border-b pb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Kontaktní informace
                </h2>
                <p className="text-gray-500 text-sm">
                  Jsme tu pro vás, neváhejte nás kontaktovat
                </p>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#B4E33D] p-3 rounded-full">
                    <Mail className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <a
                      href="mailto:rektoris.cz@gmail.com"
                      className="text-gray-600 hover:text-[#884dee] transition-colors"
                    >
                      rektoris.cz@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#B4E33D] p-3 rounded-full">
                    <Phone className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Telefon</h3>
                    <a
                      href="tel:+420777596216"
                      className="text-gray-600 hover:text-[#884dee] transition-colors"
                    >
                      +420 777 596 216
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#B4E33D] p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Adresa</h3>
                    <p className="text-gray-600">
                      58601 Jihlava, Česká republika
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t">
                <div className="w-full text-center">
                  <p className="text-sm text-gray-500">
                    Pracovní doba: Po-Pá, 9:00 - 17:00
                  </p>
                </div>
              </CardFooter>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-[#1B5E20] text-white shadow-lg border-0 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Proč nám důvěřovat</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="bg-[#B4E33D] rounded-full p-1">
                      <svg
                        className="h-3 w-3 text-[#1B5E20]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">
                      Specializovaný tým odborníků
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-[#B4E33D] rounded-full p-1">
                      <svg
                        className="h-3 w-3 text-[#1B5E20]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">
                      Přizpůsobená řešení pro školy
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-[#B4E33D] rounded-full p-1">
                      <svg
                        className="h-3 w-3 text-[#1B5E20]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">Rychlá implementace systému</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-[#B4E33D] rounded-full p-1">
                      <svg
                        className="h-3 w-3 text-[#1B5E20]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">
                      Nepřetržitá technická podpora
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
