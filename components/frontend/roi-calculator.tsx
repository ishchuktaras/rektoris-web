"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, Clock, DollarSign, Users, TrendingUp, FileText } from "lucide-react"
import { motion } from "framer-motion"

export function ROICalculator() {
  // Input state
  const [students, setStudents] = useState(500)
  const [teachers, setTeachers] = useState(50)
  const [adminStaff, setAdminStaff] = useState(10)
  const [paperworkHours, setPaperworkHours] = useState(20)
  const [hourlyRate, setHourlyRate] = useState(250)

  // Results state
  const [monthlySavings, setMonthlySavings] = useState(0)
  const [annualSavings, setAnnualSavings] = useState(0)
  const [roi, setRoi] = useState(0)
  const [paybackMonths, setPaybackMonths] = useState(0)

  // Calculate results
  useEffect(() => {
    // Calculate time savings (hours per month)
    const totalStaff = teachers + adminStaff
    const timeSavingsPerStaff = paperworkHours * 0.7 // Assume 70% reduction in paperwork time
    const totalTimeSavings = totalStaff * timeSavingsPerStaff

    // Calculate cost savings
    const monthlyCostSavings = totalTimeSavings * hourlyRate
    const annualCostSavings = monthlyCostSavings * 10 // School year (10 months)

    // Calculate ROI (based on typical annual cost of the system)
    const typicalAnnualCost = students <= 200 ? 29000 : students <= 500 ? 49000 : 79000
    const calculatedRoi = (annualCostSavings / typicalAnnualCost) * 100

    // Calculate payback period in months
    const paybackPeriod = typicalAnnualCost / monthlyCostSavings

    setMonthlySavings(Math.round(monthlyCostSavings))
    setAnnualSavings(Math.round(annualCostSavings))
    setRoi(Math.round(calculatedRoi))
    setPaybackMonths(Math.round(paybackPeriod * 10) / 10) // Round to 1 decimal place
  }, [students, teachers, adminStaff, paperworkHours, hourlyRate])

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-[#884DEE]" />
          Kalkulačka návratnosti investice
        </CardTitle>
        <CardDescription>Vypočítejte, kolik času a peněz můžete ušetřit implementací systému RektorIS</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Kalkulačka</TabsTrigger>
            <TabsTrigger value="results">Výsledky</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6 pt-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="students">Počet studentů: {students}</Label>
                  <span className="text-sm text-gray-500">(50-2000)</span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-5 w-5 text-gray-400" />
                  <Slider
                    id="students"
                    min={50}
                    max={2000}
                    step={50}
                    value={[students]}
                    onValueChange={(value) => setStudents(value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={students}
                    onChange={(e) => {
                      const value = Number.parseInt(e.target.value)
                      if (value >= 50 && value <= 2000) setStudents(value)
                    }}
                    className="w-20"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="teachers">Počet učitelů: {teachers}</Label>
                  <span className="text-sm text-gray-500">(5-200)</span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-5 w-5 text-gray-400" />
                  <Slider
                    id="teachers"
                    min={5}
                    max={200}
                    step={5}
                    value={[teachers]}
                    onValueChange={(value) => setTeachers(value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={teachers}
                    onChange={(e) => {
                      const value = Number.parseInt(e.target.value)
                      if (value >= 5 && value <= 200) setTeachers(value)
                    }}
                    className="w-20"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="adminStaff">Počet administrativních pracovníků: {adminStaff}</Label>
                  <span className="text-sm text-gray-500">(1-50)</span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-5 w-5 text-gray-400" />
                  <Slider
                    id="adminStaff"
                    min={1}
                    max={50}
                    step={1}
                    value={[adminStaff]}
                    onValueChange={(value) => setAdminStaff(value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={adminStaff}
                    onChange={(e) => {
                      const value = Number.parseInt(e.target.value)
                      if (value >= 1 && value <= 50) setAdminStaff(value)
                    }}
                    className="w-20"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="paperworkHours">
                    Průměrný počet hodin strávených administrativou (měsíčně na osobu): {paperworkHours}
                  </Label>
                  <span className="text-sm text-gray-500">(5-40)</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <Slider
                    id="paperworkHours"
                    min={5}
                    max={40}
                    step={1}
                    value={[paperworkHours]}
                    onValueChange={(value) => setPaperworkHours(value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={paperworkHours}
                    onChange={(e) => {
                      const value = Number.parseInt(e.target.value)
                      if (value >= 5 && value <= 40) setPaperworkHours(value)
                    }}
                    className="w-20"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="hourlyRate">Průměrná hodinová sazba (Kč): {hourlyRate}</Label>
                  <span className="text-sm text-gray-500">(150-500)</span>
                </div>
                <div className="flex items-center gap-4">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                  <Slider
                    id="hourlyRate"
                    min={150}
                    max={500}
                    step={10}
                    value={[hourlyRate]}
                    onValueChange={(value) => setHourlyRate(value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => {
                      const value = Number.parseInt(e.target.value)
                      if (value >= 150 && value <= 500) setHourlyRate(value)
                    }}
                    className="w-20"
                  />
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#884DEE] hover:bg-[#7a45d4]">Vypočítat úspory</Button>
          </TabsContent>

          <TabsContent value="results" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#884DEE]" />
                      <h3 className="font-medium">Měsíční úspora</h3>
                    </div>
                    <motion.div
                      key={monthlySavings}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-[#884DEE]"
                    >
                      {monthlySavings.toLocaleString()} Kč
                    </motion.div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Odhadovaná měsíční úspora díky snížení administrativní zátěže
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-[#884DEE]" />
                      <h3 className="font-medium">Roční úspora</h3>
                    </div>
                    <motion.div
                      key={annualSavings}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-[#884DEE]"
                    >
                      {annualSavings.toLocaleString()} Kč
                    </motion.div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Celková roční úspora za školní rok (10 měsíců)</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-[#884DEE]" />
                      <h3 className="font-medium">ROI</h3>
                    </div>
                    <motion.div
                      key={roi}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-[#884DEE]"
                    >
                      {roi}%
                    </motion.div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Návratnost investice za první rok používání</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-[#884DEE]" />
                      <h3 className="font-medium">Doba návratnosti</h3>
                    </div>
                    <motion.div
                      key={paybackMonths}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-[#884DEE]"
                    >
                      {paybackMonths} měsíců
                    </motion.div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Doba, za kterou se investice do systému vrátí</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-2">Shrnutí výsledků</h3>
              <p className="text-sm text-gray-600 mb-4">
                Na základě vašich údajů by implementace systému RektorIS mohla vaší škole ušetřit přibližně{" "}
                <strong>{annualSavings.toLocaleString()} Kč ročně</strong>. Investice do systému se vám vrátí za{" "}
                <strong>{paybackMonths} měsíců</strong> a roční návratnost investice (ROI) je <strong>{roi}%</strong>.
              </p>
              <div className="flex justify-center">
                <Button className="bg-[#884DEE] hover:bg-[#7a45d4]">Získat detailní analýzu úspor</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

