import { LucideIcon } from "lucide-react";

export interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    fee: string;
    image?: string;
}