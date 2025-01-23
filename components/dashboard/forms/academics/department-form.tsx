"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Pencil, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { DepartmentCreateProps } from "@/types/types";
import { createClass } from "@/actions/classes";
import { createDepartment } from "@/actions/departments";

export type DepartmentProps = {
  name: string;
};

export default function DepartmentForm({
  userId,
  initialContent,
  editingId,
}: {
  userId?: string;
  initialContent?: string;
  editingId?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DepartmentCreateProps>({
    defaultValues: {
      name: initialContent || "",
    },
  });

  const [loading, setLoading] = useState(false);

  async function saveDepartment(data: DepartmentCreateProps) {
    // data.userId = userId;
    try {
      setLoading(true);
      if (editingId) {
        // await updateFolderById(editingId, data);
        // setLoading(false);

        toast.success("Aktualizováno úspěšně!");
      } else {
        const res = await createDepartment(data);
        setLoading(false);
        toast.success("Oddělení úspěšně vytvořeno!");
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div>
      <div className="py-1">
        <Dialog>
          <DialogTrigger asChild>
            {editingId ? (
              <button title="Edit Class" className="text-purple-600">
                <Pencil className="w-4 h-4 " />
              </button>
            ) : (
              <Button title="Vytvořit třídu" variant={"outline"} size="sm">
                <Plus className="w-4 h-4 " />
              </Button>
            )}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Department" : "Přidat nové oddělení"}
              </DialogTitle>
              {/* <DialogDescription>
                Please Write your Comment here, with respect
              </DialogDescription> */}
            </DialogHeader>
            <form className="" onSubmit={handleSubmit(saveDepartment)}>
              <div className="">
                <div className="space-y-3">
                  <div className="grid gap-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label=""
                      name="name"
                      icon={Check}
                    />
                  </div>
                </div>
                <div className="py-3">
                  <SubmitButton
                    title={editingId ? "Update" : "Přidat"}
                    loading={loading}
                  />
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
