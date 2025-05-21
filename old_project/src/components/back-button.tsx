"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <Button variant={"ghost"} onClick={() => router.back()} className={cn("flex gap-2", className)}>
      <ArrowLeft size={16}/> Back{" "}
    </Button>
  );
};

export default BackButton;
