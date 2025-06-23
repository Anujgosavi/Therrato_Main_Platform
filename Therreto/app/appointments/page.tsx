"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, Phone, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

// Mock data for appointments
const upcomingAppointments = [
  {
    id: 1,
    therapistName: "Dr. Kavita Sharma",
    therapistImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/therapist-1.jpg-QmL8eBPTMftimvTdtRaUiPMwUz4Spi.png",
    date: "June 15, 2023",
    time: "10:00 AM",
    duration: "50 minutes",
    type: "video",
    status: "confirmed",
    canJoin: true,
  },
  {
    id: 2,
    therapistName: "Dr. Rajiv Gupta",
    therapistImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/therapist-2.jpg-e8xyOHUgV9D2Z3zxzI9AYhuHnJAAIs.png",
    date: "June 22, 2023",
    time: "2:00 PM",
    duration: "50 minutes",
    type: "video",
    status: "confirmed",
    canJoin: false,
  },
];

const pastAppointments = [
  {
    id: 3,
    therapistName: "Dr. Kavita Sharma",
    therapistImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/therapist-1.jpg-QmL8eBPTMftimvTdtRaUiPMwUz4Spi.png",
    date: "June 1, 2023",
    time: "10:00 AM",
    duration: "50 minutes",
    type: "video",
    status: "completed",
  },
  {
    id: 4,
    therapistName: "Dr. Kavita Sharma",
    therapistImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/therapist-1.jpg-QmL8eBPTMftimvTdtRaUiPMwUz4Spi.png",
    date: "May 18, 2023",
    time: "10:00 AM",
    duration: "50 minutes",
    type: "phone",
    status: "completed",
  },
  {
    id: 5,
    therapistName: "Dr. Rajiv Gupta",
    therapistImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/therapist-2.jpg-e8xyOHUgV9D2Z3zxzI9AYhuHnJAAIs.png",
    date: "May 4, 2023",
    time: "2:00 PM",
    duration: "50 minutes",
    type: "video",
    status: "completed",
  },
];

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { toast } = useToast();

  const handleCancelAppointment = (appointmentId: number) => {
    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been cancelled successfully.",
    });
  };

  const handleRescheduleAppointment = (appointmentId: number) => {
    // In a real app, this would open a reschedule modal or redirect to a reschedule page
    toast({
      title: "Reschedule Appointment",
      description: "Redirecting to reschedule page...",
    });
  };

  const handleJoinSession = (appointmentId: number) => {
    // In a real app, this would redirect to the video call page
    window.open("/session", "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Appointments</h1>
        <p className="text-gray-600">
          Manage your upcoming and past therapy sessions.
        </p>
      </div>

      <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment) => (
              <Card key={appointment.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 bg-gray-50 p-6 flex flex-col justify-center items-center md:items-start">
                      <div className="flex items-center mb-4 md:mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                          <img
                            src={
                              appointment.therapistImage || "/placeholder.svg"
                            }
                            alt={appointment.therapistName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            {appointment.therapistName}
                          </h3>
                          <Link
                            href={`/therapists/${appointment.id}`}
                            className="text-sm text-emerald-600 hover:text-emerald-700"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>

                      <div className="space-y-2 w-full">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="text-sm">{appointment.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="text-sm">
                            {appointment.time} ({appointment.duration})
                          </span>
                        </div>
                        <div className="flex items-center">
                          {appointment.type === "video" ? (
                            <Video className="h-4 w-4 mr-2 text-gray-500" />
                          ) : (
                            <Phone className="h-4 w-4 mr-2 text-gray-500" />
                          )}
                          <span className="text-sm capitalize">
                            {appointment.type} Session
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-3/4 p-6">
                      <div className="flex justify-between items-start mb-6">
                        <Badge
                          variant={
                            appointment.status === "confirmed"
                              ? "outline"
                              : "secondary"
                          }
                          className="bg-emerald-50 text-emerald-700 capitalize"
                        >
                          {appointment.status}
                        </Badge>

                        {appointment.canJoin && (
                          <Button
                            onClick={() => handleJoinSession(appointment.id)}
                            className="bg-emerald-600 hover:bg-emerald-700"
                          >
                            Join Now
                          </Button>
                        )}
                      </div>

                      {appointment.canJoin && (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-md p-4 mb-6 flex items-start">
                          <AlertCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-emerald-800">
                              Your session starts soon
                            </p>
                            <p className="text-sm text-emerald-700">
                              You can join the session 5 minutes before the
                              scheduled time.
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">
                            Session Notes
                          </h4>
                          <p className="text-sm text-gray-600">
                            Please be ready 5 minutes before your scheduled
                            time. Ensure you have a quiet, private space and a
                            stable internet connection for the best experience.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-1">
                            Cancellation Policy
                          </h4>
                          <p className="text-sm text-gray-600">
                            You can reschedule or cancel your appointment up to
                            24 hours before the scheduled time without any
                            charges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 p-4 flex justify-end gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleCancelAppointment(appointment.id)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleRescheduleAppointment(appointment.id)}
                  >
                    Reschedule
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                You don't have any upcoming appointments.
              </p>
              <Link href="/therapists">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Find a Therapist
                </Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-6">
          {pastAppointments.length > 0 ? (
            pastAppointments.map((appointment) => (
              <Card key={appointment.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img
                          src={appointment.therapistImage || "/placeholder.svg"}
                          alt={appointment.therapistName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">
                          {appointment.therapistName}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {appointment.date}, {appointment.time}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-4 capitalize">
                        {appointment.status}
                      </Badge>
                      <Link href={`/therapists/${appointment.id}`}>
                        <Button variant="outline" size="sm">
                          Book Again
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                You don't have any past appointments.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
