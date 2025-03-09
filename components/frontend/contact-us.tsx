"use client"

import { Mail, Phone, MapPin, Send, PenLine, School, PanelsTopLeft, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { createContact } from "@/actions/admin"

export type ContactProps = {
  firstName: string
  lastName: string
  email: string
  phone: string
  schoolName: string
  country: string
  schoolPage: string
  numberOfStudents: number
  role: string
  media: string
  pointsToSolve: string
}

const europeanCountries = [
  { countryCode: "AL", label: "Albania" },
  { countryCode: "AD", label: "Andorra" },
  { countryCode: "AM", label: "Armenia" },
  { countryCode: "AT", label: "Austria" },
  { countryCode: "AZ", label: "Azerbaijan" },
  { countryCode: "BY", label: "Belarus" },
  { countryCode: "BE", label: "Belgium" },
  { countryCode: "BA", label: "Bosnia and Herzegovina" },
  { countryCode: "BG", label: "Bulgaria" },
  { countryCode: "HR", label: "Croatia" },
  { countryCode: "CY", label: "Cyprus" },
  { countryCode: "CZ", label: "Czech Republic" },
  { countryCode: "DK", label: "Denmark" },
  { countryCode: "EE", label: "Estonia" },
  { countryCode: "FI", label: "Finland" },
  { countryCode: "FR", label: "France" },
  { countryCode: "GE", label: "Georgia" },
  { countryCode: "DE", label: "Germany" },
  { countryCode: "GR", label: "Greece" },
  { countryCode: "HU", label: "Hungary" },
  { countryCode: "IS", label: "Iceland" },
  { countryCode: "IE", label: "Ireland" },
  { countryCode: "IT", label: "Italy" },
  { countryCode: "KZ", label: "Kazakhstan" },
  { countryCode: "LV", label: "Latvia" },
  { countryCode: "LI", label: "Liechtenstein" },
  { countryCode: "LT", label: "Lithuania" },
  { countryCode: "LU", label: "Luxembourg" },
  { countryCode: "MK", label: "Macedonia" },
  { countryCode: "MT", label: "Malta" },
  { countryCode: "MD", label: "Moldova" },
  { countryCode: "MC", label: "Monaco" },
  { countryCode: "ME", label: "Montenegro" },
  { countryCode: "NL", label: "Netherlands" },
  { countryCode: "NO", label: "Norway" },
  { countryCode: "PL", label: "Poland" },
  { countryCode: "PT", label: "Portugal" },
  { countryCode: "RO", label: "Romania" },
  { countryCode: "RU", label: "Russia" },
  { countryCode: "SM", label: "San Marino" },
  { countryCode: "RS", label: "Serbia" },
  { countryCode: "SK", label: "Slovakia" },
  { countryCode: "SI", label: "Slovenia" },
  { countryCode: "ES", label: "Spain" },
  { countryCode: "SE", label: "Sweden" },
  { countryCode: "CH", label: "Switzerland" },
  { countryCode: "TR", label: "Turkey" },
  { countryCode: "UA", label: "Ukraine" },
  { countryCode: "GB", label: "United Kingdom" },
  { countryCode: "VA", label: "Vatican City" },
]

export const ContactUs: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [phoneCode, setPhoneCode] = useState("+420") // Default Czech code
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      schoolName: "",
      schoolPage: "",
      numberOfStudents: 0,
      pointsToSolve: "",
    },
  })

  const roles = [
    { value: "principal/head_teacher", label: "Ředitel/vedoucí učitel" },
    { value: "deputy_director", label: "Zástupce ředitele" },
    { value: "department_head", label: "Vedoucí oddělení" },
    { value: "teacher", label: "Učitel" },
    { value: "admin_staff", label: "Administrativní pracovníci" },
    { value: "it_coordinator", label: "IT koordinátor" },
    { value: "counselor", label: "Školní poradce" },
    { value: "librarian", label: "Školní knihovník" },
    { value: "coordinator", label: "Programový koordinátor" },
    { value: "other", label: "Jiný zaměstnanec" },
  ]

  const media = [
    { value: "facebook", label: "Facebook" },
    { value: "google", label: "Google" },
    { value: "instagram", label: "Instagram" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "twitter", label: "Twitter" },
    { value: "youtube", label: "YouTube" },
    { value: "other", label: "Jiné" },
  ]

  const initialCountryCode = "CZ"
  const initialCountry = europeanCountries.find((item) => item.countryCode === initialCountryCode)

  const [selectedCountry, setSelectedCountry] = useState<any>(initialCountry)
  const [selectedRole, setSelectedRole] = useState<any>(roles[0])
  const [selectedMedia, setSelectedMedia] = useState<any>(media[0])

  async function onSubmit(data: ContactProps) {
    data.phone = data.phone[0] === "0" ? data.phone.substring(1) : data.phone
    const phoneNumber = `${phoneCode}${data.phone}`
    data.phone = phoneNumber
    data.country = selectedCountry.label
    data.role = selectedRole.value
    data.media = selectedMedia.value
    data.numberOfStudents = Number(data.numberOfStudents)

    try {
      setLoading(true)
      const res = await createContact(data)
      setLoading(false)
      toast.success("Vaše žádost byla úspěšně odeslána!")
      reset()
    } catch (error) {
      setLoading(false)
      toast.error("Došlo k chybě. Zkuste to prosím znovu.")
      console.error(error)
    }
  }

  return (
    <section className="bg-gradient-to-b from-muted/20 to-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Kontaktujte nás</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Máte zájem o demo verzi našeho systému? Vyplňte formulář a náš tým vás bude kontaktovat s personalizovanou
            prezentací.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left sidebar with contact info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="border-none shadow-lg overflow-hidden bg-card">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-6">Kontaktní informace</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-card-foreground">Email</h4>
                        <p className="text-muted-foreground">rektoris@com.cz</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-card-foreground">Telefon</h4>
                        <p className="text-muted-foreground">+420 777 777 777</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-card-foreground">Adresa</h4>
                        <p className="text-muted-foreground">58601 Jihlava, Česká republika</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Domluvte si konzultaci</h3>
                  <p className="mb-6 opacity-90">
                    Diskutujte o svých potřebách v oblasti školního managementu a prozkoumejte přizpůsobená řešení s
                    naším týmem.
                  </p>
                  <Button variant="secondary" className="w-full font-medium">
                    Rezervujte si svůj termín
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl overflow-hidden bg-card">
              <div className="h-2 bg-secondary"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Kontaktujte nás pro demo verzi systému</h3>
                <p className="text-muted-foreground mb-8">
                  Vyplňte formulář níže a náš tým vás bude kontaktovat s personalizovanou prezentací systému.
                </p>

                <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        Křestní jméno <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <PenLine className="h-4 w-4" />
                        </div>
                        <Input
                          id="firstName"
                          placeholder="Např. Karel"
                          className="pl-10"
                          {...register("firstName", { required: "Toto pole je povinné" })}
                        />
                      </div>
                      {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName.message}</p>}
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Příjmení <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <PenLine className="h-4 w-4" />
                        </div>
                        <Input
                          id="lastName"
                          placeholder="Např. Novotný"
                          className="pl-10"
                          {...register("lastName", { required: "Toto pole je povinné" })}
                        />
                      </div>
                      {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                        </div>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Např. novotny@gmail.com"
                          className="pl-10"
                          {...register("email", {
                            required: "Toto pole je povinné",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Neplatná emailová adresa",
                            },
                          })}
                        />
                      </div>
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Telefon (s kódem země) <span className="text-destructive">*</span>
                      </Label>
                      <div className="flex gap-2">
                        <Select value={phoneCode} onValueChange={setPhoneCode}>
                          <SelectTrigger className="w-[100px]">
                            <SelectValue placeholder="+420" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+420">+420</SelectItem>
                            <SelectItem value="+421">+421</SelectItem>
                            <SelectItem value="+48">+48</SelectItem>
                            <SelectItem value="+43">+43</SelectItem>
                            <SelectItem value="+49">+49</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="relative flex-1">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Phone className="h-4 w-4" />
                          </div>
                          <Input
                            id="phone"
                            placeholder="Vaše telefonní číslo"
                            className="pl-10"
                            {...register("phone", { required: "Toto pole je povinné" })}
                          />
                        </div>
                      </div>
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* School Name */}
                    <div className="space-y-2">
                      <Label htmlFor="schoolName" className="text-sm font-medium">
                        Název školy <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <School className="h-4 w-4" />
                        </div>
                        <Input
                          id="schoolName"
                          placeholder="Např. Gymnázium Jihlava"
                          className="pl-10"
                          {...register("schoolName", { required: "Toto pole je povinné" })}
                        />
                      </div>
                      {errors.schoolName && (
                        <p className="text-destructive text-xs mt-1">{errors.schoolName.message}</p>
                      )}
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-sm font-medium">
                        Země
                      </Label>
                      <Select
                        value={selectedCountry?.countryCode}
                        onValueChange={(value) => {
                          const country = europeanCountries.find((c) => c.countryCode === value)
                          setSelectedCountry(country)
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte zemi" />
                        </SelectTrigger>
                        <SelectContent>
                          {europeanCountries.map((country) => (
                            <SelectItem key={country.countryCode} value={country.countryCode}>
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* School Website */}
                    <div className="space-y-2">
                      <Label htmlFor="schoolPage" className="text-sm font-medium">
                        Školní web/stránka
                      </Label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <PanelsTopLeft className="h-4 w-4" />
                        </div>
                        <Input
                          id="schoolPage"
                          placeholder="Např. www.gymnaziumjihlava.cz"
                          className="pl-10"
                          {...register("schoolPage")}
                        />
                      </div>
                    </div>

                    {/* Number of Students */}
                    <div className="space-y-2">
                      <Label htmlFor="numberOfStudents" className="text-sm font-medium">
                        Počet studentů <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <User className="h-4 w-4" />
                        </div>
                        <Input
                          id="numberOfStudents"
                          type="number"
                          placeholder="Např. 300"
                          className="pl-10"
                          {...register("numberOfStudents", {
                            required: "Toto pole je povinné",
                            valueAsNumber: true,
                            min: { value: 1, message: "Minimální počet je 1" },
                          })}
                        />
                      </div>
                      {errors.numberOfStudents && (
                        <p className="text-destructive text-xs mt-1">{errors.numberOfStudents.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Role */}
                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-sm font-medium">
                        Vaše pozice v instituci
                      </Label>
                      <Select
                        value={selectedRole.value}
                        onValueChange={(value) => {
                          const role = roles.find((r) => r.value === value)
                          setSelectedRole(role)
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte pozici" />
                        </SelectTrigger>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role.value} value={role.value}>
                              {role.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Media Source */}
                    <div className="space-y-2">
                      <Label htmlFor="media" className="text-sm font-medium">
                        Jak jste se o nás dozvěděli?
                      </Label>
                      <Select
                        value={selectedMedia.value}
                        onValueChange={(value) => {
                          const mediaSource = media.find((m) => m.value === value)
                          setSelectedMedia(mediaSource)
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte zdroj" />
                        </SelectTrigger>
                        <SelectContent>
                          {media.map((m) => (
                            <SelectItem key={m.value} value={m.value}>
                              {m.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Problems to Solve */}
                  <div className="space-y-2">
                    <Label htmlFor="pointsToSolve" className="text-sm font-medium">
                      Klíčové problémy, které chcete vyřešit
                    </Label>
                    <Textarea
                      id="pointsToSolve"
                      placeholder="Popište problémy, které byste chtěli pomocí našeho systému vyřešit..."
                      className="min-h-[120px]"
                      {...register("pointsToSolve")}
                    />
                    {errors.pointsToSolve && (
                      <p className="text-destructive text-xs mt-1">{errors.pointsToSolve.message}</p>
                    )}
                  </div>

                  <div className="mt-2">
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto px-8 py-3 rounded-lg font-medium"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                          <span>Odesílání, prosím čekejte...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          <span>Odeslat žádost</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

