import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms and conditions for booking services with Tofina Sparkle Solutions." path="/terms-and-conditions" />
      <Section tone="light" className="pt-40">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-secondary">Terms & Conditions</h1>
          <p className="mt-3 text-sm text-secondary/50">Last updated: July 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-secondary/70">
            <section>
              <h2 className="font-display text-lg font-semibold text-secondary">Bookings & Scheduling</h2>
              <p className="mt-2">
                Quotes provided through our instant estimator are approximate. Final pricing is confirmed
                after a walk-through, photos, or a detailed description of the job. Bookings are held for
                the agreed date and time window; access to the property must be arranged in advance.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-secondary">Payment</h2>
              <p className="mt-2">
                Payment is due on completion unless otherwise agreed in writing. Commercial and large-scope
                jobs may require a deposit to confirm scheduling.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-secondary">Cancellations</h2>
              <p className="mt-2">
                Please give at least 24 hours' notice to cancel or reschedule a booking. Late cancellations
                may be subject to a callout fee.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-secondary">Satisfaction Guarantee</h2>
              <p className="mt-2">
                If any part of a job falls short of our checklist standard, notify us within 24 hours and
                we will return to correct it at no additional cost.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-secondary">Liability</h2>
              <p className="mt-2">
                Our teams are insured while on site. Please disclose fragile, antique, or high-value items
                in advance so appropriate care can be taken.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
