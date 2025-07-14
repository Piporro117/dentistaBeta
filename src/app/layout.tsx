"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/basics/navbar";
import CardMenu from "@/components/basics/CardMenu";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// a la rama de casa

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {





  return (
    <html lang="en">


      <body

      >

        <NavBar />










        {children}
      </body>
    </html>
  );
}
