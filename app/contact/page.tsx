import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a painting, print, or commission.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-serif text-3xl text-foreground">Get in Touch</h1>
      <p className="mt-4 leading-relaxed text-muted">
        Questions about a painting, shipping, or a custom piece? Reach out
        directly — I read every message myself.
      </p>

      
        href="mailto:g@artbygk.com"
        className="mt-8 inline-block border border-accent px-6 py-3 text-sm tracking-wide text-accent transition-colors hover:bg-accent hover:text-white"
      >
        Email g@artbygk.com
      </a>

      <div className="mt-12 border-t border-line pt-8">
        <p className="text-sm text-muted">
          {/* Add real social links here whenever you have them. */}
          Find more of the work on Instagram — link coming soon.
        </p>
      </div>
    </div>
  );
}
