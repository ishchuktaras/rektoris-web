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
import FormMultipleSelectInput from "@/components/FormInputs/FormMultipleSelectInput";
import { europeanCountries } from "@/components/data/countries";
import { useRouter } from "next/navigation";
import { TeacherCreateProps } from "@/types/types";
import { createTeacher } from "@/actions/teachers";
import { generateRollNumber } from "@/lib/generateRollNo";
import { useSchoolStore } from "@/store/school";

type TeacherFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
  classes: DataOption[];
  departments: DataOption[];
  subjects: DataOption[];
};
export type DataOption = {
  label: string;
  value: string;
};
export default function TeacherForm({
  editingId,
  initialData,
  classes,
  departments,
  subjects,
}: TeacherFormProps) {
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

  const qualifications = [
    {
      label: "Bakalářské vzdělání (Bc.)",
      value: "Bachelors",
    },
    {
      label: "Magisterské vzdělání (Mgr.)",
      value: "Masters",
    },
    {
      label: "Inženýrské vzdělání (Ing.)",
      value: "Engineering",
    },
    {
      label: "Doktorské vzdělání (Ph.D.)",
      value: "Doctorate",
    },
    {
      label: "Doktor pedagogiky (PaedDr.)",
      value: "DoctorOfPedagogy",
    },
    {
      label: "Doktor přírodních věd (RNDr.)",
      value: "DoctorOfNaturalSciences",
    },
    {
      label: "Doktor filozofie (PhDr.)",
      value: "DoctorOfPhilosophy",
    },
    {
      label: "Pedagogické minimum",
      value: "PedagogicalMinimum",
    },
    {
      label: "Státní jazyková zkouška",
      value: "StateLanguageExam",
    },
  ];
  const [selectedQualifications, setSelectedQualifications] = useState<any>(
    qualifications[0]
  );

  const [selectedMethod, setSelectedMethod] = useState<any>(contactMethods[0]);

  const [selectedDepartment, setSelectedDepartment] = useState<any>(
    departments[0]
  );

  const [selectedSubjects, setSelectedSubjects] = useState<any>([subjects[0]]);
  // console.log(selectedSubjects);

  const [selectedMainSubject, setSelectedMainSubject] = useState<any>(
    subjects[0]
  );

  const [selectedClasses, setSelectedClasses] = useState<any>([classes[0]]);

  // Genders
  const genders = [
    {
      label: "Muž",
      value: "MALE",
    },
    {
      label: "Žena",
      value: "FEMALE",
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
  } = useForm<TeacherCreateProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      whatsappNumber: "",
    },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const initialImage =
    initialData?.imageUrl || "/images/profile_placeholder.svg";
  const [imageUrl, setImageUrl] = useState(initialImage);
  const { school } = useSchoolStore();
  async function saveTeacher(data: TeacherCreateProps) {
    try {
      data.schoolId = school?.id || "";
      data.schoolName = school?.name || "";
      setLoading(true);
      data.employeeId = generateRollNumber();
      data.imageUrl = imageUrl;
      data.title = selectedTitle.value;
      data.gender = selectedGender.value;
      data.nationality = selectedNationality.label;
      data.contactMethod = selectedMethod.value;
      data.departmentId = selectedDepartment.value;
      data.departmentName = selectedDepartment.label;
      data.mainSubject = selectedMainSubject.label;
      data.mainSubjectId = selectedMainSubject.value;
      data.subjects = selectedSubjects.map((item: any) => item.label);
      data.classIds = selectedClasses.map((item: any) => item.value);
      data.classes = selectedClasses.map((item: any) => item.label);
      data.experience = Number(data.experience);
      data.phone = data.phone?.trim();
      data.whatsappNumber = data.whatsappNumber?.trim();
      data.email = data.email?.toLowerCase().trim();
      data.qualification = selectedQualifications.label;
      console.log(data);
      if (editingId) {
        // await updateTeacher(editingId, data);
        // setLoading(false);
        // toast.success("Učitel úspěšně aktualizován!");
        // reset();
        // router.push("/dashboard/users/teachers");
        // setImageUrl("/placecholder.svg");
      } else {
        // console.log(data);
        const res = await createTeacher(data);
        setLoading(false);
        toast.success("Učitel úspěšně vytvořen!");
        reset();
        // setImageUrl("/placecholder.svg");
        router.push("/dashboard/users/teachers");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveTeacher)}>
      <FormHeader
        href="/teachers"
        parent="users"
        title="Učitelé"
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
            <div className="grid lg:grid-cols-2  md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Telefonní číslo"
                name="phone"
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
                type="tel"
                label="Whatsapp číslo"
                name="whatsappNumber"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Vyberte Národnost"
                options={europeanCountries}
                option={selectedNationality}
                setOption={setSelectedNationality}
                isSearchable={true}
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
              <FormSelectInput
                label="Preferovaný způsob komunikace"
                options={contactMethods}
                option={selectedMethod}
                setOption={setSelectedMethod}
                isSearchable={false}
              />
              <PasswordInput
                register={register}
                errors={errors}
                label="Heslo učitele"
                name="password"
                type="password"
              />
            </div>
            <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Funkce / Pozice"
                name="designation"
                placeholder="např. Vedoucí oddělení"
              />
              <FormSelectInput
                label="Oddělení"
                options={departments}
                option={selectedDepartment}
                setOption={setSelectedDepartment}
                href="/dashboard/academics/departments/new"
                toolTipText="Vytvořit nové oddělení"
              />
              <FormMultipleSelectInput
                label="Třídy"
                options={classes}
                option={selectedClasses}
                setOption={setSelectedClasses}
                href="/dashboard/academics/classes"
                toolTipText="Přidat novou třídu"
              />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
              <FormSelectInput
                label="Kvalifikace"
                options={qualifications}
                option={selectedQualifications}
                setOption={setSelectedQualifications}
              />
              <FormSelectInput
                label="Hlavní předmět"
                options={subjects}
                option={selectedMainSubject}
                setOption={setSelectedMainSubject}
                href="/dashboard/academics/subjects"
                toolTipText="Přidat nový předmět"
              />
              <FormMultipleSelectInput
                label="Předměty"
                options={subjects}
                option={selectedSubjects}
                setOption={setSelectedSubjects}
                href="/dashboard/academics/subjects"
                toolTipText="Přidat nový předmět"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="grid gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Let zkušeností"
                    name="experience"
                    placeholder="např. 5 let"
                    type="number"
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
                <TextInput
                  register={register}
                  errors={errors}
                  label="Datum připojení"
                  name="dateOfJoining"
                  type="date"
                />
              </div>
              <div className="grid">
                <ImageInput
                  title="Profilový obrázek Učitele"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="teacherProfileImage"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        href="/teachers"
        editingId={editingId}
        loading={loading}
        title="Učitele"
        parent="users"
      />
    </form>
  );
}
