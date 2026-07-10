import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiCheckCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";
import type { ContactFormValues } from "@/types";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async () => {
    // Wire this up to EmailJS (see README) or your backend of choice.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-accent bg-white p-10 text-center shadow-card">
        <FiCheckCircle className="text-success" size={40} />
        <h3 className="mt-4 font-display text-xl font-semibold text-secondary">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-secondary/60">
          Thanks for reaching out — we typically reply within a few hours during business hours.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>Send Another Message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-accent bg-white p-6 shadow-card md:p-8" noValidate>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Name</label>
          <input id="c-name" {...register("name", { required: "Name is required" })} className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          {errors.name && <p className="mt-1 text-xs text-primary">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Phone</label>
          <input id="c-phone" {...register("phone", { required: "Phone is required" })} className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          {errors.phone && <p className="mt-1 text-xs text-primary">{errors.phone.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="c-email" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Email</label>
          <input id="c-email" type="email" {...register("email", { required: "Email is required" })} className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          {errors.email && <p className="mt-1 text-xs text-primary">{errors.email.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="c-subject" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Subject</label>
          <input id="c-subject" {...register("subject", { required: "Subject is required" })} className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          {errors.subject && <p className="mt-1 text-xs text-primary">{errors.subject.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="c-message" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Message</label>
          <textarea id="c-message" rows={5} {...register("message", { required: "Message is required" })} className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          {errors.message && <p className="mt-1 text-xs text-primary">{errors.message.message}</p>}
        </div>
      </div>
      <Button type="submit" disabled={isSubmitting} className="mt-6 w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
