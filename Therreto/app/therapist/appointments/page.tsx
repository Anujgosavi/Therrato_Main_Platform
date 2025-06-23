"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Video,
  Phone,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Mock data for appointments
const pendingAppointments = [
  {
    id: 1,
    patientName: "Ramesh Gupta",
    patientImage: "/placeholder.svg?height=100&width=100",
    date: "June 15, 2023",
    time: "10:00 AM",
    duration: "50 minutes",
    type: "video",
    status: "pending",
    notes: "First session - Anxiety issues",
  },
  {
    id: 2,
    patientName: "Sita Patel",
    patientImage: "/placeholder.svg?height=100&width=100",
    date: "June 16, 2023",
    time: "2:00 PM",
    duration: "50 minutes",
    type: "video",
    status: "pending",
    notes: "Follow-up session",
  },
];

const upcomingAppointments = [
  {
    id: 3,
    patientName: "Amit Mehra",
    patientImage: "/placeholder.svg?height=100&width=100",
    date: "June 18, 2023",
    time: "11:00 AM",
    duration: "50 minutes",
    type: "video",
    status: "confirmed",
    notes: "Weekly session - Depression management",
    canStart: true,
  },
  {
    id: 4,
    patientName: "Nidhi Joshi",
    patientImage: "/placeholder.svg?height=100&width=100",
    date: "June 20, 2023",
    time: "3:00 PM",
    duration: "50 minutes",
    type: "phone",
    status: "confirmed",
    notes: "Initial consultation",
    canStart: false,
  },
];

const pastAppointments = [
  {
    id: 5,
    patientName: "Vivek Sharma",
    patientImage: "/placeholder.svg?height=100&width=100",
    date: "June 1, 2023",
    time: "9:00 AM",
    duration: "50 minutes",
    type: "video",
    status: "completed",
    notes: "Weekly session",
  },
  {
    id: 6,
    patientName: "Anita Kumari",
    patientImage: "/placeholder.svg?height=100&width=100",
    date: "May 28, 2023",
    time: "1:00 PM",
    duration: "50 minutes",
    type: "video",
    status: "completed",
    notes: "Follow-up session",
  },
  {
    id: 7,
    patientName: "Rahul Verma",
    patientImage: "/placeholder.svg?height=100&width=100",
    date: "May 25, 2023",
    time: "4:00 PM",
    duration: "50 minutes",
    type: "phone",
    status: "cancelled",
    notes: "Cancelled by patient",
  },
];

export default function TherapistAppointmentsPage() {
  const [activeTab, setActiveTab] = useState("pending");
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState<
    "accept" | "reject" | "cancel" | null
  >(null);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [rejectionReason, setRejectionReason] = useState("");

  const handleAcceptAppointment = (appointment: any) => {
    setSelectedAppointment(appointment);
    setDialogAction("accept");
    setIsDialogOpen(true);
  };

  const handleRejectAppointment = (appointment: any) => {
    setSelectedAppointment(appointment);
    setDialogAction("reject");
    setRejectionReason("");
    setIsDialogOpen(true);
  };

  const handleCancelAppointment = (appointment: any) => {
    setSelectedAppointment(appointment);
    setDialogAction("cancel");
    setRejectionReason("");
    setIsDialogOpen(true);
  };

  const handleStartSession = (appointmentId: number) => {
    // In a real app, this would redirect to the video call page
    window.open("/therapist/session", "_blank");
  };

  const handleConfirmDialog = () => {
    if (!selectedAppointment) return;

    if (dialogAction === "accept") {
      toast({
        title: "Appointment Accepted",
        description: `You have accepted the appointment with ${selectedAppointment.patientName}.`,
      });
    } else if (dialogAction === "reject") {
      toast({
        title: "Appointment Rejected",
        description: `You have rejected the appointment with ${selectedAppointment.patientName}.`,
      });
    } else if (dialogAction === "cancel") {
      toast({
        title: "Appointment Cancelled",
        description: `You have cancelled the appointment with ${selectedAppointment.patientName}.`,
      });
    }

    setIsDialogOpen(false);
    setSelectedAppointment(null);
    setDialogAction(null);
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "confirmed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "completed":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "cancelled":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Manage Appointments</h1>
        <p className="text-gray-600">
          View and manage your upcoming and past therapy sessions.
        </p>
      </div>

      <Tabs defaultValue="pending" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="pending">Pending Requests</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-6">
          {pendingAppointments.length > 0 ? (
            pendingAppointments.map((appointment) => (
              <Card key={appointment.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 bg-gray-50 p-6 flex flex-col justify-center items-center md:items-start">
                      <div className="flex items-center mb-4 md:mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                          <img
                            src={appointment.patientImage || "/placeholder.svg"}
                            alt={appointment.patientName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            {appointment.patientName}
                          </h3>
                          <p className="text-sm text-gray-500">Patient</p>
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
                          variant="outline"
                          className={getStatusBadgeVariant(appointment.status)}
                        >
                          Pending Approval
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">
                            Patient Notes
                          </h4>
                          <p className="text-sm text-gray-600">
                            {appointment.notes}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-1">
                            Action Required
                          </h4>
                          <p className="text-sm text-gray-600">
                            Please accept or reject this appointment request.
                            The patient will be notified of your decision.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 p-4 flex justify-end gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleRejectAppointment(appointment)}
                    className="border-red-200 text-red-600 hover:bg-red-50"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                  <Button
                    onClick={() => handleAcceptAppointment(appointment)}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Accept
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                You don't have any pending appointment requests.
              </p>
            </div>
          )}
        </TabsContent>

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
                            src={appointment.patientImage || "/placeholder.svg"}
                            alt={appointment.patientName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            {appointment.patientName}
                          </h3>
                          <p className="text-sm text-gray-500">Patient</p>
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
                          variant="outline"
                          className={getStatusBadgeVariant(appointment.status)}
                        >
                          Confirmed
                        </Badge>

                        {appointment.canStart && (
                          <Button
                            onClick={() => handleStartSession(appointment.id)}
                            className="bg-emerald-600 hover:bg-emerald-700"
                          >
                            Start Session
                          </Button>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">
                            Session Notes
                          </h4>
                          <p className="text-sm text-gray-600">
                            {appointment.notes}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-1">
                            Preparation
                          </h4>
                          <p className="text-sm text-gray-600">
                            Please be ready 5 minutes before the scheduled time.
                            Ensure you have a quiet, private space and a stable
                            internet connection for the best experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 p-4 flex justify-end gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleCancelAppointment(appointment)}
                    className="border-red-200 text-red-600 hover:bg-red-50"
                  >
                    Cancel Session
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                You don't have any upcoming appointments.
              </p>
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
                          src={appointment.patientImage || "/placeholder.svg"}
                          alt={appointment.patientName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">
                          {appointment.patientName}
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
                      <Badge
                        variant="outline"
                        className={getStatusBadgeVariant(appointment.status)}
                      >
                        {appointment.status === "cancelled"
                          ? "Cancelled"
                          : "Completed"}
                      </Badge>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {dialogAction === "accept"
                ? "Accept Appointment"
                : dialogAction === "reject"
                ? "Reject Appointment"
                : "Cancel Appointment"}
            </DialogTitle>
            <DialogDescription>
              {dialogAction === "accept"
                ? "Are you sure you want to accept this appointment?"
                : dialogAction === "reject"
                ? "Please provide a reason for rejecting this appointment."
                : "Please provide a reason for cancelling this appointment."}
            </DialogDescription>
          </DialogHeader>

          {(dialogAction === "reject" || dialogAction === "cancel") && (
            <div className="space-y-2">
              <Label htmlFor="reason">Reason</Label>
              <Textarea
                id="reason"
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder={
                  dialogAction === "reject"
                    ? "Please provide a reason for rejecting this appointment..."
                    : "Please provide a reason for cancelling this appointment..."
                }
                className="min-h-[100px]"
              />
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleConfirmDialog}
              className={
                dialogAction === "accept"
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-red-600 hover:bg-red-700"
              }
              disabled={
                (dialogAction === "reject" || dialogAction === "cancel") &&
                !rejectionReason.trim()
              }
            >
              {dialogAction === "accept"
                ? "Accept"
                : dialogAction === "reject"
                ? "Reject"
                : "Cancel Appointment"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
