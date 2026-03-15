import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <main className="bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.58a.75.75 0 1 0-1.22-.9l-3.86 5.2-2.3-2.3a.75.75 0 1 0-1.06 1.06l2.92 2.92a.75.75 0 0 0 1.14-.1l4.38-5.88Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h1 className="mt-6 text-3xl font-semibold text-slate-900">
            Order Confirmed
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Thanks for your purchase. Your order is now being processed and
            will be shipped soon.
          </p>

          <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-left">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Order Summary
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Order number</span>
                <span className="font-semibold text-slate-900">#JK-2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated delivery</span>
                <span>3-5 business days</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Payment</span>
                <span>Visa ending in 4242</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/shop"
              className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-slate-800"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
