"use client"

import { useState, useEffect } from "react"
import { Mic, Send, X, ChevronRight, Menu } from "lucide-react"

const chatMessages = [
  { role: "assistant", text: "Hello! I'm Lumi, your creative companion. Let me know how I can help." },
  { role: "user", text: "Can you write it for me?" },
  { role: "assistant", text: "OK, I've added a plot outline to your document" },
]

const documentContent = `Character Analysis Notes: Napoleon (Animal Farm)

Basic Identity
• Napoleon is "a large, rather fierce-looking Berkshire boar"—one of the pigs who emerges as a leader after Old Major's death.
• Quickly becomes the most powerful animal on the farm.
• Represents Joseph Stalin and authoritarian dictatorship.

Beliefs & Motivations
• Belief: Power is more important than equality.
  • Napoleon pretends to support Animalism at first, but his actions show he values control above all else.
  • Evidence: He takes the milk and apples for the pigs, claiming it's for the "brainworkers," even though this goes against equality.
• Belief: Propaganda is necessary to control others.
  • Uses Squealer to spread lies and reshape history.
  • Evidence: Squealer constantly tells the animals that Napoleon is "always right," and Napoleon encourages this.
• Belief: Violence and fear are effective tools.
  • Raises the puppies into private enforcers—his secret police.
  • Evidence: When he unleashes the dogs to chase Snowball away, Napoleon shows he sees violence as legitimate leadership.

Personality Traits
1. Manipulative
   a. Speaks little but acts strategically behind the scenes.
   b. Evidence: He secretly trains the puppies away from the others so he can use them later.
2. Power-hungry
   a. Takes control of every decision.
   b. Evidence: After expelling Snowball, he announces that decisions will be made only by a "special committee of pigs" led by himself.
3. Hypocritical
   a. Constantly breaks the commandments but rewrites them to look innocent.`

interface LumiAnimationProps {
  className?: string
}

export default function LumiAnimation({ className = "" }: LumiAnimationProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<typeof chatMessages>([])
  const [documentText, setDocumentText] = useState("")
  const [isTypingDocument, setIsTypingDocument] = useState(false)

  // Animate chat messages
  useEffect(() => {
    if (currentMessageIndex < chatMessages.length) {
      const timer = setTimeout(
        () => {
          setDisplayedMessages((prev) => [...prev, chatMessages[currentMessageIndex]])
          setCurrentMessageIndex((prev) => prev + 1)
        },
        currentMessageIndex === 0 ? 500 : 2000,
      )
      return () => clearTimeout(timer)
    } else if (currentMessageIndex === chatMessages.length && !isTypingDocument) {
      const timer = setTimeout(() => {
        setIsTypingDocument(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex, isTypingDocument])

  // Animate document typing
  useEffect(() => {
    if (isTypingDocument && documentText.length < documentContent.length) {
      const timer = setTimeout(() => {
        setDocumentText(documentContent.slice(0, documentText.length + 1))
      }, 10)
      return () => clearTimeout(timer)
    }
  }, [isTypingDocument, documentText])

  return (
    <div className={`flex h-[800px] bg-[#f5f5f5] ${className}`}>
      {/* Browser Chrome */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-[#e8e8e8] border-b border-gray-300">
        {/* Window Controls */}
        <div className="flex items-center gap-2 px-3 py-2.5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Tab */}
          <div className="flex items-center gap-2 ml-2">
            <div className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-t-lg border-t border-x border-gray-300">
              <span className="text-orange-500 text-sm">🔥</span>
              <span className="text-sm">Lumi</span>
              <button className="hover:bg-gray-100 rounded p-0.5">
                <X className="w-3 h-3" />
              </button>
            </div>
            <button className="hover:bg-gray-200 rounded p-1">
              <span className="text-xl leading-none">+</span>
            </button>
          </div>
        </div>

        {/* Address Bar */}
        <div className="flex items-center gap-2 px-3 pb-2">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md flex-1 border border-gray-300">
            <span className="text-sm text-gray-700">🔒 lumistory.ai/writings/</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 pt-24 relative">
        {/* Left Sidebar - Chat */}
        <div className="w-[380px] bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                L
              </div>
              <div>
                <div className="font-semibold text-sm">Lumi</div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {displayedMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] ${msg.role === "user" ? "text-right" : ""}`}>
                  {msg.role === "assistant" && <div className="text-xs font-semibold mb-1 text-gray-700">Lumi</div>}
                  {msg.role === "user" && <div className="text-xs font-semibold mb-1 text-gray-700">You</div>}
                  <div
                    className={`rounded-2xl px-4 py-2.5 inline-block ${
                      msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}

            {/* Writing suggestion button */}
            {displayedMessages.length === 3 && (
              <button className="w-full flex flex-row items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors bg-white text-left">
                <span className="text-sm">Writing suggestion</span>
                <ChevronRight className="w-5 h-5 flex-shrink-0" />
              </button>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Message Lumi..."
                className="flex-1 px-4 py-2 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Mic className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Document */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
          {/* Navigation */}
          <div className="border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center gap-2 px-6 py-3">
              <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                L
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">
                  Stories / Animal Farm Character Social Media Profile Project
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Menu className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-6 px-6 text-sm border-t border-gray-100">
              <button className="pb-2 text-gray-600 hover:text-gray-900">Story steps</button>
              <button className="pb-2 text-gray-600 hover:text-gray-900">Assets</button>
            </div>
          </div>

          {/* Document Header with highlight */}
          <div className="border-b border-gray-200 p-6 flex-shrink-0 relative">
            {/* Pink highlight overlay for "Lumi AI was originally able to write entire documents" */}
            {displayedMessages.length === 3 && (
              <div className="absolute left-0 right-0 top-0 bottom-0 bg-pink-400/20 flex items-center justify-center pointer-events-none">
                <div className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Lumi AI was originally able to write entire documents for students based on a simple request
                </div>
              </div>
            )}
            <div className="flex items-center justify-between relative z-10">
              <h1 className="text-xl font-bold">Plot outline</h1>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm font-medium">
                  Share
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex gap-2 mt-4 relative z-10">
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm font-semibold">
                B
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm font-semibold italic">
                I
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm font-semibold underline">
                U
              </button>
            </div>
          </div>

          {/* Document Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-3xl">
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-gray-900">
                  {documentText}
                  {isTypingDocument && documentText.length < documentContent.length && (
                    <span className="inline-block w-0.5 h-5 bg-teal-600 animate-pulse ml-0.5" />
                  )}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
