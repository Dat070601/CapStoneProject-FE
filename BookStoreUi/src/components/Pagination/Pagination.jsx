import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { URL } from "../../constant";
import { fetchProductAsync, getNumberOfPage } from "../../api/product";
import Card from '../../components/Home/Card'
import { Box } from "@chakra-ui/react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchTotalNumberOfPages=async() => {

      const pageNumber = await getNumberOfPage(URL)
      setPageCount(pageNumber);
  } 
  fetchTotalNumberOfPages()
  useEffect(() => {
    fetchData()
    window.scrollTo(0, 1300)
  }, [currentPage]);

  const fetchData = async () => {
    const response = await fetchProductAsync(URL,currentPage+1)
    
    setData(response);
    
  };

  const handlePageClick = (page) => {
    setCurrentPage(page.selected);
  };

  return (
    <>
      <Box mb="100px" display={"flex"} flexWrap="wrap" gap={"25px"}>
        {data.map((item) => (
          <Card 
            productId={item.id}
            productName={item.title}  
            imageUrl = {item.imageUrl} 
            productPrice = {item.price} 
            sold = {item.sold}
            quantities = {item.quantity}
          />
        ))}
      </Box>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        disabledClassName={"disabled"}
        forcePage={currentPage}
      />
    </>
  );
};

export default Pagination;
