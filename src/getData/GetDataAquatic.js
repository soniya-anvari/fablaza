import { api } from "../api/api.js";


const getAquaticFood = async () => {
  const pages = 5;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/pet/search/?page=${page}&q=غذای ابزیان`,
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
const getAquaticCare = async () => {
  const pages = 2;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const [response1, response2] = await Promise.all([
        api.get(`/categories/pet/search/?page=${page}&q=نگهداری ابزیان`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }),
        api.get(`/categories/pet/search/?page=${page}&q=اکواریوم ابزیان`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }),
      ]);

      allProducts = [
        ...allProducts,
        ...response1?.data.data.products,
        ...response2?.data.data.products,
      ];
    }
  } catch (error) {
    console.log(error);
  }

  return allProducts;
};
const getAquaticFoodBrands = async () => {
  try {
    const response = await api.get(`/categories/pet/search/?q=غذای ابزیان`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data.data.filters.brands.options;
  } catch (error) {
    console.log(error);
  }
};
const getAquaticCareBrands = async () => {
  try {
    const response = await api.get(`/categories/pet/search/?q=نگهداری ابزیان`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data.data.filters.brands.options;
  } catch (error) {
    console.log(error);
  }
};
export {
  getAquaticCare,
  getAquaticFood,
  getAquaticCareBrands,
  getAquaticFoodBrands,
};
