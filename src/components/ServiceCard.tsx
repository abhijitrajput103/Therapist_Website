'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    service: Service;
}

// Map service titles to their URL slugs
const getServiceSlug = (title: string): string => {
    const slugMap: Record<string, string> = {
        "Anxiety & Stress Management": "anxiety-stress-management",
        "Relationship Counseling": "relationship-counseling",
        "Trauma Recovery": "trauma-recovery"
    };
    return slugMap[title] || "";
};

export default function ServiceCard({ service }: ServiceCardProps) {
    const Icon = service.icon;
    const slug = getServiceSlug(service.title);
    
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {service.image && (
                <div className="relative w-full aspect-[4/3] bg-gray-100">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                    />
                </div>
            )}
            <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <p className="text-indigo-600 font-semibold text-lg mb-4">{service.fee}</p>
                {slug && (
                    <Link href={`/services/${slug}`}>
                        <Button variant="outline" className="w-full group">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
}