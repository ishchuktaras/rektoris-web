import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User } from "lucide-react"

interface WelcomeBannerProps {
  userName: string
  userRole: string
  userSchool: string
}

export default function WelcomeBanner({ userName, userRole, userSchool }: WelcomeBannerProps) {
  return (
    <div className="bg-purple-600 rounded-lg p-4 flex items-center gap-4 text-white">
      <Avatar className="h-10 w-10 border-2 border-white/20">
        <AvatarFallback className="bg-blue-700">
          <User className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
      <div className="space-y-0.5">
        <h2 className="text-xl font-semibold tracking-tight">Welcome back, {userName}!</h2>
        <p className="text-sm text-blue-100">
          {userRole} at {userSchool}
        </p>
      </div>
    </div>
  )
}

