import React from 'react'
import {Link} from "react-router-dom"
import Moment from "react-moment"
export default function ListingItem({listing, id}) {
  return <li>
   <Link to={`/category/${listing.type}/${id}`}>
     <img src={listing.imgUrl[0]} alt="" />
     <Moment>
      {listing.timestamp?.toDate()}
     </Moment>
   </Link>
    
  </li>; 
}

