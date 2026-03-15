import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { clearItem } from "../redux/cartSlice";

export default function Checkout() {
  const cartList = useAppSelector((state) => state.cart.items);
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");

  const totalAmount = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOrderPlaced = () => {
    navigate("/order-success");
    dispatch(clearItem());
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    handleOrderPlaced();
  };
  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const digitsOnly = event.target.value.replace(/\D/g, "");
    const limited = digitsOnly.slice(0, 19);
    const formatted = limited.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatted);
  };
  const handleCardExpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = event.target.value.replace(/\D/g, "");
    const limited = digitsOnly.slice(0, 4);
    const formatted =
      limited.length <= 2
        ? limited
        : `${limited.slice(0, 2)} / ${limited.slice(2)}`;
    setCardExp(formatted);
  };
  return (
    <main className="bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Secure Checkout
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Checkout
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Please fill out the details below to complete your order.
          </p>
        </div>

        <form
          className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
              <div className="mt-4 grid gap-4">
                <div>
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-email"
                  >
                    Email
                  </label>
                  <input
                    id="checkout-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-phone"
                  >
                    Phone
                  </label>
                  <input
                    id="checkout-phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    autoComplete="tel"
                    pattern="^[0-9+()\\s-]{7,}$"
                    title="Enter a valid phone number."
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Shipping Address
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-first-name"
                  >
                    First name
                  </label>
                  <input
                    id="checkout-first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-last-name"
                  >
                    Last name
                  </label>
                  <input
                    id="checkout-last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-address"
                  >
                    Address
                  </label>
                  <input
                    id="checkout-address"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-city"
                  >
                    City
                  </label>
                  <input
                    id="checkout-city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-state"
                  >
                    State / Province
                  </label>
                  <input
                    id="checkout-state"
                    name="state"
                    type="text"
                    autoComplete="address-level1"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-postal"
                  >
                    Postal code
                  </label>
                  <input
                    id="checkout-postal"
                    name="postalCode"
                    type="text"
                    autoComplete="postal-code"
                    pattern="^[0-9A-Za-z\\s-]{3,10}$"
                    title="Enter a valid postal code."
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-country"
                  >
                    Country
                  </label>
                  <input
                    id="checkout-country"
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Payment</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-card-name"
                  >
                    Name on card
                  </label>
                  <input
                    id="checkout-card-name"
                    name="cardName"
                    type="text"
                    autoComplete="cc-name"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-card-number"
                  >
                    Card number
                  </label>
                  <input
                    id="checkout-card-number"
                    name="cardNumber"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-card-exp"
                  >
                    Expiry date
                  </label>
                  <input
                    id="checkout-card-exp"
                    name="cardExp"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    placeholder="MM / YY"
                    value={cardExp}
                    onChange={handleCardExpChange}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="checkout-card-cvc"
                  >
                    CVC
                  </label>
                  <input
                    id="checkout-card-cvc"
                    name="cardCvc"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="123"
                    // pattern="^\\d{3,4}$"
                    title="Enter a valid CVC."
                    // required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-slate-900">
              Order Summary
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="text-emerald-600">Free</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Tax</span>
                <span>$0.00</span>
              </li>
            </ul>
            <div className="mt-4 border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between text-base font-semibold text-slate-900">
                <span>Total</span>
                <span>$0.00</span>
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-slate-800"
            >
              Place Order
            </button>
            <p className="mt-3 text-xs text-slate-500">
              By placing your order, you agree to our terms & conditions.
            </p>
          </aside>
        </form>
      </div>
    </main>
  );
}
