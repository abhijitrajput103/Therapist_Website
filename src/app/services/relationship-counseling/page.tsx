'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, ArrowLeft, CheckCircle, Clock, DollarSign, Calendar, Heart } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

export default function RelationshipCounselingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative py-20 bg-gradient-to-r from-pink-600 to-rose-600">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/#services" className="inline-flex items-center text-white mb-6 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-12 h-12 text-white" />
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Relationship Counseling
                  </h1>
                </div>
                <p className="text-xl text-white/90 mb-6">
                  Build stronger, healthier relationships through improved communication, trust, and emotional connection.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="w-5 h-5" />
                    <span>60-75 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <DollarSign className="w-5 h-5" />
                    <span>$240 per session</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/relationship.jpeg"
                  alt="Relationship Counseling"
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
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">Strengthen Your Connection</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Every relationship faces challenges. Whether you&apos;re dealing with communication breakdowns, trust issues, 
                intimacy concerns, or simply feeling disconnected from your partner, relationship counseling provides 
                a safe space to work through these difficulties together.
              </p>
              <p>
                My approach to couples therapy is centered on creating a non-judgmental environment where both partners 
                feel heard and validated. Through evidence-based techniques like the Gottman Method and Emotionally 
                Focused Therapy (EFT), we&apos;ll explore patterns in your relationship, improve communication skills, and 
                rebuild emotional intimacy. Whether you&apos;re navigating a specific crisis or simply want to strengthen 
                your bond, therapy can help you create a more fulfilling partnership.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What You'll Work On Section */}
      <ScrollReveal delay={0.3}>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 mb-8">What We'll Work On Together</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Effective communication and active listening',
                'Conflict resolution and fair fighting',
                'Rebuilding trust and emotional safety',
                'Intimacy and emotional connection',
                'Understanding each other&apos;s needs and values',
                'Managing differences and finding compromise',
                'Breaking negative interaction patterns',
                'Creating shared goals and vision for the future'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
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
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">My Approach</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">The Gottman Method</h3>
                <p className="text-gray-700">
                  Based on over 40 years of research, the Gottman Method focuses on building friendship, managing 
                  conflict constructively, and creating shared meaning in your relationship. I&apos;ll teach you practical 
                  tools to enhance fondness and admiration, turn towards each other instead of away, and navigate 
                  disagreements without damaging your connection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Emotionally Focused Therapy (EFT)</h3>
                <p className="text-gray-700">
                  EFT helps couples understand the emotional undercurrents driving their conflicts. We&apos;ll explore 
                  attachment needs, identify negative cycles that keep you stuck, and create new patterns of emotional 
                  responsiveness. This approach is particularly effective for couples dealing with trust issues or 
                  emotional disconnection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Impartial & Balanced Facilitation</h3>
                <p className="text-gray-700">
                  I create a neutral space where both partners feel equally heard and valued. My role is not to take 
                  sides but to help you understand each other&apos;s perspectives, recognize patterns, and develop healthier 
                  ways of relating. Sessions are structured to ensure both voices are heard and both perspectives are 
                  honored.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Issues We Address Section */}
      <ScrollReveal delay={0.5}>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">Common Relationship Issues We Address</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-rose-600" />
                  Communication Problems
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Frequent misunderstandings</li>
                  <li>• Defensive or critical communication</li>
                  <li>• Difficulty expressing needs</li>
                  <li>• Stonewalling or withdrawal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-rose-600" />
                  Trust & Infidelity
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Recovering from betrayal</li>
                  <li>• Rebuilding trust</li>
                  <li>• Emotional affairs</li>
                  <li>• Jealousy and insecurity</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-rose-600" />
                  Intimacy Issues
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Emotional disconnection</li>
                  <li>• Sexual incompatibility</li>
                  <li>• Loss of romance</li>
                  <li>• Difficulty with vulnerability</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-rose-600" />
                  Life Transitions
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Parenting challenges</li>
                  <li>• Career changes</li>
                  <li>• Financial stress</li>
                  <li>• Major life decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Format Section */}
      <ScrollReveal delay={0.6}>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">Session Format</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                Couples sessions typically run 60-75 minutes and follow a structured yet flexible format:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-indigo-600 flex-shrink-0">1.</span>
                  <span><strong>Check-in:</strong> We'll start by discussing what's been happening since our last session and any pressing issues.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-indigo-600 flex-shrink-0">2.</span>
                  <span><strong>Focused work:</strong> We'll dive into specific topics or skills, with both partners actively participating.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-indigo-600 flex-shrink-0">3.</span>
                  <span><strong>Practice:</strong> You'll have opportunities to practice new communication skills in session with my guidance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-indigo-600 flex-shrink-0">4.</span>
                  <span><strong>Homework:</strong> I'll suggest exercises or practices to continue your growth between sessions.</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-6">
                Individual sessions may also be scheduled as needed to address personal issues that impact the relationship.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal delay={0.7}>
        <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Strengthen Your Relationship?</h2>
            <p className="text-xl text-white/90 mb-8">
              Take the first step toward a healthier, more connected partnership. Schedule your couples session today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Session
                </Button>
              </Link>
              <Link href="/#services">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-pink-600 transition-all">
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
