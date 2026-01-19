import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Verify reCAPTCHA token
        const recaptchaToken = data.recaptchaToken;
        if (!recaptchaToken) {
            return NextResponse.json({
                success: false,
                message: "reCAPTCHA token is missing",
            }, { status: 400 });
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (!secretKey) {
            return NextResponse.json({
                success: false,
                message: "reCAPTCHA secret key is not configured",
            }, { status: 500 });
        }

        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

        const verificationResponse = await fetch(verificationUrl, {
            method: "POST",
        });

        const verificationResult = await verificationResponse.json();

        if (!verificationResult.success) {
            return NextResponse.json({
                success: false,
                message: "reCAPTCHA verification failed",
                errorCodes: verificationResult["error-codes"] || [],
            }, { status: 400 });
        }

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
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Error creating contact",
            error: error instanceof Error ? error.message : String(error),
        }, { status: 500 });
    }
}
