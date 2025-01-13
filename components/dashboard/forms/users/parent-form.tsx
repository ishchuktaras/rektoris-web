"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "../FormHeader";
import FormFooter from "../FormFooter";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextAreaInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import toast from "react-hot-toast";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import FormSelectInput from "@/components/FormInputs/FormSelectInput";
import { europeanCountries } from "@/components/data/countries";
import { createParent } from "@/actions/parents";
import { useRouter } from "next/navigation";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};

export type ParentProps = {
  title: string;
  firstName: string;
  lastName: string;
  relationship: string;
  email: string;
  nationalId: string;
  gender: string;
  dateOfBirth: string;
  phone: string;
  nationality: string;
  whatsappNumber: string;
  imageUrl: string;
  contactMethod: string;
  occupation: string;
  address: string;
  password: string;
};

export default function ParentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {
  // Relationships
  const relationships = [
    {
      label: "Otec",
      value: "father",
    },
    {
      label: "Matka",
      value: "mother",
    },
    {
      label: "Zákonný zástupce",
      value: "legalGuardian",
    },
    {
      label: "Jiný",
      value: "other",
    },
  ];

  const [selectedRelationship, setSelectedRelationship] = useState<any>(
    relationships[2]
  );
  // Titles
  const titles = [
    {
      label: "Pan",
      value: "Mr",
    },
    {
      label: "Paní",
      value: "Mrs",
    },
  ];

  const [selectedTitle, setSelectedTitle] = useState<any>(titles[0]);

  // Contact Methods

  const contactMethods = [
    {
      label: "Telefon",
      value: "phone",
    },
    {
      label: "Email",
      value: "email",
    },
    {
      label: "WhatsApp",
      value: "whatsapp",
    },
  ];

  const [selectedMethod, setSelectedMethod] = useState<any>(contactMethods[0]);

  // Genders
  const genders = [
    {
      label: "Muž",
      value: "Male",
    },
    {
      label: "Žena",
      value: "Female",
    },
  ];

  const [selectedGender, setlectedGender] = useState<any>(genders[0]);

  // Nationalities

  const initialCountryCode = "CZ";
  const initialCountry = europeanCountries.find(
    (item) => item.countryCode === initialCountryCode
  );

  const [selectedNationality, setSelectedNationality] =
    useState<any>(initialCountry);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ParentProps>({
    defaultValues: {
      firstName: "",
    },
  });

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage =
    initialData?.imageUrl || "/images/profile_placeholder.svg";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveParent(data: ParentProps) {
    try {
      // Add validation
      const requiredFields: (keyof ParentProps)[] = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "password",
      ];
      const missingFields = requiredFields.filter(
        (field) => !data[field as keyof ParentProps]
      );

      if (missingFields.length > 0) {
        toast.error(`Missing required fields: ${missingFields.join(", ")}`);
        setLoading(false);
        return;
      }

      setLoading(true);
      // Validate date format
      const dateOfBirth = new Date(data.dateOfBirth);
      if (isNaN(dateOfBirth.getTime())) {
        toast.error("Invalid date format");
        setLoading(false);
        return;
      }
      // Make sure all required fields are in the correct format
      const formattedData = {
        ...data,
        imageUrl: imageUrl || "/images/profile_placeholder.png",
        title: selectedTitle.value,
        relationship: selectedRelationship.value,
        gender: selectedGender.value,
        nationality: selectedNationality.label,
        contactMethod: selectedMethod.value,
        // Ensure phone number format is consistent
        phone: data.phone?.trim(),
        whatsappNumber: data.whatsappNumber?.trim(),
        // Ensure email is lowercase
        email: data.email?.toLowerCase().trim(),
      };

      const res = await createParent(formattedData);

      toast.success("Successfuly Created!");
      reset();
      router.push("/dashboard/users/parents");
      // setImageUrl("/placecholder.svg");
      // router.push("/dashboard/")
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to create parent"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveParent)}>
      <FormHeader
        href="/parents"
        parent="users"
        title="Rodiče"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Titul"
                options={titles}
                option={selectedTitle}
                setOption={setSelectedTitle}
              />
              <TextInput
                register={register}
                errors={errors}
                label="Křestní jméno"
                name="firstName"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Příjmení"
                name="lastName"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Vztah"
                options={relationships}
                option={selectedRelationship}
                setOption={setSelectedRelationship}
                isSearchable={false}
              />
              <TextInput
                register={register}
                errors={errors}
                label="Občanský průkaz / cestovní pas"
                name="nationalId"
              />
              <FormSelectInput
                label="Vyberte Pohlaví"
                options={genders}
                option={selectedGender}
                setOption={setlectedGender}
                isSearchable={false}
              />
            </div>
            <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Datum narození"
                name="dateOfBirth"
                type="date"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Telefonní číslo"
                name="phone"
                type="tel"
              />
              <FormSelectInput
                label="Vyberte Národnost"
                options={europeanCountries}
                option={selectedNationality}
                setOption={setSelectedNationality}
                isSearchable={true}
              />
            </div>

            <div className="grid lg:grid-cols-2  md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="email"
                type="email"
              />
              <TextInput
                register={register}
                errors={errors}
                type="tel"
                label="WhatsApp číslo"
                name="whatsappNumber"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="grid gap-3">
                  <FormSelectInput
                    label="Preferovaný způsob komunikace"
                    options={contactMethods}
                    option={selectedMethod}
                    setOption={setSelectedMethod}
                    isSearchable={false}
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Povolání"
                    name="occupation"
                  />
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Adresa"
                    name="address"
                  />
                </div>
                <div className="grid">
                  <PasswordInput
                    register={register}
                    errors={errors}
                    label="Rodičovské heslo"
                    name="password"
                    type="password"
                  />
                </div>
              </div>
              <div className="grid">
                <ImageInput
                  title="Profilový obrázek rodiče"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="parentsProfileImage"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        href="/parents"
        editingId={editingId}
        loading={loading}
        title="rodiče"
        parent="users"
      />
    </form>
  );
}
