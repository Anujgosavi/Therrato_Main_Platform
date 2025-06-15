"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Clock } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

interface BookingFormProps {
  therapistId: string
}

// Mock available time slots
const availableTimeSlots = [
  { id: "1", time: "9:00 AM", available: true },
  { id: "2", time: "10:00 AM", available: true },
  { id: "3", time: "11:00 AM", available: false },
  { id: "4", time: "1:00 PM", available: true },
  { id: "5", time: "2:00 PM", available: true },
  { id: "6", time: "3:00 PM", available: false },
  { id: "7", time: "4:00 PM", available: true },
]

export default function BookingForm({ therapistId }: BookingFormProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)
  const [step, setStep] = useState(1)
  const { toast } = useToast()
  const router = useRouter()

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
  }

  const handleTimeSelect = (timeId: string) => {
    setSelectedTimeSlot(timeId)
  }

  const handleContinue = () => {
    if (!date) {
      toast({
        title: "Please select a date",
        description: "You need to select a date for your appointment.",
        variant: "destructive",
      })
      return
    }

    if (!selectedTimeSlot) {
      toast({
        title: "Please select a time",
        description: "You need to select a time slot for your appointment.",
        variant: "destructive",
      })
      return
    }

    setStep(2)
  }

  const handleBooking = () => {
    // In a real app, this would make an API call to book the appointment
    toast({
      title: "Appointment Booked!",
      description: `Your appointment has been scheduled for ${date?.toLocaleDateString()} at ${availableTimeSlots.find((slot) => slot.id === selectedTimeSlot)?.time}.`,
    })

    // Redirect to appointments page
    router.push("/appointments")
  }

  return (
    <div>
      {step === 1 ? (
        <>
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Select Date</h3>
            <div className="border rounded-md p-2">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                className="w-full"
                disabled={(date) => {
                  // Disable weekends and past dates
                  const day = date.getDay()
                  return date < new Date(new Date().setHours(0, 0, 0, 0)) || day === 0 || day === 6
                }}
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Select Time</h3>
            <div className="grid grid-cols-2 gap-2">
              {availableTimeSlots.map((slot) => (
                <Button
                  key={slot.id}
                  variant={selectedTimeSlot === slot.id ? "default" : "outline"}
                  className={`justify-start ${selectedTimeSlot === slot.id ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}
                  disabled={!slot.available}
                  onClick={() => handleTimeSelect(slot.id)}
                >
                  <Clock className="h-4 w-4 mr-2" />
                  {slot.time}
                </Button>
              ))}
            </div>
          </div>

          <Button onClick={handleContinue} className="w-full bg-emerald-600 hover:bg-emerald-700">
            Continue
          </Button>
        </>
      ) : (
        <>
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Appointment Summary</h3>
            <Card className="p-4 bg-gray-50">
              <div className="flex items-center mb-2">
                <CalendarIcon className="h-4 w-4 mr-2 text-emerald-600" />
                <span>{date?.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-emerald-600" />
                <span>{availableTimeSlots.find((slot) => slot.id === selectedTimeSlot)?.time}</span>
              </div>
            </Card>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Session Type</h3>
            <RadioGroup defaultValue="video">
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="video" id="video" />
                <Label htmlFor="video">Video Session</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone" />
                <Label htmlFor="phone">Phone Session</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Payment</h3>
            <Card className="p-4 bg-gray-50">
              <div className="flex justify-between mb-2">
                <span>Session Fee</span>
                <span>$85.00</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>$85.00</span>
              </div>
            </Card>
            <p className="text-xs text-gray-500 mt-2">Payment will be processed securely after booking confirmation.</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
              Back
            </Button>
            <Button onClick={handleBooking} className="flex-1 bg-emerald-600 hover:bg-emerald-700">
              Book Session
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
