import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <main className="bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Get In Touch
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            We usually respond within 24 hours on business days.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Send a message
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Tell us how we can help with your order or product questions.
            </p>

            <form className="mt-6 grid gap-4">
              <div>
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="contact-name"
                >
                  Full name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="contact-email"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="contact-topic"
                >
                  Topic
                </label>
                <select
                  id="contact-topic"
                  name="topic"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                >
                  <option>Order status</option>
                  <option>Returns & refunds</option>
                  <option>Product question</option>
                  <option>Shipping</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="contact-message"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-slate-800"
              >
                Send message
              </button>
            </form>
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contact Details
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p>hello@jk-store.com</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Phone</p>
                  <p>+1 (555) 012-3344</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Hours</p>
                  <p>Mon-Fri, 9am-6pm</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Quick Links
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  to="/orders"
                  className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                >
                  Track my order
                </Link>
                <Link
                  to="/returns"
                  className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                >
                  Returns & refunds
                </Link>
                <Link
                  to="/faq"
                  className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
