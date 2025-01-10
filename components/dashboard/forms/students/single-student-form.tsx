"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "../FormHeader";
import FormFooter from "../FormFooter";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextAreaInput";
import ImageInput from "@/components/FormInputs/ImageInput";

import PasswordInput from "@/components/FormInputs/PasswordInput";
import FormSelectInput from "@/components/FormInputs/FormSelectInput";
import { europeanCountries } from "@/components/data/countries";
import RadioInput from "@/components/FormInputs/RadioInput";
import toast from "react-hot-toast";
import { generateStudentRegNumber } from "@/lib/generateRegNo";
import { Class } from "@/types/types";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
  classes: Class[];
};

export type StudentProps = {
  regNo: string;
  name: string;
  email: string;
  password: string;
  imageUrl: string;
};

export default function SingleStudentForm({
  editingId,
  initialData,
  classes
}: SingleStudentFormProps) {
  // Parents
  const parents = [
    {
      label: "Rodič 1",
      value: "parent1",
    },
    {
      label: "Rodič 2",
      value: "parent2",
    },
  ];

  const [selectedParent, setSelectedParent] = useState<any>(null);

  // Classes

  const classOptions = classes.map((item) => {
    return {
      label: item.title,
      value: item.id,
    };
  });

  const [selectedClass, setSelectedClass] = useState<any>(classOptions[0]);
  const classId = selectedClass.value ?? "";
  const streams = classes.find((item) => item.id === classId)?.streams || [];
  const streamsOptions = streams.map((item)=>{
    return{
      label:item.title,
      value:item.id
    }
  });

  // Sectioms/Streams

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

  const sponsorshipTypes = [
    {
      label: "Private Student",
      id: "PS",
    },
    {
      label: "Sponsored Student",
      id: "SS",
    },
  ];

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
        const regNo = generateStudentRegNumber("SK", "PS", 1, {
          schoolCode: "ZS",
          sponsorshipType: "PS",
          sequence: 1,
        });
        data.regNo = regNo;
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
        href="/students"
        parent=""
        title="studenta"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
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
              <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="email"
                type="email"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Vyberte Rodiče"
                options={parents}
                option={selectedParent}
                setOption={setSelectedParent}
                toolTipText="Přidat nového rodiče"
                href="/dashboard/users/parents/new"
              />
              <FormSelectInput
                label="Vyberte Třídu"
                options={classOptions}
                option={selectedClass}
                setOption={setSelectedClass}
                toolTipText="Add New Class"
                href="/dashboard/academics/classes"
              />
              <FormSelectInput
                label="Vyberte stream/sekce"
                options={streamsOptions}
                option={selectedStrem}
                setOption={setSelectedStream}
                toolTipText="Přidat nový stream"
                href="/dashboard/academics/classes"
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
              <FormSelectInput
                label="Vyberte Národnost"
                options={europeanCountries}
                option={selectedNationality}
                setOption={setSelectedNationality}
                isSearchable={true}
              />
              <PasswordInput
                register={register}
                errors={errors}
                label="Heslo studenta"
                name="password"
                type="password"
                toolTipText="Heslo bude studentem použito pro přihlášení do studentského portálu"
              />
            </div>

            <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Stát/Provincie"
                name="state"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Číslo rodného listu"
                name="birthCertificateNumber"
              />
              <FormSelectInput
                label="Náboženství"
                options={religions}
                option={selectedReligion}
                setOption={setSelectedReligion}
              />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
              <FormSelectInput
                label="Vyberte Pohlaví"
                options={genders}
                option={selectedGender}
                setOption={setlectedGender}
                isSearchable={false}
              />
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
                label="Školní číslo"
                name="rollNumber"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="grid gap-3">
                  {/* <TextInput
                    register={register}
                    errors={errors}
                    label="Evidenční číslo"
                    name="registrationNumber"
                  /> */}
                  <RadioInput
                    radioOptions={sponsorshipTypes}
                    register={register}
                    label="Sponsorship Type"
                    name="sponsorshipType"
                    errors={errors}
                    defaultValue="PS"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Datum přijetí"
                    name="admissionDate"
                    type="date"
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
              </div>
              <div className="grid gap-3">
                <ImageInput
                  title="Profilový obrázek studenta"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="studentsProfileImage"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        href="/students"
        editingId={editingId}
        loading={loading}
        title="studenta"
        parent=""
      />
    </form>
  );
}
function createStudent(data: StudentProps) {
  throw new Error("Function not implemented.");
}

// function generateRegistrationNumber(arg0: string) {
//   throw new Error("Function not implemented.");
// }
