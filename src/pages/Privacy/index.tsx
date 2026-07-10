import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How Tofina Sparkle Solutions collects, uses, and protects your information." path="/privacy-policy" />
      <Section tone="light" className="pt-40">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-secondary">Privacy Policy</h1>
          <p className="mt-3 text-sm text-secondary/50">Last updated: July 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-secondary/70">
            <section>
              <h2 className="font-display text-lg font-semibold text-secondary">Information We Collect</h2>
              <p className="mt-2">
                When you request a quote, book a service, or contact us, we collect your name, phone number,
                email address, property location, and any photos or documents you choose to upload.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-secondary">How We Use Your Information</h2>
              <p className="mt-2">
                We use this information to prepare quotes, schedule and deliver cleaning services, communicate
                about bookings, and, where you've opted in, send occasional service updates and offers.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-secondary">Sharing of Information</h2>
              <p className="mt-2">
                We do not sell your personal information. It is shared only with the staff assigned to your
                job and, where required, with payment or communication service providers we use to operate.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-secondary">Cookies</h2>
              <p className="mt-2">
                Our website uses cookies to remember your preferences and understand how the site is used.
                You can control cookies through your browser settings.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-secondary">Your Rights</h2>
              <p className="mt-2">
                You may request access to, correction of, or deletion of your personal information at any
                time by contacting us at cwafula2026@gmail.com.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-secondary">Contact</h2>
              <p className="mt-2">Questions about this policy can be sent to cwafula2026@gmail.com or 0759154533.</p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
