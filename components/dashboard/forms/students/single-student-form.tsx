"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export default function SingleStudentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {
  // Parents
  const parents = [
    {
      label: "Parent 1",
      value: "parent1",
    },
    {
      label: "Parent 2",
      value: "parent2",
    },
  ];

  const [selectedParent, setSelectedParent] = useState<any>(null);

  // Classes

  const classes = [
    {
      label: "Class 1",
      value: "class1",
    },
    {
      label: "Class 2",
      value: "class2",
    },
  ];

  const [selectedClass, setSelectedClass] = useState<any>(null);

  // Sectioms/Streams

  const streams = [
    {
      label: "Stream 1",
      value: "stream1",
    },
    {
      label: "Stream 2",
      value: "stream2",
    },
  ];

  const [selectedStrem, setSelectedStream] = useState<any>(null);

  // Genders

  const genders = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
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
      label: "Orthodox",
      value: "Orthodox",
    },
    {
      label: "Catholic",
      value: "Catholic",
    },
    {
      label: "Islamic",
      value: "Islamic",
    },
    {
      label: "Muslim",
      value: "Muslim",
    },
    {
      label: "Hindu",
      value: "Hindu",
    },
    {
      label: "Buddhist",
      value: "Buddhist",
    },
    {
      label: "Jewish",
      value: "Jewish",
    },
    {
      label: "Sikh",
      value: "Sikh",
    },
    {
      label: "Atheist",
      value: "Atheist",
    },
    {
      label: "Other",
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
    initialData?.imageUrl || "/images/profile_placeholder.png";
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
        href="/students"
        parent=""
        title="Student"
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
                label="First Name"
                name="firstName"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Last Name"
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
                label="Select Parent"
                options={parents}
                option={selectedParent}
                setOption={setSelectedParent}
                toolTipText="Add New Parent"
                href="/dashboard/parents/new"
              />
              <FormSelectInput
                label="Select Gender"
                options={genders}
                option={selectedGender}
                setOption={setlectedGender}
                isSearchable={false}
              />
              <TextInput
                register={register}
                errors={errors}
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
              />
            </div>
            <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Phone Number"
                name="phoneNumber"
                type="tel"
              />
              <FormSelectInput
                label="Select Nationality"
                options={europeanCountries}
                option={selectedNationality}
                setOption={setSelectedNationality}
                isSearchable={true}
              />
              <PasswordInput
                register={register}
                errors={errors}
                label="Student Password"
                name="password"
                type="password"
                toolTipText="Password will be used by the student to login to the student portal"
              />
            </div>

            <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="State/Province"
                name="state"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Birth Certificate Number"
                name="birthCertificateNumber"
              />
              <FormSelectInput
                label="Religion"
                options={religions}
                option={selectedReligion}
                setOption={setSelectedReligion}
              />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
              <FormSelectInput
                label="Select Class"
                options={classes}
                option={selectedClass}
                setOption={setSelectedClass}
                toolTipText="Add New Class"
                href="/dashboard/academic/classes/new"
              />
              <FormSelectInput
                label="Stream"
                options={streams}
                option={selectedStrem}
                setOption={setSelectedStream}
                toolTipText="Add New Stream"
                href="/dashboard/academic/streams/new"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Roll Number"
                name="rollNumber"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="">
                <div className="grid gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Registration Number"
                    name="registrationNumber"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Admission Date"
                    name="admissionDate"
                    type="date"
                  />
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Description"
                    name="description"
                  />
                </div>
              </div>
              <div className="grid gap-3">
                <ImageInput
                  title="Student Profile Image"
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
        title="Student"
        parent=""
      />
    </form>
  );
}
