"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter()
  return (
    <Button onClick={()=> router.back()} className="flex">
      <ArrowLeft /> Back{" "}
    </Button>
  );
};

export default BackButton;
