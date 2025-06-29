import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const processedData = {
            ...data,
            terms: data.terms === "on" || data.terms === true
        };
        
        await connectDB();
        const contact = await Contact.create(processedData);
        
        return NextResponse.json({
            success: true,
            message: "Contact created successfully",
            contact
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Error creating contact",
            error: error instanceof Error ? error.message : String(error),
        }, { status: 500 });
    }
}