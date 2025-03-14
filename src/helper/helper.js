const shorten_text = (title) => {
  const titleSplit = title.split(" ").splice(0, 6).join(" ");

  return titleSplit;
};
const off_price = (price) => {
  const off = (parseInt(price) * 10) / 100;
  return price - off;
};
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const sortProductsDesc = (products) => {
  const sortedProducts = [...products].sort(
    (a, b) =>
      b.default_variant.price.rrp_price - a.default_variant.price.rrp_price
  );
  return sortedProducts;
};

const getCount = (products) => {
  const count = products.reduce((acc, cur) => acc + cur.quantity, 0);
  console.log(count);
  return count;
};
const getTotalCost = (products) => {
  console.log({ products });
  const total = products.reduce(
    (acc, cur) =>
      acc + (cur.quantity * cur.default_variant.price.rrp_price) / 10,
    0
  );
  console.log(total);
  return total;
};
export {
  shorten_text,
  off_price,
  formatNumber,
  sortProductsDesc,
  getCount,
  getTotalCost,
};
