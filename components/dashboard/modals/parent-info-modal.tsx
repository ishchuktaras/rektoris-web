"use client"

import { format } from "date-fns"
import { Building2, Calendar, Eye, Globe, Mail, Phone, User, Users2, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import {Parent} from "@/types/types"
import Image from "next/image"

interface ParentInfoModalProps {
  parent?: Parent
  onEdit?: (parent: Parent) => void
  onDelete?: (parent: Parent) => void
}

export function ParentInfoModal({ parent, onEdit, onDelete }: ParentInfoModalProps) {
  if (!parent) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Eye className="h-6 w-6" />
      </Button>
    )
  }

  const handleEdit = () => {
    if (onEdit) {
      onEdit(parent)
    }
  }

  const handleDelete = () => {
    if (onDelete) {
      onDelete(parent)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-4">
              <div className="h-14 w-14 relative rounded-full overflow-hidden">
                {parent.imageUrl ? (
                  <Image
                    src={parent.imageUrl}
                    alt={`${parent.firstName} ${parent.lastName}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-purple-600 flex items-center justify-center text-white text-lg">
                    {parent.firstName[0]}
                    {parent.lastName[0]}
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {parent.title} {parent.firstName} {parent.lastName}
                </h2>
                <p className="text-sm text-gray-500">
                  {parent.relationship}
                </p>
              </div>
            </DialogTitle>
            <div className="flex gap-6">
              <Button
                variant="outline"
                size="sm"
                onClick={handleEdit}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* Rest of the component remains the same */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <InfoCard
            icon={Mail}
            label="Email"
            value={parent.email}
          />

          <InfoCard
            icon={Phone}
            label="Phone"
            value={parent.phone}
          />

          <InfoCard
            icon={MessageSquare}
            label="WhatsApp"
            value={parent.whatsappNumber}
          />

          <InfoCard
            icon={Globe}
            label="Nationality"
            value={parent.nationality}
          />

          <InfoCard
            icon={User}
            label="Gender"
            value={parent.gender}
          />

          <InfoCard
            icon={Calendar}
            label="Date of Birth"
            value={format(new Date(parent.dateOfBirth), "PP")}
          />

          <InfoCard
            icon={Building2}
            label="Occupation"
            value={parent.occupation}
          />

          <InfoCard
            icon={Users2}
            label="Contact Method"
            value={parent.contactMethod}
          />

          <InfoCard
            icon={Globe}
            label="Address"
            value={parent.address}
          />

          <InfoCard
            icon={User}
            label="National ID/Passport"
            value={parent.nationalId}
          />

          <InfoCard
            icon={Calendar}
            label="Created At"
            value={format(new Date(parent.createdAt), "PP")}
          />

          <InfoCard
            icon={Calendar}
            label="Updated At"
            value={format(new Date(parent.updatedAt), "PP")}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface InfoCardProps {
  icon: React.ElementType
  label: string
  value: string
}

function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex flex-col gap-1">
        <Icon className="h-5 w-5 text-purple-600" />
        <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        <div className="flex items-center gap-2">
          <p className="text-sm break-all">{value || "N/A"}</p>
        </div>
      </div>
    </div>
  )
}

