"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  MessageSquare,
  FileText,
  Clock,
  Maximize,
  Minimize,
  Share,
  Settings,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Mock session data
const sessionData = {
  id: "session-123",
  patient: {
    id: "patient-456",
    name: "John Smith",
    image: "/placeholder.svg?height=100&width=100",
  },
  date: "June 15, 2023",
  time: "10:00 AM",
  duration: "50 minutes",
  type: "video",
  notes: "First session - Anxiety issues",
}

export default function TherapistSessionPage() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [sessionNotes, setSessionNotes] = useState("")
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isSessionEnded, setIsSessionEnded] = useState(false)
  const { toast } = useToast()

  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)

  // Timer for session duration
  useEffect(() => {
    if (isSessionEnded) return

    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [isSessionEnded])

  // Format elapsed time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Toggle audio
  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled)
    // In a real app, this would toggle the audio track
    toast({
      title: isAudioEnabled ? "Microphone disabled" : "Microphone enabled",
      duration: 2000,
    })
  }

  // Toggle video
  const toggleVideo = () => {
    setIsVideoEnabled(!isVideoEnabled)
    // In a real app, this would toggle the video track
    toast({
      title: isVideoEnabled ? "Camera disabled" : "Camera enabled",
      duration: 2000,
    })
  }

  // Toggle fullscreen
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
    // In a real app, this would toggle fullscreen mode
  }

  // End session
  const endSession = () => {
    setIsSessionEnded(true)
    toast({
      title: "Session Ended",
      description: "The session has been ended. You can now save your notes.",
    })
  }

  // Save session notes
  const saveNotes = () => {
    // In a real app, this would save the notes to the backend
    toast({
      title: "Notes Saved",
      description: "Your session notes have been saved successfully.",
    })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        {!isSessionEnded ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main video area */}
            <div className="lg:col-span-2">
              <div className="bg-black rounded-lg overflow-hidden relative">
                {/* Remote video (patient) */}
                <div className="aspect-video w-full bg-gray-800 flex items-center justify-center">
                  {isVideoEnabled ? (
                    <video ref={remoteVideoRef} className="w-full h-full object-cover" autoPlay playsInline />
                  ) : (
                    <div className="text-center text-white">
                      <Avatar className="h-24 w-24 mx-auto mb-4">
                        <AvatarImage
                          src={sessionData.patient.image || "/placeholder.svg"}
                          alt={sessionData.patient.name}
                        />
                        <AvatarFallback>{sessionData.patient.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="text-xl">{sessionData.patient.name}</p>
                      <p className="text-gray-400">Video is disabled</p>
                    </div>
                  )}
                </div>

                {/* Local video (therapist) - small overlay */}
                <div className="absolute bottom-4 right-4 w-1/4 aspect-video bg-gray-700 rounded-lg overflow-hidden border-2 border-white">
                  {isVideoEnabled ? (
                    <video ref={localVideoRef} className="w-full h-full object-cover" autoPlay playsInline muted />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <VideoOff className="h-6 w-6" />
                    </div>
                  )}
                </div>

                {/* Session info overlay */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <Badge variant="outline" className="bg-black/50 text-white border-none">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatTime(elapsedTime)}
                  </Badge>
                </div>
              </div>

              {/* Video controls */}
              <div className="bg-white rounded-lg mt-4 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleAudio}
                    className={!isAudioEnabled ? "bg-red-100 text-red-600 border-red-200" : ""}
                  >
                    {isAudioEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleVideo}
                    className={!isVideoEnabled ? "bg-red-100 text-red-600 border-red-200" : ""}
                  >
                    {isVideoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <Share className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={toggleFullScreen}>
                    {isFullScreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="h-5 w-5" />
                  </Button>
                  <Button variant="destructive" onClick={endSession}>
                    <Phone className="h-5 w-5 mr-2 rotate-135" />
                    End Session
                  </Button>
                </div>
              </div>
            </div>

            {/* Side panel */}
            <div>
              <Card className="h-full">
                <Tabs defaultValue="notes">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="notes">
                      <FileText className="h-4 w-4 mr-2" />
                      Notes
                    </TabsTrigger>
                    <TabsTrigger value="chat">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Chat
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="notes" className="p-4">
                    <div className="mb-4">
                      <h3 className="font-medium mb-1">Session Information</h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Patient: {sessionData.patient.name}</p>
                        <p>Date: {sessionData.date}</p>
                        <p>Time: {sessionData.time}</p>
                        <p>Duration: {sessionData.duration}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-1">Previous Notes</h3>
                      <p className="text-sm text-gray-600">{sessionData.notes}</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-1">Session Notes</h3>
                      <Textarea
                        value={sessionNotes}
                        onChange={(e) => setSessionNotes(e.target.value)}
                        placeholder="Type your session notes here..."
                        className="min-h-[200px]"
                      />
                      <Button onClick={saveNotes} className="mt-2 bg-emerald-600 hover:bg-emerald-700">
                        Save Notes
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="chat" className="p-4">
                    <div className="h-[400px] flex items-center justify-center text-gray-500">
                      <p>Chat functionality would be implemented here.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </div>
        ) : (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Session Ended</h2>
                <p className="text-gray-600">Your session with {sessionData.patient.name} has ended.</p>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Session Summary</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500">Patient:</p>
                      <p>{sessionData.patient.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Date:</p>
                      <p>{sessionData.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Time:</p>
                      <p>{sessionData.time}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Duration:</p>
                      <p>
                        {formatTime(elapsedTime)} / {sessionData.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Session Notes</h3>
                <Textarea
                  value={sessionNotes}
                  onChange={(e) => setSessionNotes(e.target.value)}
                  placeholder="Type your session notes here..."
                  className="min-h-[200px]"
                />
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => window.close()}>
                  Close Window
                </Button>
                <Button onClick={saveNotes} className="bg-emerald-600 hover:bg-emerald-700">
                  Save Notes & Finish
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
