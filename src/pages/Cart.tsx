import { clearItem, removeItem, updateQuantity } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const totalAmount = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const manageQty = (id: number, qty: any) => {
    dispatch(updateQuantity({ id, quantity: qty }));
  };

  const handleCheckout = () => {
    // dispatch(clearItem());
    navigate("/checkout");
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Shopping Bag
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            My Cart
          </h1>
        </div>
        <p className="text-sm text-slate-500">
          {cartList.length} {cartList.length === 1 ? "item" : "items"}
        </p>
      </div>

      {cartList.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <p className="text-sm text-slate-500">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full table-auto border-collapse text-left">
              <thead className="bg-slate-50 text-xs uppercase tracking-[0.2em] text-slate-500">
                <tr>
                  <th className="px-8 py-6 font-semibold">Product</th>
                  <th className="px-8 py-6 font-semibold">Name</th>
                  <th className="px-8 py-6 font-semibold">Price</th>
                  <th className="px-8 py-6 font-semibold">Qty</th>
                  <th className="px-8 py-6 font-semibold">Total</th>
                  <th className="px-8 py-6 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 text-sm">
                {cartList.map((item) => (
                  <tr key={item.id}>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="h-16 w-16 rounded-xl object-cover ring-1 ring-slate-200"
                        />
                        {/* <div className="text-xs text-slate-500">
                          #SKU-{item.id}
                        </div> */}
                      </div>
                    </td>
                    <td className="px-8 py-6 font-medium text-slate-900">
                      {item.title}
                    </td>
                    <td className="px-8 py-6 text-slate-700">${item.price}</td>
                    <td className="px-8 py-6">
                      <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-1">
                        <button
                          type="button"
                          onClick={() =>
                            manageQty(item.id, Math.max(1, item.quantity - 1))
                          }
                          className="rounded-full px-3 py-1.5 text-sm text-slate-500 transition hover:text-slate-900"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => {
                            manageQty(item.id, e.target.value);
                          }}
                          className="w-14 bg-transparent text-center text-sm font-semibold text-slate-900 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => manageQty(item.id, item.quantity + 1)}
                          className="rounded-full px-3 py-1.5 text-sm text-slate-500 transition hover:text-slate-900"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-semibold text-slate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="px-8 py-6">
                      <button
                        className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-rose-700 transition hover:bg-rose-100"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h3 className="text-lg font-semibold text-slate-900">
              Order Summary
            </h3>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="text-emerald-600">Free</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated Tax</span>
                <span>$0.00</span>
              </div>
            </div>
            <div className="mt-4 border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between text-base font-semibold text-slate-900">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>
            <button
              className="mt-5 w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-slate-800"
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
            <button
              className="mt-3 w-full rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
