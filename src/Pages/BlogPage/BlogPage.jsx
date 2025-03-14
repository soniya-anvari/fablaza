import React from "react";

const BlogPage = () => {
  // لیست مقالات (دیتا می‌تونه از API بیاد)
  const articles = [
    {
      id: 1,
      title: "راهنمای خرید از سایت‌های خارجی",
      description: "نکات مهم برای خرید کالا از سایت‌های خارجی و ارسال به ایران.",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: 2,
      title: "نحوه استفاده از تخفیف‌های ویژه",
      description: "چطور می‌توانیم از کدهای تخفیف و پیشنهادهای ویژه استفاده کنیم؟",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: 3,
      title: "جدیدترین ترندهای مد و پوشاک",
      description: "معرفی جدیدترین ترندهای دنیای مد و خرید آنلاین لباس با قیمت مناسب.",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* عنوان صفحه */}
      <h2 className="text-clamp_des font-Iran_Bold text-center text-purple_d mb-10">
        وبلاگ فاپلازا
      </h2>
      <p className="text-text_gray_color text-center text-clamp mb-8">
        جدیدترین مقالات و راهنمایی‌ها برای خرید آنلاین و بررسی محصولات.
      </p>

      {/* لیست مقالات */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-lg border border-border_black rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-Iran_Bold text-black mb-2">
                {article.title}
              </h3>
              <p className="text-text_gray_color text-clamp">{article.description}</p>
              <a
                href={article.link}
                className="inline-block mt-3 text-purple_d font-Iran_Bold hover:text-purple_l transition-all"
              >
                ادامه مطلب →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
