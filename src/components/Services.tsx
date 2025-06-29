'use client';

import React from "react"; 
import { Heart,Users,Shield } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <section className="py-12 bg-gradient-to-b from-white to-sky-100" id="services">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
                Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
            service={{
              icon: Heart,
              title: "Anxiety & Stress Management",
              description:
                "Learn to manage anxious thoughts and chronic stress using evidence-based cognitive-behavioral therapy techniques. We'll work together to identify triggers, develop healthy coping strategies, and build resilience for long-term emotional well-being. Our approach combines mindfulness practices with practical tools to help you regain control over your thoughts and reactions.",
              fee: "$200 / individual session",
              image: "/images/services/anxiety-stress.jpeg"
            }}
          />
          <ServiceCard
            service={{
              icon: Users,
              title: "Relationship Counseling",
              description:
                "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection. Whether you're working through relationship challenges, rebuilding trust, or simply wanting to enhance your connection, we'll explore patterns and develop healthier ways of relating. Our couples therapy focuses on creating a safe space for both partners to be heard and understood.",
              fee: "$240 / couples session",
              image: "/images/services/relationship.jpeg"
            }}
          />
          <ServiceCard
            service={{
              icon: Shield,
              title: "Trauma Recovery",
              description:
                "Heal from past trauma in a supportive, trauma-informed environment that prioritizes your safety and comfort. We use evidence-based approaches including EMDR and somatic therapy to help you process difficult experiences and develop new ways of relating to yourself and others. Our trauma work is gentle, paced according to your needs, and focused on helping you reclaim your sense of safety and agency.",
              fee: "$200 / individual session",
              image: "/images/services/trauma-recovery.jpeg"
            }}
          />
                </div>
            </div>
        </section>
    );
}