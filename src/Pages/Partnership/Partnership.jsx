import React, { useState } from "react";

const Partnership = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("درخواست همکاری ارسال شد:", formData);
    alert("درخواست شما ثبت شد!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl border border-border_black">
      <h2 className="text-clamp_des font-Iran_Bold text-center text-purple_d mb-6">
        همکاری با ما
      </h2>
      <p className="text-text_gray_color text-center mb-6 text-clamp">
        فاپلازا فرصتی عالی برای فروشندگان و تولیدکنندگان فراهم کرده تا از طریق این پلتفرم محصولات خود را به فروش برسانند.
      </p>

      <h3 className="text-clamp_1 font-Iran_Bold text-black mb-3">مزایای همکاری:</h3>
      <ul className="list-disc list-inside text-text_gray_color space-y-2 mb-6 text-clamp">
        <li>ارسال محصولات با برند و نام شما</li>
        <li>خرید از سایت‌های معتبر خارجی</li>
        <li>کاهش هزینه‌های حمل‌ونقل و انبارداری</li>
        <li>افزایش رضایت و اعتماد مشتریان</li>
      </ul>

      <h3 className="text-clamp_1 font-Iran_Bold text-black mb-3">ثبت درخواست همکاری:</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="نام و نام خانوادگی"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border-[1px] border-purple_d  mb-3 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border-[1px] border-purple_d  mb-3 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="شماره تماس"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border-[1px] border-purple_d  mb-3 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="توضیحات بیشتر"
          value={formData.message}
          onChange={handleChange}
           className="w-full p-3 border-[1px] border-purple_d  mb-3 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
          rows="4"
        />
        <button
          type="submit"
          className="w-full bg-purple_d text-white py-3 rounded-xl hover:bg-purple_l transition-all"
        >
          ارسال درخواست
        </button>
      </form>

      <p className="text-text_gray_color text-center mt-6 text-clamp">
        برای اطلاعات بیشتر با ما در واتساپ تماس بگیرید:  
        <span className="text-purple_d font-Iran_Bold"> 09916345619 </span>
      </p>
    </div>
  );
};

export default Partnership;
