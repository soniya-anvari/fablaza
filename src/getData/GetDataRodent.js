import { api } from "../api/api.js";


const getRodentFood = async () => {
  const pages = 5;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/pet/search/?page=${page}&q=غذای خرگوش همستر خوکچه`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      allProducts = [...allProducts, ...response.data.data.products];
    }
  } catch (error) {
    console.log(error);
  }

  return allProducts;
};
const getRodentCare = async () => {
  const pages = 5;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/pet/search/?page=${page}&q=نگهداری خرگوش همستر خوکچه`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      allProducts = [...allProducts, ...response.data.data.products];
    }
  } catch (error) {
    console.log(error);
  }

  return allProducts;
};
const getRodentsFoodBrands = async () => {
  try {
    const response = await api.get(
      `/categories/pet/search/?q=غذای همستر خرگوش خوکچه`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data.data.filters.brands.options;
  } catch (error) {
    console.log(error);
  }
};
const getRodentsCareBrands = async () => {
  try {
    const response = await api.get(
      `/categories/pet/search/?q=نگهداری همستر خرگوش خوکچه`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data.data.filters.brands.options;
  } catch (error) {
    console.log(error);
  }
};
export {
  getRodentFood,
  getRodentsFoodBrands,
  getRodentsCareBrands,
  getRodentCare,
};
