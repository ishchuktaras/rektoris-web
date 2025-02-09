"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import CustomCarousel from "../custom-carousel";
import Logo from "@/components/logo";
import { Mail, Lock, LogIn } from "lucide-react";
import { loginUser } from "@/actions/auth";
import { useUserSession } from "@/store/auth";
import { School, User } from "@/types/types";
import { getSchoolById } from "@/actions/schools";
import { useSchoolStore } from "@/store/school";

export type loginInputProps = {
  email: string;
  password: string;
};

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginInputProps>();
  const { setUser } = useUserSession();
  const { setSchool } = useSchoolStore();
  const router = useRouter();
  async function onSubmit(data: loginInputProps) {
    try {
      setIsLoading(true);
      const sessionData = await loginUser(data);
      const role = sessionData?.user.role;
      // Fetch the School
      const school = (await getSchoolById(sessionData?.user.schoolId));
      console.log(school)
      setSchool(school as School);
      // Save the Data in Zustand
      setUser(sessionData?.user as User);

      // Route the User according to the Role
      setIsLoading(false);
      if (role === "SUPER_ADMIN") {
        router.push("/school-onboarding");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6 mt-10 md:mt-0">
          <div className="absolute left-1/3 top-14 md:top-5 md:left-5">
            <Logo />
          </div>
          <div className="grid gap-2 text-center mt-12 md:mt-0">
            <h1 className="text-3xl font-bold">Přihlaste se ke svému účtu</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="E-mailová adresa"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Např. johndoe@gmail.com"
              icon={Mail}
            />

            <TextInput
              label="Heslo"
              register={register}
              name="password"
              type="password"
              errors={errors}
              placeholder="******"
              icon={Lock}
            />

            <SubmitButton
              buttonIcon={LogIn}
              title="Přihlaste se"
              loading={isLoading}
              loadingTitle="Přihlašování k účtu prosím čekejte..."
            />
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
