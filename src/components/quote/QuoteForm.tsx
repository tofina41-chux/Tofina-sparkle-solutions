import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUploadCloud, FiCheckCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import services from "@/data/services.json";
import Button from "@/components/ui/Button";
import type { QuoteFormValues } from "@/types";

const ACCEPTED_TYPES = [".jpg", ".jpeg", ".png", ".webp", ".pdf"];

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormValues>();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const onSubmit = async (data: QuoteFormValues) => {
    setSubmitError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError("Email delivery is not configured yet. Add your EmailJS credentials to .env.local and try again.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          ...data,
          preferredDate: data.preferredDate || "Not specified",
          files: fileNames.join(", ") || "No files uploaded",
        },
        publicKey
      );

      setSubmitted(true);
      reset();
      setFileNames([]);
    } catch (error) {
      console.error("Quote request email failed", error);
      setSubmitError("We couldn't send your request right now. Please try again in a moment.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-accent bg-white p-10 text-center shadow-card">
        <FiCheckCircle className="text-success" size={40} />
        <h3 className="mt-4 font-display text-xl font-semibold text-secondary">Quote request received</h3>
        <p className="mt-2 max-w-sm text-sm text-secondary/60">
          We'll get back to you within a few hours with an exact price and available slots.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-accent bg-white p-6 shadow-card md:p-8" noValidate>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Name</label>
          <input
            id="name"
            {...register("name", { required: "Your name is required" })}
            className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none"
            placeholder="Jane Wanjiru"
          />
          {errors.name && <p className="mt-1 text-xs text-primary">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Phone</label>
          <input
            id="phone"
            {...register("phone", { required: "Phone number is required" })}
            className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none"
            placeholder="07XX XXX XXX"
          />
          {errors.phone && <p className="mt-1 text-xs text-primary">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none"
            placeholder="you@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-primary">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="location" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Location</label>
          <input
            id="location"
            {...register("location", { required: "Location is required" })}
            className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none"
            placeholder="Nyali, Mombasa"
          />
          {errors.location && <p className="mt-1 text-xs text-primary">{errors.location.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Service</label>
          <select
            id="service"
            {...register("service", { required: "Please select a service" })}
            className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-primary">{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="preferredDate" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Preferred Date</label>
          <input
            id="preferredDate"
            type="date"
            {...register("preferredDate", { required: "Please choose a preferred date" })}
            className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
          {errors.preferredDate && <p className="mt-1 text-xs text-primary">{errors.preferredDate.message}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="description" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Description</label>
        <textarea
          id="description"
          rows={4}
          {...register("description", { required: "A short description helps us quote accurately" })}
          className="mt-2 w-full rounded-xl border border-accent px-4 py-3 text-sm focus:border-primary focus:outline-none"
          placeholder="Tell us about the space, any specific concerns, or access instructions"
        />
        {errors.description && <p className="mt-1 text-xs text-primary">{errors.description.message}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="files" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">
          Photos (optional)
        </label>
        <label
          htmlFor="files"
          className="mt-2 flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-accent px-4 py-8 text-center transition-colors hover:border-primary/50"
        >
          <FiUploadCloud className="text-primary" size={24} />
          <span className="text-sm text-secondary/60">Click to upload multiple images or a PDF</span>
          <span className="text-xs text-secondary/40">JPG, PNG, JPEG, WEBP, PDF</span>
        </label>
        <input
          id="files"
          type="file"
          multiple
          accept={ACCEPTED_TYPES.join(",")}
          className="sr-only"
          {...register("files", {
            onChange: (e) => setFileNames(Array.from(e.target.files ?? []).map((f) => (f as File).name)),
          })}
        />
        {fileNames.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {fileNames.map((name) => (
              <li key={name} className="flex items-center gap-1 rounded-full bg-accent/40 px-3 py-1 text-xs text-secondary/70">
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {submitError && <p className="mt-4 text-sm text-primary">{submitError}</p>}

      <Button type="submit" disabled={isSubmitting} className="mt-6 w-full">
        {isSubmitting ? "Submitting..." : "Submit Quote Request"}
      </Button>
    </form>
  );
}
