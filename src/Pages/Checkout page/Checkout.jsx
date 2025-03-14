import React, { useState } from "react";

const Checkout = () => {
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  const [products] = useState([
    { id: 1, name: "محصول ۱", price: 150000, quantity: 2 },
    { id: 2, name: "محصول ۲", price: 250000, quantity: 1 },
  ]);

  const [showInvoice, setShowInvoice] = useState(false);

  const handleChange = (e) => {
    setBillingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInvoice(true);
  };

  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">تسویه‌حساب</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* فرم پرداخت */}
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">جزئیات صورتحساب</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="نام"
              onChange={handleChange}
              className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="lastName"
              placeholder="نام خانوادگی"
              onChange={handleChange}
              className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="street"
              placeholder="آدرس خیابان"
              onChange={handleChange}
              className="p-2 border rounded-lg col-span-2 focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="city"
              placeholder="شهر"
              onChange={handleChange}
              className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="zip"
              placeholder="کدپستی"
              onChange={handleChange}
              className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="phone"
              placeholder="تلفن"
              onChange={handleChange}
              className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="email"
              placeholder="ایمیل"
              type="email"
              onChange={handleChange}
              className="p-2 border rounded-lg col-span-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 w-full"
          >
            پرداخت
          </button>
        </form>

        {/* فاکتور (قبل از پرداخت) */}
        <div className="border rounded-lg p-4 bg-gray-100 shadow-md md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800">فاکتور شما</h3>
          {products.map((product) => (
            <div key={product.id} className="flex justify-between text-gray-700 mt-2">
              <span>{product.name} (x{product.quantity})</span>
              <span>{(product.price * product.quantity).toLocaleString()} تومان</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg text-gray-800 mt-4">
            <span>مبلغ کل:</span>
            <span>{totalAmount.toLocaleString()} تومان</span>
          </div>
        </div>
      </div>

      {/* فیش خرید (بعد از پرداخت) */}
      {showInvoice && (
        <div className="mt-6 p-4 border rounded-lg shadow-md bg-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">فیش خرید</h3>
          <p className="text-gray-700">نام: {billingInfo.firstName} {billingInfo.lastName}</p>
          <p className="text-gray-700">آدرس: {billingInfo.street}, {billingInfo.city}</p>
          <p className="text-gray-700">تلفن: {billingInfo.phone}</p>
          <p className="text-gray-700">ایمیل: {billingInfo.email}</p>

          <div className="border-t border-gray-300 mt-4 pt-4">
            <h4 className="font-semibold text-gray-800">جزئیات سفارش</h4>
            {products.map((product) => (
              <div key={product.id} className="flex justify-between text-gray-700 mt-2">
                <span>{product.name} (x{product.quantity})</span>
                <span>{(product.price * product.quantity).toLocaleString()} تومان</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg text-gray-800 mt-4">
              <span>مبلغ کل:</span>
              <span>{totalAmount.toLocaleString()} تومان</span>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-lg mt-4"
          >
            چاپ فیش
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
