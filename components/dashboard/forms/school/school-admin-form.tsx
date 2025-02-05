"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/FormInputs/TextInput";
import toast from "react-hot-toast";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { Lock, Mail, Phone, Send, User } from "lucide-react";
import { UserCreateProps } from "@/types/types";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import { createUser } from "@/actions/users";

export type SchoolProps = {
  name: string;
  logo: string;
};

export default function SchoolAdminForm({
  schoolId,
  schoolName,
}: {
  schoolId: string;
  schoolName: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCreateProps>({
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const initialImage = "/images/logo.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveOnboarding(data: UserCreateProps) {
    try {
      setLoading(true);
      data.schoolId = schoolId;
      data.schoolName = schoolName;
      data.role = "ADMIN";
      console.log(data);
      const res = await createUser(data);
      console.log(res);
      setLoading(false);
      toast.success("Správce úspěšně vytvořen!");
      res();
      router.push("/dashboard");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveOnboarding)}>
      <div className="text-center">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Vítejte ve {schoolName}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
          Vytvořte správce pro tuto školu
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6 py-6">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Jméno správce"
                name="name"
                icon={User}
              />
              <TextInput
                register={register}
                errors={errors}
                label="E-mail správce"
                name="email"
                icon={Mail}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Telefon správce"
                name="phone"
                icon={Phone}
              />
              <PasswordInput
                register={register}
                errors={errors}
                label="Heslo správce"
                name="password"
                icon={Lock}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <SubmitButton
          buttonIcon={Send}
          title="Vytvořit správce školy"
          loading={loading}
          loadingTitle="Vytváření... Čekejte prosím"
        />
      </div>
    </form>
  );
}
