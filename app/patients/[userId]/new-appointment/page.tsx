import AppointmentForm from "@/components/forms/AppointmentForm";
import Image from "next/image";
import React from "react";

async function AppointmentPage({ params: { userId } }: SearchParamProps) {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm />

          <p className="copyright py-12">© 2024 Care Pulse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="apointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}

export default AppointmentPage;
