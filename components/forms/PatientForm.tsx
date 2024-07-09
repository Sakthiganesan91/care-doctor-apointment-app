"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { patientFormSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";

export enum FormFieldTypes {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

function PatientForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof patientFormSchema>>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof patientFormSchema>) {
    setIsLoading(true);
    const userData = {
      ...values,
    };
    console.log(userData);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // const user = createUser(userData)

    // if (user) router.push(`patients/${user.$id}/register`)
    try {
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome ✨✨</h1>
          <p className="text-dar-700">Schedule Your Appointment</p>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldTypes.INPUT}
          name="name"
          label="Full Name"
          placeholder="Sakthiganesan"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldTypes.INPUT}
          name="email"
          label="Email"
          placeholder="example@xyz.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldTypes.PHONE_INPUT}
          name="phone"
          label="Phone Number"
          placeholder="6541100099"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
}

export default PatientForm;
