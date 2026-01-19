'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Anxiety Management Client",
    content: "Dr. Blake has been instrumental in helping me manage my anxiety. Her compassionate approach and evidence-based techniques have given me tools I use every day. I feel more confident and in control of my life.",
    rating: 5
  },
  {
    name: "James & Emily R.",
    role: "Couples Therapy Clients",
    content: "Our relationship was struggling, but Dr. Blake's guidance helped us rediscover our connection. Her couples therapy sessions gave us the communication skills we needed. We're now stronger than ever.",
    rating: 5
  },
  {
    name: "Michael T.",
    role: "Trauma Recovery Client",
    content: "Working through my trauma with Dr. Blake has been life-changing. She created a safe space where I could heal at my own pace. I'm grateful for her expertise and genuine care.",
    rating: 5
  },
  {
    name: "Lisa K.",
    role: "Virtual Session Client",
    content: "The virtual sessions via Zoom are just as effective as in-person. Dr. Blake makes the online format feel personal and comfortable. Her flexibility has made therapy accessible for my busy schedule.",
    rating: 5
  },
  {
    name: "David P.",
    role: "Stress Management Client",
    content: "Dr. Blake's mindfulness techniques have transformed how I handle work stress. She's professional, knowledgeable, and truly invested in my well-being. I highly recommend her services.",
    rating: 5
  },
  {
    name: "Rachel & Tom W.",
    role: "Relationship Counseling Clients",
    content: "Dr. Blake helped us navigate some really difficult times in our marriage. Her insights and practical strategies have made a lasting impact. We can't thank her enough for saving our relationship.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-indigo-600 mb-4 text-center">
          Client Testimonials
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hear from clients who have experienced positive transformation through therapy
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-10 h-10 text-indigo-200" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-amber-400 text-amber-400" 
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-indigo-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to start your journey to better mental health?
          </p>
          <a 
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
