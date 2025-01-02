import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Eye,
  View,
  Mail,
  Phone,
  Building2,
  Globe,
  Users,
  UserCircle,
  Calendar,
  LinkIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

// Define the Contact type based on the column structure
type Contact = {
  
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  schoolName: string;
  schoolPage: string;
  country: string;
  numberOfStudents: number;
  role: string;
  media: string;
  createdAt: string;
};

export const ContactInfoCard = ({ contact }: { contact?: Contact }) => {
  // If contact is undefined, return null or a placeholder
  if (!contact) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Eye className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button /* variant="outline" */ size="sm">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl">
              {contact.firstName?.[0]}
              {contact.lastName?.[0]}
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                {contact.firstName} {contact.lastName}
              </h2>
              <p className="text-sm text-gray-500">Via {contact.media|| "N/A"}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <Mail className="h-5 w-5 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <div className="flex items-center gap-2">
                <p className="text-sm break-all">{contact.email || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <Phone className="h-5 w-5 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-500">Phone</h3>
              <div className="flex items-center gap-2">
                <p className="text-sm">{contact.phone || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <Building2 className="h-5 w-5 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-500">School Name</h3>
              <div className="flex items-center gap-2">
                <p className="text-sm">{contact.schoolName || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <Globe className="h-5 w-5 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-500">Country</h3>
              <div className="flex items-center gap-2">
                <p className="text-sm">{contact.country || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <LinkIcon className="h-5 w-5 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-500">School Page</h3>
              <div className="flex items-center gap-2">
                {contact.schoolPage ? (
                  <a
                    href={contact.schoolPage}
                    className="text-sm text-purple-600 hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.schoolPage}
                  </a>
                ) : (
                  <p className="text-sm">N/A</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <Users className="h-5 w-5 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-500">Students</h3>
              <div className="flex items-center gap-2">
                <p className="text-sm">{contact.numberOfStudents || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <Building2 className="h-5 w-5 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-500">Role</h3>
              <div className="flex items-center gap-2">
                <p className="text-sm">{contact.role || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <Calendar className="h-5 w-5 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-500">Joined</h3>
              <div className="flex items-center gap-2">
                <p className="text-sm">
                  {contact.createdAt
                    ? new Date(contact.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactInfoCard;
