import { api } from "../api/api.js";


const getBirdFood = async () => {
  const pages = 4;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/bird-food-seed/search/?page=${page}`,
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
const getBirdCare = async () => {
  const pages = 2;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const [response1, response2] = await Promise.all([
        api.get(`/categories/cage-and-box/search/?page=${page}&q=پرنده`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }),
        api.get(`/categories/health-and-care/search/?page=${page}&q=پرنده`, {
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
const getBirdBrands = async () => {
  try {
    const response = await api.get(`/categories/bird-food-seed/search/`, {
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
const getBirdCareBrands = async () => {
  try {
    const response = await api.get(`/categories/cage-and-box/search/`, {
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
export { getBirdBrands, getBirdFood, getBirdCare, getBirdCareBrands };
