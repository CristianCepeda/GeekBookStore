import React from 'react';
import { Link } from 'react-router-dom';
import CommentBox from '../Comment/CommentBox';

const ProductDescription = ({price, rating, description, BookID}) => {
  return(
    <div>
      <div className="card" styles="width: 18rem;">
        <div className="card-body">
          <h5 className="card-title">Price</h5>
          <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
          <Link to="/" className="btn-success btn-sm">Add to Cart</Link>
        </div>
      </div>

      <br />
      <div className="card" styles="width: 18rem;">
        <div className="card-body">
          <h5 className="card-title">Rating</h5>
          <h6 className="card-subtitle mb-2 text-muted">{rating}</h6>
          <p>
            <a className="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">
                Leave a rating?
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Description
              </button>
            </h5>
          </div>

          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              {description}
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="accordion" id="accordionExample2">
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                     Comments
              </button>
            </h5>
          </div>

          <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample2">
            <div className="card-body">
              <CommentBox bookid={BookID}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
