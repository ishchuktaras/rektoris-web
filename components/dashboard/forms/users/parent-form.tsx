"use client";

import { useRouter } from "next/navigation";
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

export type SelectOptionProps = {
  label: string;
  value: string;
};
type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};

export type StudentProps = {
  name: string;
  email: string;
  password: string;
  imageUrl: string;
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
    relationships[0]
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

  const [selectedTitle, setSelectedTitle] = useState<any>(null);

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

  const [selectedContactMethod, setSelectedContactMethod] = useState<any>(null);

  // Sectioms/Streams

  const streams = [
    {
      label: "Stream A",
      value: "streamA",
    },
    {
      label: "Stream B",
      value: "streamB",
    },
    {
      label: "Stream C",
      value: "streamC",
    },
    {
      label: "Stream D",
      value: "streamD",
    },
    {
      label: "Stream E",
      value: "streamE",
    },
  ];

  const [selectedStrem, setSelectedStream] = useState<any>(null);

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

  const [selectedGender, setlectedGender] = useState<any>(null);

  // Nationalities

  const initialCountryCode = "CZ";
  const initialCountry = europeanCountries.find(
    (item) => item.countryCode === initialCountryCode
  );

  const [selectedNationality, setSelectedNationality] =
    useState<any>(initialCountry);

  // Religions

  const religions = [
    {
      label: "Ortodoxné",
      value: "Orthodox",
    },
    {
      label: "Katolícké",
      value: "Catholic",
    },
    {
      label: "Islámské",
      value: "Islamic",
    },
    {
      label: "Muslimské",
      value: "Muslim",
    },
    {
      label: "Hinduistické",
      value: "Hindu",
    },
    {
      label: "Buddhistické",
      value: "Buddhist",
    },
    {
      label: "Židovské",
      value: "Jewish",
    },
    {
      label: "Sikhské",
      value: "Sikh",
    },
    {
      label: "Ateistické",
      value: "Atheist",
    },
    {
      label: "Jiné",
      value: "Other",
    },
  ];

  const [selectedReligion, setSelectedReligion] = useState<any>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentProps>({
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage =
    initialData?.imageUrl || "/images/profile_placeholder.svg";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: StudentProps) {
    try {
      setLoading(true);

      data.imageUrl = imageUrl;
      console.log(data);

      if (editingId) {
        // await updateCategoryById(editingId, data);
        // setLoading(false);
        // // Toast
        // toast.success("Updated Successfully!");
        // //reset
        // reset();
        // //route
        // router.push("/dashboard/categories");
        // setImageUrl("/placeholder.svg");
      } else {
        // await createCategory(data);
        // setLoading(false);
        // // Toast
        // toast.success("Successfully Created!");
        // //reset
        // reset();
        // setImageUrl("/placeholder.svg");
        // //route
        // router.push("/dashboard/categories");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveStudent)}>
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
              {/* <TextInput
                register={register}
                errors={errors}
                label="Telefonní číslo"
                name="phoneNumber"
                type="tel"
              /> */}
              <FormSelectInput
                label="Vyberte Národnost"
                options={europeanCountries}
                option={selectedNationality}
                setOption={setSelectedNationality}
                isSearchable={true}
              />
            </div>

            <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Telefonní číslo"
                name="phoneNumber"
                type="tel"
              />
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
                    option={selectedContactMethod}
                    setOption={setSelectedContactMethod}
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
