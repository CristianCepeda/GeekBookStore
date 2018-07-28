import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import DisplayBook from '../DisplayBook';



// const ProductDescription = ({price}) => {
//   return (
//
//   )
// }
const ProductDescription = ({price, rating, description, authorName, bio, relatedBooks, Comments}) => {
  var html = "<p>" + Comments.join("</p><p>") + "</p>"

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

        <div class="accordion" id="accordionExample1">
          <div class="card">
            <div class="card-header" id="heading1">
              <h5 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    Description
                </button>
              </h5>
            </div>

            <div id="collapse1" class="collapse show" aria-labelledby="heading1" data-parent="#accordionExample1">
              <div class="card-body">
              {description}
              </div>
            </div>
          </div>
         </div>

         <div class="accordion" id="accordionExample2">
           <div class="card">
             <div class="card-header" id="heading2">
               <h5 class="mb-0">
                 <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                     Author
                 </button>
               </h5>
             </div>

             <div id="collapse2" class="collapse show" aria-labelledby="heading2" data-parent="#accordionExample2">
               <div class="card-body">
               Author: {authorName}
               <br />
               Bio: {bio}
               <br />

               Related Books:
               {relatedBooks.map(book =>
                 <DisplayBook {...book}/>
               )}
               </div>
             </div>
           </div>
           <div class="accordion" id="accordionExample3">
             <div class="card">
               <div class="card-header" id="heading3">
                 <h5 class="mb-0">
                   <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                       Comments
                   </button>
                 </h5>
               </div>

               <div id="collapse3" class="collapse show" aria-labelledby="heading3" data-parent="#accordionExample3">
                 <div class="card-body">
                 <pre>{Comments.join("\n\n")} </pre>


                 </div>
               </div>
             </div>
            </div>
          </div>
      </div>



  );
};



export default ProductDescription
