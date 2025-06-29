'use client';

import React from "react";
import Image from "next/image";
import { Service } from "@/types";

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const Icon = service.icon;
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
                <p className="text-indigo-600 font-semibold text-lg">{service.fee}</p>
            </div>
        </div>
    );
}