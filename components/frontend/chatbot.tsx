"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Send, X, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Dobrý den! Jsem virtuální asistent RektorIS. Jak vám mohu pomoci?",
    sender: "bot",
    timestamp: new Date(),
  },
]

const suggestedQuestions = [
  "Jak začít s RektorIS?",
  "Jaké jsou ceny pro základní školy?",
  "Jak dlouho trvá implementace?",
  "Nabízíte školení pro učitele?",
  "Je možné systém vyzkoušet zdarma?",
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response after delay
    setTimeout(
      () => {
        const botResponse = getBotResponse(inputValue)
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: botResponse,
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("cena") || lowerMessage.includes("ceny") || lowerMessage.includes("kolik stojí")) {
      return "Ceny RektorIS se odvíjí od velikosti vaší školy a požadovaných modulů. Pro základní školy začínají na 2 900 Kč měsíčně. Rádi vám připravíme individuální nabídku na míru. Můžete nás kontaktovat na info@rektoris.cz nebo vyplnit formulář na našem webu."
    }

    if (lowerMessage.includes("implementace") || lowerMessage.includes("jak dlouho")) {
      return "Implementace systému RektorIS obvykle trvá 2-4 týdny v závislosti na velikosti školy a požadovaných funkcích. Náš implementační tým vás celým procesem provede a poskytne vám potřebnou podporu."
    }

    if (lowerMessage.includes("školení") || lowerMessage.includes("naučit")) {
      return "Ano, součástí implementace je základní školení pro administrátory a učitele. Nabízíme také rozšířená školení a workshopy. K dispozici je rozsáhlá online dokumentace a videonávody."
    }

    if (lowerMessage.includes("vyzkoušet") || lowerMessage.includes("zkušební") || lowerMessage.includes("demo")) {
      return "Ano, nabízíme 14denní bezplatnou zkušební verzi bez nutnosti zadávat platební údaje. Během zkušební doby máte přístup ke všem funkcím vybraného plánu a můžete si systém důkladně otestovat ve vašem prostředí."
    }

    if (lowerMessage.includes("začít") || lowerMessage.includes("první kroky")) {
      return "Začít s RektorIS je jednoduché! Stačí se zaregistrovat na našem webu a aktivovat zkušební verzi. Náš tým vám pomůže s nastavením systému a importem dat. Poskytujeme také úvodní školení, abyste mohli systém co nejrychleji začít používat."
    }

    return "Děkuji za váš dotaz. Mohu vám poskytnout více informací o RektorIS, našich funkcích, cenách nebo implementaci. Pokud máte specifický dotaz, neváhejte se zeptat, nebo můžete kontaktovat náš tým na info@rektoris.cz."
  }

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question)
    handleSendMessage()
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : 500,
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed bottom-20 right-6 w-80 md:w-96 shadow-xl rounded-lg overflow-hidden z-50",
              isMinimized ? "h-auto" : "h-[500px]",
            )}
          >
            <Card className="border-[#884DEE]/20 h-full flex flex-col">
              <CardHeader className="p-4 bg-[#884DEE] text-white flex flex-row items-center space-y-0 gap-2">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="/logo.svg" alt="RektorIS" />
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
                <CardTitle className="text-base flex-1">Asistent RektorIS</CardTitle>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMinimize}
                    className="h-7 w-7 text-white hover:bg-white/20"
                  >
                    {isMinimized ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleChat}
                    className="h-7 w-7 text-white hover:bg-white/20"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              {!isMinimized && (
                <>
                  <CardContent className="p-4 flex-1 overflow-y-auto">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                        >
                          <div
                            className={cn(
                              "max-w-[80%] rounded-lg p-3",
                              message.sender === "user" ? "bg-[#884DEE] text-white" : "bg-gray-100 text-gray-800",
                            )}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className="text-xs opacity-70 mt-1 text-right">
                              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>
                          </div>
                        </div>
                      ))}

                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-800">
                            <div className="flex space-x-1">
                              <div
                                className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                                style={{ animationDelay: "0ms" }}
                              />
                              <div
                                className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                                style={{ animationDelay: "150ms" }}
                              />
                              <div
                                className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                                style={{ animationDelay: "300ms" }}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>

                    {messages.length === 1 && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-2">Navrhované otázky:</p>
                        <div className="flex flex-wrap gap-2">
                          {suggestedQuestions.map((question) => (
                            <Button
                              key={question}
                              variant="outline"
                              size="sm"
                              className="text-xs"
                              onClick={() => handleSuggestedQuestion(question)}
                            >
                              {question}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="p-4 border-t">
                    <form
                      className="flex w-full gap-2"
                      onSubmit={(e) => {
                        e.preventDefault()
                        handleSendMessage()
                      }}
                    >
                      <Input
                        placeholder="Napište zprávu..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        type="submit"
                        size="icon"
                        className="bg-[#884DEE] hover:bg-[#7a45d4]"
                        disabled={!inputValue.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardFooter>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        className={cn(
          "fixed bottom-6 right-6 rounded-full shadow-lg p-3 h-14 w-14",
          isOpen ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-[#884DEE] hover:bg-[#7a45d4]",
        )}
        onClick={toggleChat}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>
    </>
  )
}

