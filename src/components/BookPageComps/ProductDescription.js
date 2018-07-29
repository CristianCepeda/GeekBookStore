import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import CommentBox from '../Comment/CommentBox';

// const ProductDescription = ({price}) => {
//   return (
//
//   )
// }
const ProductDescription = ({price, rating, description}) => {
  return(
    <div>
      <p>
      <div class="card" styles="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Price</h5>
          <h6 class="card-subtitle mb-2 text-muted">${price}</h6>
          <Link to="/" className="btn-success btn-sm">Add to Cart</Link>


        </div>
      </div>
      </p>

        <br />
        <div class="card" styles="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Rating</h5>
            <h6 class="card-subtitle mb-2 text-muted">{rating}</h6>


            <p>
              <a class="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">
                Leave a rating?
              </a>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
              <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Description
                </button>
              </h5>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
              {description}
              </div>
            </div>
          </div>
         </div>
         <br />

         <div class="accordion" id="accordionExample2">
           <div class="card">
             <div class="card-header" id="headingTwo">
               <h5 class="mb-0">
                 <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                     Comments
                 </button>
               </h5>
             </div>

             <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample2">
               <div class="card-body">

               <CommentBox />
               </div>
             </div>
           </div>
          </div>
      </div>



  );
};



export default ProductDescription
