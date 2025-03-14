import React, { useState } from "react";

import Pagination from "../Products/Pagination";
// کامپوننت اصلی
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // داده‌های نمونه
  const posts = Array.from({ length: 100 }, (_, i) => `Post ${i + 1}`);

  const totalPosts = posts.length;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Posts</h1>
      <div className='mb-4'>
        {currentPosts.map((post, index) => (
          <div key={index} className='border p-4 mb-2 rounded-lg shadow'>
            {post}
          </div>
        ))}
      </div>
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
