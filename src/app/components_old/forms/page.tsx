import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import LoginForm1 from "@/components/final/forms/LoginForm1";
import CodeHighlight from "@/components/CodeHighlight";

const LoginSectionCode = `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const LoginForm1 = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col items-center h-screen justify-center gap-16">
          <section className="flex flex-col gap-10 items-center m-primary mr-1">
            <h1>Login</h1>
          </section>
          <section>
            <form className="flex flex-col gap-2">
              <Input placeholder="email" type="email" name="email" />
              <Input placeholder="password" type="password" name="password" />
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
  );
};

export default LoginForm1;`;
const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1>Login Form</h1>
      <Tabs defaultValue="preview" className="p-0  m-0">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          className="mx-auto flex items-center justify-center w-full border p-2"
          value="preview"
        >
          <LoginForm1 />
        </TabsContent>
        <TabsContent value="code" className="w-96 md:w-[800px] rounded-sm">
          <CodeHighlight code={LoginSectionCode} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
