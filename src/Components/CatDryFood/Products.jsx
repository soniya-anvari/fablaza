import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { formatNumber, sortProductsDesc } from "../../helper/helper";
import Pagination from "../Products/Pagination";
import PetProductBox from "../Products/PetProductBox";
import ProductsCard from "../Products/ProductCard";

function Products({ brands, products }) {
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const [totalPosts, setTotalPosts] = useState(products.length);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  ////////////////////
  const [brand, setBrand] = useState("all");
  const [price, setPrice] = useState(17000000);
  const [isOpen, setIsOpen] = useState(false);
  let [filteredData, setFilteredData] = useState([]);
  const PriceRange = (event) => {
    setPrice(event.target.value);
  };
  const changeHandler = (event) => {
    setBrand(event.target.value);
    setIsOpen(!isOpen);
  };
  //params
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams);
    if (brand != "all") setSearchParams({ brand });
    if (price < 17000000)
      setSearchParams({
        "price[min]": 0,
        "price[max]": price,
      });
    if (brand !== "all" && price < 17000000)
      setSearchParams({
        brand,
        "price[min]": 0,
        "price[max]": price,
      });
    console.log({ brand, price });
    let filterD = products;

    let filterProduct = filterD.filter((product) => {
      if (Object.keys(product.default_variant).length > 0) {
        return (
          product.default_variant.price.rrp_price / 10 >= 0 &&
          product.default_variant.price.rrp_price / 10 <= price
        );
      } else return product;
    });

    if (brand != "all") {
      filterProduct = filterProduct.filter((product) => {
        return product.data_layer.brand == brand;
      });
      console.log({ brand, filterProduct });
    }
    setFilteredData(filterProduct);
    setTotalPosts(filterProduct.length);
  }, [brand, price, products]);
  const toggleBox = () => {
    setIsOpen(!isOpen);
  };
  filteredData = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=' mt-10 pb-10 w-full m-auto  flex flex-col md:flex-row gap-5'>
      <div className='w-full md:w-3/12 pt-2 md:pt-9'>
        <h3 className='text-[gray]'>قیمت</h3>
        <input
          type='range'
          min='0'
          max='17000000'
          className='accent-text_orange h-1'
          onChange={PriceRange}
        />
        <p>0 تومان - {formatNumber(price)}تومان</p>
        <div className='pt-4 '>
          <button
            onClick={toggleBox}
            className='bg-blue-500 text-[gray]  rounded'>
            {isOpen ? "- برند" : "+ برند"}
          </button>
          {isOpen && (
            <div className='mt-4 p-4  bg-white'>
              <label className='flex items-center mt-5'>
                <input
                  onChange={changeHandler}
                  type='radio'
                  name='options'
                  value='all'
                  className='form-radio h-5 w-5 ms-5 text-blue-600 focus:ring-text_orange'
                />
                <span className='ml-2'>همه ی برند ها</span>
              </label>
              {brands?.map((brand) => (
                <label className='flex items-center mt-5  ' key={brand.id}>
                  <input
                    type='radio'
                    onChange={changeHandler}
                    name='options'
                    value={brand.title_fa}
                    className='form-radio h-5 w-5 text-blue-600 focus:ring-text_orange'
                  />
                  <span className='ml-2'>{brand.title_fa}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='w-full  md:w-9/12 '>
        <div className='flex w-full flex-wrap'>
          {filteredData.length == 0 ? (
            <div className='mt-4 md:mt-12 p-5 rounded-md w-full bg-white'>
              <h3>هیچ محصولی یافت نشد!</h3>
            </div>
          ) : (
            filteredData.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))
          )}
        </div>
        <Pagination
          totalPosts={totalPosts}
          postsPerPage={postsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Products;
