import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1>Login Form</h1>
      <Tabs defaultValue="preview" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <Card>
            <CardContent>
              <div className="flex flex-col items-center h-screen justify-center gap-16">
                <section className="flex flex-col gap-10 items-center m-primary mr-1">
                  <h1>Login</h1>
                </section>
                <section>
                  <form className="flex flex-col gap-2">
                    <Input placeholder="email" type="email" name="email" />
                    <Input
                      placeholder="password"
                      type="password"
                      name="password"
                    />
                    <Button>Login</Button>
                  </form>
                  <Separator className="my-5" />
                  <form className="flex flex-col gap-4 items-center ">
                    <Button
                      className="flex items-center gap-2 w-full"
                      variant={"outline"}
                    >
                      <FcGoogle size={24} /> Login with Google
                    </Button>
                    <Link href={""} className="underline text-xs">
                      create a new account
                    </Link>
                  </form>
                </section>
              </div>{" "}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardContent>
              hi
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
