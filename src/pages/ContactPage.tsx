import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Leaf, Send, CheckCircle, Instagram, Facebook } from 'lucide-react';
import { SectionHeading, Reveal } from '@/components/SectionHeading';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.73 2.89 2.89 0 0 1 2.31-4.55c.3 0 .6.05.88.13V9.4a6.33 6.33 0 0 0-.88-.06A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7.03a8.27 8.27 0 0 0 4.83 1.54V6.69h-1.1z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const subjects = ['General Inquiry', 'Wholesale', 'Press', 'Sustainability Partnership'];

  return (
    <>
      <section className="pt-32 pb-12 bg-cream-100 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Contact KAPOW"
            subtitle="Have a question, partnership idea, or just want to say hello? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-sage-200 p-8 sm:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-moss-100 text-moss-600 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-forest-800 mb-2">Message sent!</h3>
                    <p className="text-forest-500 mb-6">
                      Thanks for reaching out. We'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-semibold text-moss-600 hover:text-moss-700"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Name" htmlFor="name">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-forest-800 placeholder-forest-300 focus:outline-none focus:ring-2 focus:ring-moss-400 focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </Field>
                      <Field label="Email" htmlFor="email">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-forest-800 placeholder-forest-300 focus:outline-none focus:ring-2 focus:ring-moss-400 focus:border-transparent transition-all"
                          placeholder="you@example.com"
                        />
                      </Field>
                    </div>

                    <Field label="Subject" htmlFor="subject">
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-forest-800 focus:outline-none focus:ring-2 focus:ring-moss-400 focus:border-transparent transition-all"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Message" htmlFor="message">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-forest-800 placeholder-forest-300 focus:outline-none focus:ring-2 focus:ring-moss-400 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us what's on your mind..."
                      />
                    </Field>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-moss-600/20"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Contact info */}
                <div className="bg-white rounded-3xl border border-sage-200 p-6">
                  <h3 className="font-bold text-forest-800 mb-4">Connect With Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-forest-600">
                      <Mail className="w-4 h-4 text-moss-600" />
                      <span>hello@kapow.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-forest-600">
                      <MapPin className="w-4 h-4 text-moss-600" />
                      <span>KAPOW HQ, Clean Living Co.</span>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-white rounded-3xl border border-sage-200 p-6">
                  <h3 className="font-bold text-forest-800 mb-4">Follow KAPOW</h3>
                  <div className="flex gap-3">
                    {[
                      { Icon: Instagram, label: 'Instagram' },
                      { Icon: TikTokIcon, label: 'TikTok' },
                      { Icon: Facebook, label: 'Facebook' },
                      { Icon: XIcon, label: 'X' },
                    ].map(({ Icon: I, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className="w-10 h-10 rounded-full bg-sage-100 hover:bg-moss-600 hover:text-cream-50 flex items-center justify-center transition-colors text-forest-600"
                      >
                        <I className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Eco pledge */}
                <div className="bg-forest-800 rounded-3xl p-6">
                  <div className="inline-flex items-center gap-2 text-moss-300 text-sm font-semibold mb-3">
                    <Leaf className="w-4 h-4" />
                    Our Eco Pledge
                  </div>
                  <p className="text-cream-100/70 text-sm leading-relaxed">
                    KAPOW is committed to a cleaner, greener future — one puff at a time. Every
                    message you send helps us build a more sustainable community.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-forest-700 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
