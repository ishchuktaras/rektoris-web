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

export type ClassProps = {
  name: string;
};

import { Check, FolderPlus, Pen, Pencil, Plus } from "lucide-react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
 
export default function StreamForm({
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
  } = useForm<ClassProps>({
    defaultValues: {
      name: initialContent || "",
    },
  });
 
  const [loading, setLoading] = useState(false);
 
  async function saveFolder(data: ClassProps) {
    // data.userId = userId;
    try {
      setLoading(true);
      if (editingId) {
        // await updateFolderById(editingId, data);
        // setLoading(false);
        
        toast.success("Updated Successfully!");
      } else {
        // await createFolder(data);
        // setLoading(false);
        // toast.success("Successfully Created!");
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
              <button title="Edit Stream" className="text-purple-600">
                <Pencil className="w-4 h-4 " />
              </button>
            ) : (
              <Button title="Vytvořit stream" variant={"outline"} size="sm">
                <Plus className="w-4 h-4 " />
                Přidat stream
              </Button>
            )}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Folder" : "Přidat nový stream"}
              </DialogTitle>
              {/* <DialogDescription>
                Please Write your Comment here, with respect
              </DialogDescription> */}
            </DialogHeader>
            <form className="" onSubmit={handleSubmit(saveFolder)}>
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