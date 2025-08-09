import React from "react";
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import SessionProvider from "@/providers/SessionProvider";
import {Toaster} from "@/components/ui/sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Advanced Chat App",
    description: "A modern chat application built with Next.js and TypeScript",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <SessionProvider>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            {children}
            <Toaster richColors duration={5000}/>
            </body>
        </SessionProvider>
        </html>
    );
}
