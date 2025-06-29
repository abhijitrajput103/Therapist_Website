"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

const CONTACT_METHODS = [
  { value: "", label: "Select preferred method" },
  { value: "call", label: "Call" },
  { value: "email", label: "Email" },
  { value: "text", label: "Text" },
];

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

type FormData = {
    name: string;
    email: string;
    message: string;
    terms: boolean;
    phone: string;
    preferredTime: string;
    contactMethod: string;
    recaptchaToken?: string;
};

export default function ContactForm() {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        if (!recaptchaToken) {
            toast.error("Please complete the reCAPTCHA.");
            return;
        }

        setIsSubmitting(true);
        const loadingToast = toast.loading("Sending message...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, recaptchaToken }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to submit");
            }

            toast.success("Message sent successfully! Dr. Blake will be in touch soon.", { id: loadingToast });
            reset();
            setRecaptchaToken(null);
            
        } catch {
            toast.error("Failed to send message. Please try again.", { id: loadingToast });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full py-12 bg-gradient-to-b from-white to-sky-100" id="contact">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-indigo-700 mb-2">Get In Touch</h2>
                    <p className="text-center text-gray-600 mb-8">Simply fill out the brief fields below and Dr. Serena Blake will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Name"
                                {...register("name", { required: "Name is required" })}
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.name ? "border-red-500" : ""}`}
                                disabled={isSubmitting}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.email ? "border-red-500" : ""}`}
                                disabled={isSubmitting}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="(555) 234-5678"
                                {...register("phone", { required: "Phone is required" })}
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.phone ? "border-red-500" : ""}`}
                                disabled={isSubmitting}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="message">What brings you here?</Label>
                            <Textarea
                                id="message"
                                placeholder="How can I help you?"
                                {...register("message", { required: "Message is required" })}
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.message ? "border-red-500" : ""}`}
                                disabled={isSubmitting}
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="preferredTime">Preferred Contact Time</Label>
                            <Textarea
                                id="preferredTime"
                                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                                {...register("preferredTime", { required: "Preferred time is required" })}
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.preferredTime ? "border-red-500" : ""}`}
                                disabled={isSubmitting}
                                rows={3}
                            />
                            <p className="text-xs text-gray-500 mt-1">Let us know when you&apos;re typically available for a call or consultation</p>
                            {errors.preferredTime && <p className="text-red-500 text-sm">{errors.preferredTime.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                            <select
                                id="contactMethod"
                                {...register("contactMethod", { required: "Preferred contact method is required" })}
                                className={`mt-1 block mb-4 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.contactMethod ? "border-red-500" : ""}`}
                                disabled={isSubmitting}
                            >
                                {CONTACT_METHODS.map((method) => (
                                    <option key={method.value} value={method.value}>{method.label}</option>
                                ))}
                            </select>
                            {errors.contactMethod && <p className="text-red-500 text-sm">{errors.contactMethod.message}</p>}
                        </div>
                        <div className="flex items-center justify-center">
                            <ReCAPTCHA
                                sitekey={RECAPTCHA_SITE_KEY}
                                onChange={(token: string | null) => setRecaptchaToken(token)}
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="terms"
                                {...register("terms", { required: "You must agree to be contacted" })}
                                disabled={isSubmitting}
                            />
                            <Label htmlFor="terms" className="text-sm">
                                I agree to be contacted
                            </Label>
                        </div>
                        {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}
                        <Button 
                            type="submit" 
                            className="w-full" 
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Submit"}
                        </Button>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            By clicking submit you consent to receive texts and emails from Dr. Serena Blake.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}