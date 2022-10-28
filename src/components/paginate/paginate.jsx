import './paginate.css'
import Detail from '../detail/detail'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


 function Paginate({users}){
  let persons=users;

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage=10;
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(persons.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(persons.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,persons,users]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % persons.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  

    
    return(
        <>
       
        

        {
            currentItems.map((person) => ( 
                <>
                
               <Link  to="/appointment/:code" className='write'> <div className = "row " > 
                <div className = "col " > < /div>
                 <div className = "col-12  mb-2 write " >
                <Detail key={person.id} person = { person}/ >
                </div >
                </div>
                </Link>
                </ >
                
                
            ))
        } 

        
       <div className='row pt-5'>
      
       <div className='col-11 centralize  d-flex'>
          <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          containerClassName="paginate"
          pageLinkClassName="pagess"
          previousLinkClassName="pagess"
          nextLinkClassName="pagess"
          activeLinkClassName="active "
        />
        </div>
        <div className='col-1  '><Link to="/appointment" className="coloring"><button type="button" className='btn btn-danger pad  '>+</button> </Link></div>
       
        </div>
        <
                />
        
        
    )
}
export default Paginate;