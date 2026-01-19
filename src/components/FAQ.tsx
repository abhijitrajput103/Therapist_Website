'use client';

import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
    return (
        <section className="py-12 bg-gradient-to-b from-white to-sky-100" id="faq">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
                    Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Do you accept insurance?</AccordionTrigger>
                        <AccordionContent>
                            No, but a superbill is provided for self-submission.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Are online sessions available?</AccordionTrigger>
                        <AccordionContent>
                            Yes—all virtual sessions via Zoom.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                        <AccordionContent>
                            24-hour notice required.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}