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

export default function TeacherForm({
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

  const subjects = [
    {
      label: "Český jazyk a literatura",
      value: "czech_language",
    },
    {
      label: "Matematika",
      value: "mathematics",
    },
    {
      label: "Fyzika",
      value: "physics",
    },
    {
      label: "Chemie",
      value: "chemistry",
    },
    {
      label: "Biologie",
      value: "biology",
    },
    {
      label: "Dějepis",
      value: "history",
    },
    {
      label: "Zeměpis",
      value: "geography",
    },
    {
      label: "Anglický jazyk",
      value: "english",
    },
    {
      label: "Německý jazyk",
      value: "german",
    },
    {
      label: "Informatika",
      value: "informatics",
    },
    {
      label: "Tělesná výchova",
      value: "physical_education",
    },
    {
      label: "Hudební výchova",
      value: "music",
    },
    {
      label: "Výtvarná výchova",
      value: "art",
    },
    {
      label: "Občanská výchova",
      value: "civics",
    },
    {
      label: "Pracovní činnosti",
      value: "work_activities",
    },
    {
      label: "Základy společenských věd",
      value: "social_science",
    },
    {
      label: "Ekonomie",
      value: "economics",
    },
  ];

  const classes = [
    {
      label: "Třída 1",
      value: "class_1",
    },
    {
      label: "Třída 2",
      value: "class_2",
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

  const departments = [
    {
      label: "Matematika",
      value: "mathematics",
    },
    {
      label: "Přírodní vědy",
      value: "natural_sciences",
    },
    {
      label: "Společenské vědy",
      value: "social_sciences",
    },
    {
      label: "Cizí jazyky",
      value: "foreign_languages",
    },
    {
      label: "Informatika",
      value: "computer_science",
    },
    {
      label: "Praktické předměty",
      value: "practical_science",
    },
  ];
  const [selectedMethod, setSelectedMethod] = useState<any>(contactMethods[0]);

  const [selectedDepartment, setSelectedDepartment] = useState<any>(
    departments[0]
  );

  const [selectedSubject, setSelectedSubject] = useState<any>(subjects[0]);

  const [selectedMainSubject, setSelectedMainSubject] = useState<any>(
    subjects[0]
  );

  const [qualification, setQualification] = useState<any>(subjects[0]);

  const [selectedClass, setSelectedClass] = useState<any>(classes[0]);

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
                label="Datum připojení"
                name="dateOfJoining"
                type="date"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Označení"
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
            </div>
            <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-3">
              <FormSelectInput
                label="Kvalifikace"
                options={subjects}
                option={selectedMainSubject}
                setOption={setSelectedMainSubject}
                href="/dashboard/academics/departments/new"
                toolTipText="Přidat nový předmět"
              />
              <FormSelectInput
                label="Hlavní předmět"
                options={subjects}
                option={selectedMainSubject}
                setOption={setSelectedMainSubject}
                href="/dashboard/academics/departments/new"
                toolTipText="Přidat nový předmět"
              />
              {/* Multi Select */}
              <FormSelectInput
                label="Třídy"
                options={classes}
                option={selectedClass}
                setOption={setSelectedClass}
                href="/dashboard/academics/departments/new"
                toolTipText="Přidat novou třídu"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <FormSelectInput
                  label="Předměty"
                  options={subjects}
                  option={selectedSubject}
                  setOption={setSelectedSubject}
                  href="/dashboard/academics/departments/new"
                  toolTipText="Přidat nový předmět"
                />
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
