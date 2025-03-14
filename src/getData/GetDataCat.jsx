import { api } from "../api/api.js";

const getCatDryFoods = async () => {
  const pages = 5; // تعداد صفحاتl
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/cat-dry-foods/search/?page=${page}`,
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
const getCatWetFoods = async () => {
  const pages = 4;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/cat-wet-food-pouch/search/?page=${page}`,
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

const getCatRewardFoods = async () => {
  const pages = 4;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/Cat-food-rewards/search/?page=${page}`,
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
const getCatFoodContainer = async () => {
  const pages = 2;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/pet/search/?page=${page}&q=ظرف اب و غذای گربه`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response.data.data.products);
      allProducts = [...allProducts, ...response.data.data.products];
    }
  } catch (error) {
    console.log(error);
  }

  return allProducts;
};
const getCatBinSoil = async () => {
  const pages = 2;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/pet/search/?page=${page}&q=ظرف خاک گربه`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response.data.data.products);
      allProducts = [...allProducts, ...response.data.data.products];
    }
  } catch (error) {
    console.log(error);
  }

  return allProducts;
};
const getCatDryBrands = async () => {
  const response = await api.get(`/categories/cat-dry-foods/search/`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  console.log(response.data.data.filters.brands.options);

  return response.data.data.filters.brands.options;
};
const getCatWetBrands = async () => {
  try {
    const response = await api.get(`/categories/cat-wet-food-pouch/search/`, {
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
const getCatShampoo = async () => {
  const pages = 1;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/pet/search/?page=${page}&q=شامپو و نرم کننده گربه`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("z", response.data.data.products);
      allProducts = [...allProducts, ...response.data.data.products];
    }
  } catch (error) {
    console.log(error);
  }

  return allProducts;
};
const getCatRewardBrands = async () => {
  try {
    const response = await api.get(`/categories/Cat-food-rewards/search/`, {
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
const getCatwaterFoodContainerBrands = async () => {
  try {
    const response = await api.get(
      `/categories/pet/search/?q=ظرف اب و غذای گربه`,
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
const getCatBinSoilBrands = async () => {
  try {
    const response = await api.get(`/categories/pet/search/?q=ظرف خاک گربه`, {
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
  getCatDryFoods,
  getCatDryBrands,
  getCatWetFoods,
  getCatWetBrands,
  getCatRewardFoods,
  getCatRewardBrands,
  getCatFoodContainer,
  getCatwaterFoodContainerBrands,
  getCatBinSoil,
  getCatBinSoilBrands,
  getCatShampoo,
};
