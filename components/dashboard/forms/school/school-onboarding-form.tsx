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
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { Send } from "lucide-react";

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

export default function ParentForm() {
  const initialCountryCode = "CZ";
  const initialCountry = europeanCountries.find(
    (item) => item.countryCode === initialCountryCode
  );

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
  const initialImage = "/images/logo.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: StudentProps) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveStudent)}>
      <div className="text-center">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Vítejte ve Škola Pro
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
          Vyplňte profil své školy, abyste mohli začít používat platformu Škola
          Pro.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6 py-6">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Název školy"
                name="schoolName"
              />
            </div>
            <div className="grid">
              <ImageInput
                title="Přizpůsobte si logo"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="schoolProfileLogo"
                className="object-contain"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <SubmitButton
          buttonIcon={Send}
          title="Registrovat školu"
          loading={loading}
          loadingTitle="Vytváření... Čekejte prosím"
        />
      </div>
    </form>
  );
}
