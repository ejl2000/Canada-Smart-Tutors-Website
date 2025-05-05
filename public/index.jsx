import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function CanadaSmartTutors() {
  return (
    <main className="p-6 space-y-8">
      <section className="text-center">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Canada Smart Tutors Logo" width={150} height={150} />
        </div>
        <h1 className="text-4xl font-bold text-blue-700 mt-4">Canada Smart Tutors</h1>
        <p className="text-lg text-gray-600 mt-2">
          Personalized tutoring for K–12 and college students across all subjects — including English.
        </p>
        <Button className="mt-4" asChild>
          <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer">
            Book a Tutor
          </a>
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">About Us</h2>
            <p>
              We connect students with experienced tutors for in-person and online learning tailored to their needs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Subjects Offered</h2>
            <ul className="list-disc list-inside">
              <li>Mathematics</li>
              <li>Science</li>
              <li>English</li>
              <li>Test Preparation (SAT, ACT, etc.)</li>
              <li>Homework Help</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Schedule a Session</h2>
            <Calendar />
            <Button className="mt-2 w-full" asChild>
              <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer">
                Open Booking Calendar
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-center mb-4">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent>
              "Canada Smart Tutors helped my child improve in math dramatically in just a few weeks!"
              <br />– Parent of a Grade 8 Student
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              "The college prep tutoring sessions gave me the confidence and skills I needed."
              <br />– College Student
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p>Email: info@canadasmarttutors.ca | Phone: (555) 123-4567</p>
        <Button className="mt-4">Send a Message</Button>
      </section>
    </main>
  );
}