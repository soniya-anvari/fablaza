import img1 from "../assets/images/New folder/image.png"
import img2 from "../assets/images/New folder/image2.png"
import img3 from "../assets/images/New folder/image3.png"
import img4 from "../assets/images/New folder/image4.png"
import img5 from "../assets/images/New folder/image5.png"
import img6 from "../assets/images/New folder/image6.png"
const products = [
  {
    id: 1,
    title: "انواع برس، پرزگیر و ماساژور سگ و گربه",
    backGround:
      "../assets/images/New folder/image.png",
    color: "#800f01",
  },
  {
    id: 2,
    title: "انواع کنسرو و پوچ گربه ی بالغ و مادر",
    backGround:
      "https://petabad.com/uploads/aa08ca6b8b2c486a952ffb3e71e37a5b.w_361,h_196,r_k.jpg.webp",
    color: "#016455",
  },
  {
    id: 3,
    title: "انواع اسباب سازی سگ و گربه",
    backGround:
      "https://petabad.com/uploads/df498122db68458aa6f504384b0c9e1b.w_356,h_192,r_k.jpg.webp",
    color: "#775504",
  },
];
const pupolar_Categories = [
  {
    id: 1,
    name: "مکمل ها",
    image:img1,
  },
  {
    id: 2,
    name:  " گجت های هوشمند ",
    image:img2,
  },
  {
    id: 3,
    name: "ساعت",
    image: img5 ,
  },
  {
    id: 4,
    name: "سرگرمی",
    image: img6 ,
  },
  {
    id: 5,
    name: " ماساژور ",
    image:
      img3,
  },
  {
    id: 6,
    name: " آرایشی بهداشتی ",
    image:img4,
  },
  
];
const discount_products = [
  {
    id: 1,
    title: "درخت گربه نیناپت",
    color: "#007684",
    discount: "%27",
    backGround:
      "https://petabad.com/uploads/8105088735434d1a97096070b35424ad.w_438,h_199,r_k.jpg.webp",
  },
  {
    id: 2,

    title: "تشویقی سگ",
    color: "#714f00",
    discount: "%15",
    backGround:
      "https://petabad.com/uploads/6095dd2600574e6982bc4a5a0c4037a6.w_445,h_207,r_k.jpg.webp",
  },
  {
    id: 3,
    title: "غذای خشک سگ",
    color: "#982477",
    discount: "%12",
    backGround:
      "https://petabad.com/uploads/0543ce8fae2b4f5db87a711490cc70d5.w_438,h_207,r_k.jpg.webp",
  },
];
export { products, pupolar_Categories, discount_products };
