"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, Clock, DollarSign, Users, TrendingUp, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export function ROICalculator() {
  // Basic school metrics
  const [students, setStudents] = useState(500)
  const [teachers, setTeachers] = useState(50)
  const [adminStaff, setAdminStaff] = useState(10)

  // Key management metrics
  const [adminTime, setAdminTime] = useState(20) // Hours per month on admin tasks
  const [hourlyRate, setHourlyRate] = useState(250) // Hourly cost in CZK
  const [teacherFocus, setTeacherFocus] = useState(60) // % of time teachers can focus on teaching

  // Results state
  const [timeSavings, setTimeSavings] = useState(0)
  const [costSavings, setCostSavings] = useState(0)
  const [teachingImprovement, setTeachingImprovement] = useState(0)
  const [roi, setRoi] = useState(0)

  const [activeTab, setActiveTab] = useState("calculator")

  // Calculate results
  useEffect(() => {
    // Calculate time savings (hours per month)
    const totalStaff = teachers + adminStaff
    const timeSaved = adminTime * 0.6 * totalStaff // 60% reduction in admin time

    // Calculate cost savings
    const monthlyCostSavings = timeSaved * hourlyRate
    const annualCostSavings = monthlyCostSavings * 10 // School year (10 months)

    // Calculate teaching focus improvement
    const potentialImprovement = 100 - teacherFocus // Room for improvement
    const focusImprovement = potentialImprovement * 0.4 // 40% of potential improvement

    // Calculate ROI (based on typical annual cost of the system)
    const typicalAnnualCost = students <= 200 ? 29000 : students <= 500 ? 49000 : 79000
    const calculatedRoi = (annualCostSavings / typicalAnnualCost) * 100

    setTimeSavings(Math.round(timeSaved))
    setCostSavings(Math.round(annualCostSavings))
    setTeachingImprovement(Math.round(focusImprovement))
    setRoi(Math.round(calculatedRoi))
  }, [students, teachers, adminStaff, adminTime, hourlyRate, teacherFocus])

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-[#884DEE]" />
          Kalkulačka přínosů pro vedení školy
        </CardTitle>
        <CardDescription>
          Zjistěte, jaké přínosy může mít systém RektorIS pro vaši školu z pohledu vedení
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Kalkulačka</TabsTrigger>
            <TabsTrigger value="results">Výsledky</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6 pt-4">
            <div className="space-y-4">
              {/* School Profile */}
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

              {/* Management Metrics */}
              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="adminTime">
                    Průměrný čas strávený administrativou (hodin/měsíc/osoba): {adminTime}
                  </Label>
                  <span className="text-sm text-gray-500">(5-40)</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <Slider
                    id="adminTime"
                    min={5}
                    max={40}
                    step={1}
                    value={[adminTime]}
                    onValueChange={(value) => setAdminTime(value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={adminTime}
                    onChange={(e) => {
                      const value = Number.parseInt(e.target.value)
                      if (value >= 5 && value <= 40) setAdminTime(value)
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

              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="teacherFocus">Současný podíl času učitelů věnovaný výuce (%): {teacherFocus}</Label>
                  <span className="text-sm text-gray-500">(40-90%)</span>
                </div>
                <div className="flex items-center gap-4">
                  <BookOpen className="h-5 w-5 text-gray-400" />
                  <Slider
                    id="teacherFocus"
                    min={40}
                    max={90}
                    step={5}
                    value={[teacherFocus]}
                    onValueChange={(value) => setTeacherFocus(value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={teacherFocus}
                    onChange={(e) => {
                      const value = Number.parseInt(e.target.value)
                      if (value >= 40 && value <= 90) setTeacherFocus(value)
                    }}
                    className="w-20"
                  />
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#884DEE] hover:bg-[#7a45d4]" onClick={() => setActiveTab("results")}>
              Vypočítat přínosy
            </Button>
          </TabsContent>

          <TabsContent value="results" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#884DEE]" />
                      <h3 className="font-medium">Úspora času</h3>
                    </div>
                    <motion.div
                      key={timeSavings}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-[#884DEE]"
                    >
                      {timeSavings} hodin/měsíc
                    </motion.div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Celková měsíční úspora času pro všechny zaměstnance</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-[#884DEE]" />
                      <h3 className="font-medium">Finanční úspora</h3>
                    </div>
                    <motion.div
                      key={costSavings}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-[#884DEE]"
                    >
                      {costSavings.toLocaleString()} Kč/rok
                    </motion.div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Roční finanční úspora díky efektivnější administrativě</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-[#884DEE]" />
                      <h3 className="font-medium">Zlepšení výuky</h3>
                    </div>
                    <motion.div
                      key={teachingImprovement}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-[#884DEE]"
                    >
                      +{teachingImprovement}%
                    </motion.div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Očekávané zvýšení času věnovaného výuce</p>
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
                  <p className="text-sm text-gray-500 mt-2">Návratnost investice za první rok</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-2">Shrnutí pro vedení školy</h3>
              <p className="text-sm text-gray-600 mb-4">
                Na základě vašich údajů by implementace systému RektorIS mohla přinést:
                <br />
                <br />• <strong>Úsporu {timeSavings} hodin měsíčně</strong> pro vaše zaměstnance, což umožní soustředit
                se na důležitější úkoly
                <br />• <strong>Finanční úsporu {costSavings.toLocaleString()} Kč ročně</strong>, kterou můžete
                investovat do rozvoje školy
                <br />• <strong>Zvýšení času věnovaného výuce o {teachingImprovement}%</strong>, což povede k lepším
                vzdělávacím výsledkům
                <br />
                <br />
                Celková návratnost investice (ROI) je <strong>{roi}%</strong>, což znamená, že systém se vám rychle
                zaplatí a začne přinášet hodnotu.
              </p>
              <div className="flex justify-center">
                <Button className="bg-[#884DEE] hover:bg-[#7a45d4]">Získat detailní analýzu pro vedení</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

