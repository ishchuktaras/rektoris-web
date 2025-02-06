"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "../FormHeader";
import FormFooter from "../FormFooter";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import FormSelectInput from "@/components/FormInputs/FormSelectInput";
import { europeanCountries } from "@/components/data/countries";
import RadioInput from "@/components/FormInputs/RadioInput";
import { generateStudentRegNumber } from "@/lib/generateRegNo";
import { generateRollNumber } from "@/lib/generateRollNo";
import toast from "react-hot-toast";
import { Class } from "@/types/types";
import { Parent } from "@/types/types";
import { createStudent } from "@/actions/students";
import { useSchoolStore } from "@/store/school";

export type SelectOptionProps = {
  label: string;
  value: string;
  sponsorshipType: string;
};
type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
  classes: Class[];
  parents: Parent[];
  nextSequence: number;
};

export type StudentProps = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  parentId: string;
  parentName?: string;
  classTitle?: string;
  classId: string;
  streamTitle?: string;
  streamId: string;
  password: string;
  imageUrl: string;
  phone: string;
  state: string;
  birthCertificateNumber: string;
  nationality: string;
  religion: string;
  gender: string;
  dateOfBirth: string;
  rollNumber: string;
  sponsorshipType: string;
  regNo: string;
  admissionDate: string;
  address: string;
  schoolId: string;
  schoolName: string;
};

export default function SingleStudentForm({
  editingId,
  initialData,
  classes,
  parents,
  nextSequence,
}: SingleStudentFormProps) {
  // Parents
  const parentOptions = parents.map((parent) => {
    return {
      label: `${parent.firstName} ${parent.lastName}`,
      value: parent.id,
    };
  });

  const [selectedParent, setSelectedParent] = useState<any>(null);

  // Classes

  const classOptions = classes.map((item) => {
    return {
      label: item.title,
      value: item.id,
    };
  });

  const [selectedClass, setSelectedClass] = useState<any>(
    classOptions.length > 0 ? classOptions[0] : { label: "", value: "" }
  );
  const classId = selectedClass.value ?? "";

  const streams = classes.find((item) => item.id === classId)?.streams || [];
  const streamsOptions = streams.map((item) => ({
    label: item.title,
    value: item.id,
  }));

  // Sectioms/Streams

  const [selectedStream, setSelectedStream] = useState<any>(null);

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

  const [selectedGender, setSelectedGender] = useState<any>(genders[0]);

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

  const [selectedReligion, setSelectedReligion] = useState<any>(religions[0]);

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
      id: "PS" as const,
    },
    {
      label: "Sponsored Student",
      id: "SS" as const,
    },
  ];
  const {school} = useSchoolStore();
  async function saveStudent(data: StudentProps) {
    try {
      setLoading(true);
      if (!selectedParent) {
        toast.error("Prosím, Vyberte rodiče");
        setLoading(false);
        return;
      }
      data.schoolId = school?.id ?? "";
      data.schoolName=school?.name??"";
      data.imageUrl = imageUrl;
      data.name = `${data.firstName} ${data.lastName}`;
      data.parentId = selectedParent.value;
      data.parentName = selectedParent.label;
      data.classId = selectedClass.value;
      data.classTitle = selectedClass.label;
      data.streamId = selectedStream.value;
      data.streamTitle = selectedStream.label;
      data.nationality = selectedNationality.label;
      data.religion = selectedReligion.value;
      data.gender = selectedGender.value;
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
        const rollNumber = generateRollNumber();
        const sponsorshipType = data.sponsorshipType as "PS" | "SS";
        const regNo = generateStudentRegNumber({
          schoolCode: "ZS", // Ensure this is uppercase
          sponsorshipType,
          sequence: nextSequence,
        });
        data.rollNumber = rollNumber;
        data.regNo = regNo;
        console.log(data);
        const res = await createStudent(data);
        setLoading(false);
        toast.success("Student úspěšně vytvořen!");
        reset();
        // setImageUrl("/images/profile_placeholder.svg");
        router.push("/dashboard/students");
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
                options={parentOptions}
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
                option={selectedStream}
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
                setOption={setSelectedGender}
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
                label="Datum přijetí"
                name="admissionDate"
                type="date"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="grid gap-3">
                  {/* <TextInput
                    register={register}
                    errors={errors}
                    label="Evidenční číslo"
                    name="regNo"
                  /> */}
                  <RadioInput
                    radioOptions={sponsorshipTypes}
                    register={register}
                    label="Sponsorship Type"
                    name="sponsorshipType"
                    errors={errors}
                    defaultValue="PS"
                  />
                </div>
                <TextInput
                  register={register}
                  errors={errors}
                  label="Adresa"
                  name="address"
                />
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
