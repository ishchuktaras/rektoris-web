import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Mail,
  Phone,
  Building2,
  Globe,
  Users,
  UserCircle,
  Calendar,
} from "lucide-react";

// Define the Contact type based on the column structure
type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  schoolName: string;
  country: string;
  numberOfStudents: number;
  role: string;
  createdAt: string;
};

export const ContactCard = ({ contact }: { contact?: Contact }) => {
  // If contact is undefined, return null or a placeholder
  if (!contact) {
    return (
      <Button variant="ghost" size="icon" disabled>
        
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {contact?.firstName} {contact?.lastName}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <Card>
            <CardContent className="grid gap-4 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-gray-500">
                      {contact?.email || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-gray-500">
                      {contact?.phone || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">School</p>
                    <p className="text-sm text-gray-500">
                      {contact?.schoolName || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Country</p>
                    <p className="text-sm text-gray-500">
                      {contact?.country || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Number of Students</p>
                    <p className="text-sm text-gray-500">
                      {contact?.numberOfStudents || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <UserCircle className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Role</p>
                    <p className="text-sm text-gray-500">
                      {contact?.role || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Created At</p>
                    <p className="text-sm text-gray-500">
                      {contact?.createdAt
                        ? new Date(contact.createdAt).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactCard;
