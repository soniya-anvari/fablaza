const Pagination = ({ totalPosts, postsPerPage, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='flex  justify-center mt-8'>
      <ul className='flex flex-wrap gap-3'>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              disabled={currentPage == number}
              onClick={() => paginate(number)}
              className={`py-1 px-3 text-[15px] text-white disabled:bg-[gray] bg-[#272844] hover:bg-blue-500 hover:bg-[yellow]`}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
