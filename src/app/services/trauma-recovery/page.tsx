'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, ArrowLeft, CheckCircle, Clock, DollarSign, Calendar, Heart, Brain } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

export default function TraumaRecoveryPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/#services" className="inline-flex items-center text-white mb-6 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-12 h-12 text-white" />
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Trauma Recovery
                  </h1>
                </div>
                <p className="text-xl text-white/90 mb-6">
                  Heal from past trauma in a safe, compassionate environment with specialized, evidence-based approaches.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="w-5 h-5" />
                    <span>60-90 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <DollarSign className="w-5 h-5" />
                    <span>$200 per session</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/trauma-recovery.jpeg"
                  alt="Trauma Recovery"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Overview Section */}
      <ScrollReveal>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">A Path to Healing</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Trauma can leave lasting imprints on your mind, body, and sense of self. Whether you&apos;ve experienced 
                a single traumatic event or ongoing trauma, the effects can manifest as flashbacks, nightmares, 
                hypervigilance, emotional numbness, difficulty trusting others, or feeling disconnected from yourself.
              </p>
              <p>
                My trauma-informed approach prioritizes your safety, pacing, and sense of control throughout the 
                healing process. Using specialized techniques including EMDR (Eye Movement Desensitization and 
                Reprocessing) and somatic therapy, we&apos;ll work together to process difficult memories, release trapped 
                trauma from your body, and help you reclaim your sense of safety and wholeness. Healing from trauma is 
                possible, and you don&apos;t have to face it alone.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What Trauma Work Addresses Section */}
      <ScrollReveal delay={0.3}>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 mb-8">What Trauma Work Can Help With</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Processing traumatic memories safely',
                'Reducing flashbacks and nightmares',
                'Managing triggers and emotional reactivity',
                'Rebuilding sense of safety and trust',
                'Releasing trauma stored in the body',
                'Addressing PTSD and complex trauma',
                'Healing from childhood trauma',
                'Recovering from abuse or assault'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Approach Section */}
      <ScrollReveal delay={0.4}>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">My Trauma-Informed Approach</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="w-8 h-8 text-teal-600" />
                  <h3 className="text-xl font-semibold text-gray-800">EMDR Therapy</h3>
                </div>
                <p className="text-gray-700">
                  EMDR is a powerful, evidence-based approach that helps your brain reprocess traumatic memories. 
                  Through bilateral stimulation (typically eye movements), we help your nervous system complete the 
                  processing of traumatic experiences, reducing their emotional charge and allowing for adaptive 
                  resolution. EMDR has been extensively researched and is recommended by the WHO for trauma treatment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-8 h-8 text-teal-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Somatic Therapy</h3>
                </div>
                <p className="text-gray-700">
                  Trauma lives in the body, not just the mind. Through somatic experiencing and body-based techniques, 
                  we'll help you release stored trauma, restore your connection to physical sensations, and rebuild 
                  your sense of embodiment. You'll learn to listen to your body's signals and use them as a resource 
                  for healing and regulation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-teal-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Safety & Stabilization First</h3>
                </div>
                <p className="text-gray-700">
                  Before diving into trauma processing, we establish a foundation of safety and coping skills. This 
                  includes grounding techniques, emotional regulation strategies, and creating internal and external 
                  resources. You're always in control of the pace, and we only move forward when you feel ready. 
                  This phased approach ensures sustainable healing without re-traumatization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Types of Trauma Section */}
      <ScrollReveal delay={0.5}>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">Types of Trauma I Work With</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Single-Incident Trauma</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Accidents or injuries</li>
                  <li>• Natural disasters</li>
                  <li>• Medical trauma</li>
                  <li>• Sudden loss or death</li>
                  <li>• Assault or violence</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Complex Trauma</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Childhood abuse or neglect</li>
                  <li>• Domestic violence</li>
                  <li>• Ongoing emotional abuse</li>
                  <li>• Attachment trauma</li>
                  <li>• Developmental trauma</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">PTSD</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Intrusive memories</li>
                  <li>• Avoidance behaviors</li>
                  <li>• Hypervigilance</li>
                  <li>• Negative mood changes</li>
                  <li>• Sleep disturbances</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Vicarious Trauma</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• First responders</li>
                  <li>• Healthcare workers</li>
                  <li>• Therapists & counselors</li>
                  <li>• Caregivers</li>
                  <li>• Witness to trauma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What to Expect Section */}
      <ScrollReveal delay={0.6}>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">What to Expect in Trauma Therapy</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 1: Safety & Stabilization (3-6 sessions)</h3>
                <p className="text-gray-700">
                  We&apos;ll focus on building coping skills, establishing safety, and creating resources before addressing 
                  traumatic memories. You&apos;ll learn grounding techniques and emotional regulation strategies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 2: Processing & Integration (Ongoing)</h3>
                <p className="text-gray-700">
                  Using EMDR or other trauma processing techniques, we&apos;ll work through traumatic memories at your pace. 
                  This phase is about releasing trapped emotions and reprocessing memories so they no longer overwhelm you.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 3: Integration & Growth (Final sessions)</h3>
                <p className="text-gray-700">
                  We&apos;ll focus on integrating your healing, building resilience, and helping you move forward with 
                  confidence. You&apos;ll develop a sustainable self-care plan and identify early warning signs.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-teal-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Important Note:</strong> Trauma therapy is not linear, and everyone heals at their own pace. 
                Some people see significant improvement in months, while others may need longer-term support. What 
                matters most is that you feel safe, supported, and empowered throughout the process.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Safety & Support Section */}
      <ScrollReveal delay={0.7}>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">Your Safety is My Priority</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Trauma therapy requires a foundation of trust and safety. Here&apos;s what I offer:
              </p>
              <ul className="space-y-3">
                <li>
                  <strong>You&apos;re in control:</strong> You set the pace, choose what to work on, and can pause or stop at any time.
                </li>
                <li>
                  <strong>No pressure to share:</strong> You never have to describe traumatic details unless you choose to.
                </li>
                <li>
                  <strong>Specialized training:</strong> I&apos;m trained in trauma-specific modalities and maintain ongoing education in trauma treatment.
                </li>
                <li>
                  <strong>Cultural sensitivity:</strong> I recognize that trauma impacts different communities uniquely and approach each person's experience with cultural humility.
                </li>
                <li>
                  <strong>Between-session support:</strong> I&apos;ll provide resources and tools you can use when difficult feelings arise outside of therapy.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal delay={0.8}>
        <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Begin Your Healing Journey</h2>
            <p className="text-xl text-white/90 mb-8">
              You deserve to heal from the past and reclaim your sense of peace. Take the first step today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Session
                </Button>
              </Link>
              <Link href="/#services">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-600 transition-all">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
