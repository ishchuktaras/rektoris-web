"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import SelectInput from "@/components/FormInputs/FormSelectInput";
import { SubjectCreateProps } from "@/types/types";
import { createSubject } from "@/actions/subjects";
import { DepartmentOption } from "../../subject-listing";

export type SubjectProps = {
  name: string;
  shortName: string;
  code: string;
  category: string;
  type: string;
  passingMarks?: number;
  totalMarks?: number;
  departmentId: string;
  isOptional: boolean;
  hasTheory: boolean;
  hasPractical: boolean;
  labRequired?: boolean;
};

export default function SubjectForm({
  userId,
  initialContent,
  editingId,
  departments,
}: {
  userId?: string;
  initialContent?: SubjectProps;
  editingId?: string;
  departments: DepartmentOption[];
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubjectCreateProps>({
    defaultValues: initialContent || {
      name: "",
      shortName: "",
      code: "",
      category: "CORE",
      type: "THEORY",
      isOptional: false,
      hasTheory: true,
      hasPractical: false,
      departmentId: "",
    },
  });
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

  const categories = [
    {
      label: "ZÁKLADNÍ",
      value: "CORE",
    },
    {
      label: "VOLITELNÝ",
      value: "ELECTIVE",
    },
    {
      label: "DODATEČNÝ",
      value: "ADDITIONAL",
    },
    {
      label: "ODBORNÝ",
      value: "VOCATIONAL",
    },
    {
      label: "JAZYK",
      value: "LANGUAGE",
    },
    {
      label: "VĚDA",
      value: "SCIENCE",
    },
    {
      label: "UMĚNÍ",
      value: "ARTS",
    },
    {
      label: "OBCHOD",
      value: "COMMERCE",
    },
    {
      label: "MIMOŠKOLNÍ",
      value: "EXTRA_CURRUCULAR",
    },
    {
      label: "OSTATNÍ",
      value: "OTHER",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<any>(categories[0]);

  const types = [
    {
      label: "TEORIE",
      value: "THEORY",
    },
    {
      label: "PRAKTICKÝ",
      value: "PRACTICAL",
    },
    {
      label: "VOLITELNÝ",
      value: "ELECTIVE",
    },
  ];

  const [selectedTypes, setSelectedTypes] = useState<any>(types[2]);

  const optional = [
    {
      label: "Ano",
      value: "true",
    },
    {
      label: "Ne",
      value: "false",
    },
  ];
  const [selectedOptional, setSelectedOptional] = useState<any>(optional[0]);

  const theory = [
    {
      label: "Ano",
      value: "true",
    },
    {
      label: "Ne",
      value: "false",
    },
  ];
  const [selectedTheory, setSelectedTheory] = useState<any>(theory[0]);

  const practical = [
    {
      label: "Ano",
      value: "true",
    },
    {
      label: "Ne",
      value: "false",
    },
  ];
  const [selectedPractical, setSelectedPractical] = useState<any>(practical[1]);

  const labRequired = [
    {
      label: "Ano",
      value: "true",
    },
    {
      label: "Ne",
      value: "false",
    },
  ];
  const [selectedLabRequired, setSelectedLabRequired] = useState<any>(
    labRequired[1]
  );

  const [loading, setLoading] = useState(false);

  async function saveSubject(data: SubjectCreateProps) {
    data.departmentId = selectedDepartment.value;
    data.departmentName = selectedDepartment.label;
    data.category = selectedCategory.value;
    data.type = selectedTypes.value;
    data.passingMarks=Number(data.passingMarks);
    data.totalMarks=Number(data.totalMarks);
    try {
      setLoading(true);
      if (editingId) {
        // Update logic here (e.g., await updateSubjectById(editingId, data))
        // setLoading(false);
        // toast.success("Aktualizováno úspěšně!");
      } else {
        await createSubject(data);
        setLoading(false);
        toast.success("Předmět úspěšně vytvořen!");
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Něco se pokazilo, zkuste to znovu.");
    }
  }

  return (
    <div>
      <div className="py-1">
        <Dialog>
          <DialogTrigger asChild>
            {editingId ? (
              <button title="Edit Subject" className="text-purple-600">
                <Pencil className="w-4 h-4" />
              </button>
            ) : (
              <Button title="Vytvořit předmět" variant="outline" size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            )}
          </DialogTrigger>
          <DialogContent className="max-w-3xl mx-auto p-4 bg-white shadow rounded">
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Upravit předmět" : "Přidat nový předmět"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(saveSubject)}>
              <div className="grid md:grid-cols-2 gap-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Název"
                  name="name"
                  placeholder="Zadejte název předmětu"
                />

                <TextInput
                  register={register}
                  errors={errors}
                  label="Krátký název předmětu"
                  name="shortName"
                  placeholder="Zadejte krátký název předmětu"
                />

                <SelectInput
                  label="Oddělení"
                  options={departments}
                  option={selectedDepartment}
                  setOption={setSelectedDepartment}
                  toolTipText="Přidat oddělení"
                  href="/dashboard/academics/departments"
                />

                <TextInput
                  register={register}
                  errors={errors}
                  label="Kód"
                  name="code"
                  placeholder="Zadejte kód předmětu"
                />

                <SelectInput
                  label="Kategorie"
                  options={categories}
                  option={selectedCategory}
                  setOption={setSelectedCategory}
                />

                <SelectInput
                  label="Typ"
                  options={types}
                  option={selectedTypes}
                  setOption={setSelectedTypes}
                />

                <TextInput
                  register={register}
                  errors={errors}
                  label="Minimální počet bodů"
                  name="passingMarks"
                  type="number"
                  placeholder="Zadejte minimální počet bodů"
                />

                <TextInput
                  register={register}
                  errors={errors}
                  label="Celkový počet bodů"
                  name="totalMarks"
                  type="number"
                  placeholder="Zadejte celkový počet bodů"
                />

                <SelectInput
                  label="Je volitelný"
                  options={optional}
                  option={selectedOptional}
                  setOption={setSelectedOptional}
                />

                <SelectInput
                  label="Má teoretickou část"
                  options={theory}
                  option={selectedTheory}
                  setOption={setSelectedTheory}
                />

                <SelectInput
                  label="Má praktickou část"
                  options={practical}
                  option={selectedPractical}
                  setOption={setSelectedPractical}
                />

                <SelectInput
                  label="Požaduje laboratoř"
                  options={labRequired}
                  option={selectedLabRequired}
                  setOption={setSelectedLabRequired}
                />
              </div>
              <div className="py-3">
                <SubmitButton
                  title={editingId ? "Aktualizovat" : "Přidat"}
                  loading={loading}
                />
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
