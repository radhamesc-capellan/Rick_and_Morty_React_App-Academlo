import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap';

const PaginationApp = ( {prev, next, onPrevious, onNext} ) => {

  // const [currentPage, setCurrentPage] = useState(1);

 

  const handlePrevius = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }

  return (
    <div className='container '>
    <Pagination className='justify-content-center'>
      {
        prev ? <Pagination.Prev onClick={handlePrevius}/>
        :
        null 
      }

      {
        next ? <Pagination.Next onClick={handleNext}/>
        :
        null
      }
      
      
      
    </Pagination>
    </div>
  )
}

export default PaginationApp