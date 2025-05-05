import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function CanadaSmartTutors() {
  return (
    <main className="p-6 space-y-10">
      {/* Hero Section */}
      <section className="text-center">
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Canada Smart Tutors Logo"
            width={150}
            height={150}
          />
        </div>
        <h1 className="text-4xl font-bold text-blue-700 mt-4">
          Canada Smart Tutors
        </h1>
        <p className="text-lg text-gray-600 mt-2 max-w-xl mx-auto">
          Personalized tutoring for K–12 and college students across all subjects — including English.
        </p>
        <Button className="mt-4" asChild aria-label="Book a tutor now">
          <a
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Tutor
          </a>
        </Button>
      </section>

      {/* Info Cards */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-xl font-semibold">About Us</h2>
            <p>
              We connect students with experienced tutors for in-person and online learning tailored to their needs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-2">
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
          <CardContent className="space-y-2">
            <h2 className="text-xl font-semibold">Schedule a Session</h2>
            <Calendar />
            <Button className="mt-2 w-full" asChild aria-label="Open booking calendar">
              <a
                href="https://calendly.com/your-calendly-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Booking Calendar
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-4">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent>
              <blockquote className="italic text-gray-700">
                “Canada Smart Tutors helped my child improve in math dramatically in just a few weeks!”
                <cite className="block mt-2 text-sm text-gray-500">– Parent of a Grade 8 Student</cite>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <blockquote className="italic text-gray-700">
                “The college prep tutoring sessions gave me the confidence and skills I needed.”
                <cite className="block mt-2 text-sm text-gray-500">– College Student</cite>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mt-12 space-y-2">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p>Email: <a href="mailto:info@canadasmarttutors.ca" className="text-blue-600 underline">info@canadasmarttutors.ca</a></p>
        <p>Phone: <a href="tel:+15551234567" className="text-blue-600 underline">(555) 123-4567</a></p>
        <Button className="mt-4" asChild aria-label="Send a message">
          <a href="mailto:info@canadasmarttutors.ca">Send a Message</a>
        </Button>
      </section>
    </main>
  );
}
