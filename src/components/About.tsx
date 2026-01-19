'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-sky-50 py-20" id="about">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center py-4">
          <div className="relative w-full max-w-sm aspect-[3/4]">
            <Image
              src="/images/serena.avif"
              alt="Portrait of Dr. Serena Blake, a Clinical Psychologist"
              fill
              className="rounded-3xl shadow-2xl object-cover object-center border border-gray-200"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-extrabold text-indigo-600 mb-6">
            Meet Dr. Serena Blake
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-indigo-500 mt-1" size={20} />
              <p>
                <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="text-indigo-500 mt-1" size={20} />
              <div>
                <p><strong>Office Hours:</strong></p>
                <p className="pl-2">In-person: Tue & Thu, 10 AM–6 PM</p>
                <p className="pl-2">Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-indigo-500 mt-1" size={20} />
              <p><strong>Phone:</strong> (323) 555-0192</p>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-indigo-500 mt-1" size={20} />
              <p><strong>Email:</strong> serena@blakepsychology.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
