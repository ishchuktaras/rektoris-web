import Link from "next/link"
import { AlertCircle, ArrowLeft, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface NotAuthorizedProps {
  title?: string
  description?: string
  showBackButton?: boolean
  showLoginButton?: boolean
  backHref?: string
  loginHref?: string
}

export default function NotAuthorized({
  title = "Neoprávněný přístup",
  description = "Nemáte oprávnění pro přístup k tomuto zdroji.",
  showBackButton = true,
  showLoginButton = true,
  backHref = "/",
  loginHref = "/login",
}: NotAuthorizedProps) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center p-4">
      <Card className="mx-auto max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <Lock className="h-10 w-10 text-red-500" />
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-3 rounded-lg border p-3 text-sm">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
            <div>
              <p>
              Pokud se domníváte, že se jedná o chybu, kontaktujte svého administrátora nebo se zkuste přihlásit pomocí jiného účtu.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-x-2 sm:space-y-0">
          {showBackButton && (
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <Link href={backHref}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Vraťte se zpět
              </Link>
            </Button>
          )}
          {showLoginButton && (
            <Button className="w-full sm:w-auto" asChild>
              <Link href={loginHref}>Přihlaste se</Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

