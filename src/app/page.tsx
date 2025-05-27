"use client";
import { z } from "zod";
import Image from "next/image";
import { schema } from "./schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Fragment, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Page() {
  const [step, setStep] = useState(0);
  const [alertDialog, setAlertDialog] = useState(true);

  const ANIMATION = {
    initial: { x: "-10%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.25 },
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <Fragment>
      <AlertDialog open={alertDialog} onOpenChange={setAlertDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <span className="font-bold text-destructive">
                CAUTION!!!!!!!!!!!!!!!!!!!!!!!!
              </span>
            </AlertDialogTitle>
            <AlertDialogDescription>
              This page is only for testing purposes. It is not meant to be used
              in production. Please do not use it in any real application.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setAlertDialog(false)}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <section className="md:w-full lg:w-[56rem] space-y-4">
        <Card className="w-full p-6">
          <header>
            <Image
              src="/G.png"
              alt="Google Logo"
              width={40}
              height={40}
              className="inline-block"
            />
          </header>
          <Form {...form}>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-4xl">Sign in</h2>
                  <br />
                  <p>to continue to Gmail</p>
                </div>
                <div className="flex-1 space-y-4">
                  {step === 0 && (
                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                autoComplete="true"
                                placeholder="Insert email or phone number"
                                className="py-6"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  )}
                  {step === 1 && (
                    <motion.div key="password-container" {...ANIMATION}>
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input
                                  type="password"
                                  autoComplete="current-password"
                                  placeholder="Enter your password"
                                  className="py-6"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </motion.div>
                  )}
                  <p className="text-sm font-bold text-muted-foreground">
                    Forgot email?
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-1"></div>
                <div className="flex-1 text-sm">
                  <p>
                    Not your computer? Use Guest mode to sign in privately.{" "}
                    <span className="font-bold text-muted-foreground">
                      Learn more about using Guest mode
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-1"></div>
                <div className="flex flex-1 justify-end gap-4">
                  {step === 0 && (
                    <Button variant="ghost">Create an account</Button>
                  )}
                  {step === 0 && (
                    <Button
                      type="button"
                      onClick={() => {
                        setStep(step + 1);
                      }}>
                      Next
                    </Button>
                  )}
                  {step === 1 && (
                    <Button variant="ghost">Forgot password?</Button>
                  )}
                  {step === 1 && (
                    <Button
                      onClick={() => {
                        console.log(form.getValues());
                      }}>
                      Next
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </Card>
        <div className="flex justify-between text-xs">
          <p>English (United States)</p>
          <div className="flex gap-4">
            <p>Help</p>
            <p>Privicy</p>
            <p>Term</p>
          </div>
        </div>
      </section>
      <div className="absolute top-0 right-0 p-4">
        <ModeToggle />
      </div>
    </Fragment>
  );
}
