'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowLeft, CheckCircle, Clock, DollarSign, Calendar } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

export default function AnxietyStressManagementPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/#services" className="inline-flex items-center text-white mb-6 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-12 h-12 text-white" />
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Anxiety & Stress Management
                  </h1>
                </div>
                <p className="text-xl text-white/90 mb-6">
                  Reclaim your peace of mind with evidence-based strategies for managing anxiety and chronic stress.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="w-5 h-5" />
                    <span>50-60 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <DollarSign className="w-5 h-5" />
                    <span>$200 per session</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/anxiety-stress.jpeg"
                  alt="Anxiety & Stress Management"
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
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">Understanding Anxiety & Stress</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Anxiety and chronic stress affect millions of people, manifesting as persistent worry, physical tension, 
                racing thoughts, and a sense of being overwhelmed. These conditions can significantly impact your daily 
                life, relationships, and overall well-being.
              </p>
              <p>
                Through our evidence-based approach, you'll learn to understand the root causes of your anxiety, 
                recognize your unique triggers, and develop practical tools to manage anxious thoughts and physical 
                symptoms. My approach combines cognitive-behavioral therapy (CBT), mindfulness techniques, and 
                personalized coping strategies tailored to your specific needs.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What You'll Learn Section */}
      <ScrollReveal delay={0.3}>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 mb-8">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Identify and challenge anxious thought patterns',
                'Practice evidence-based relaxation techniques',
                'Develop healthy coping mechanisms for stress',
                'Build resilience and emotional regulation skills',
                'Create a personalized anxiety management plan',
                'Improve sleep quality and daily functioning',
                'Manage panic attacks and acute anxiety episodes',
                'Establish sustainable self-care routines'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
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
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cognitive-Behavioral Therapy (CBT)</h3>
                <p className="text-gray-700">
                  CBT is one of the most effective treatments for anxiety. We'll work together to identify negative 
                  thought patterns and replace them with more balanced, realistic perspectives. You'll learn practical 
                  techniques to challenge anxious thoughts and change unhelpful behaviors.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Mindfulness & Relaxation</h3>
                <p className="text-gray-700">
                  Through mindfulness practices, progressive muscle relaxation, and breathing exercises, you&apos;ll learn 
                  to ground yourself in the present moment and reduce physical symptoms of anxiety. These techniques 
                  can be used anywhere, anytime you need them.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalized Coping Strategies</h3>
                <p className="text-gray-700">
                  Everyone&apos;s experience with anxiety is unique. I&apos;ll help you develop a customized toolkit of coping 
                  strategies that work specifically for you, your lifestyle, and your triggers. We&apos;ll practice these 
                  skills together until you feel confident using them independently.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Who This Is For Section */}
      <ScrollReveal delay={0.5}>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">Who This Is For</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>This service is ideal if you&apos;re experiencing:</p>
              <ul className="space-y-2">
                <li>Persistent worry or racing thoughts</li>
                <li>Physical symptoms like rapid heartbeat, sweating, or tension</li>
                <li>Panic attacks or intense fear</li>
                <li>Difficulty sleeping due to anxiety</li>
                <li>Avoidance of situations that trigger anxiety</li>
                <li>Chronic stress from work, relationships, or life changes</li>
                <li>Feeling overwhelmed or unable to relax</li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal delay={0.6}>
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Control of Your Anxiety?</h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your first session and start your journey toward greater peace and emotional well-being.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Session
                </Button>
              </Link>
              <Link href="/#services">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 transition-all">
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
