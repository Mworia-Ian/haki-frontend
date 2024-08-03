import React from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
  return (
    <section className="reviews">
      <div className="heading">
        <span>Reviews</span>
        <h3>What our clients say about us</h3>
      </div>
      <div className="clients-reviews">
        <div className="review">
          <div className="info">
            <img src="https://lh3.googleusercontent.com/zEeknM2BzzjQUBEeLiWYf3-4zoMj1psa7LViKYbbK_FbMOubj5nMJQaEGVBH3Wb_IsZ--zUAO9oq7I8UpQC3xwMNae0LALahTSijBw=s750" alt="Client" />
            <div className="row">
              <h1>Mius Puiru</h1>
              <span>Maximum Miracle Centre Church</span>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus corporis nobis eos et rerum assumenda minima eligendi voluptatibus consequatur.</p>
        </div>
        <div className="review">
          <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/William_Ruto_2023.jpg" alt="Client" />
            <div className="row">
              <h1>Rilliam Wuto</h1>
              <span>President of Kenya</span>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus corporis nobis eos et rerum assumenda minima eligendi voluptatibus consequatur.</p>
        </div>
        <div className="review">
          <div className="info">
            <img src="https://lh3.googleusercontent.com/0ct84q95SWcxOLlGNGfyF3mh8U3CfjA7Zy91HKDD-OJJEgadHscrrS3lYrVL4Vh6nr1B_Y5YmozRrUwpCfkZuUR4CFiUWzGCT_BgPxRazjA" alt="Client" />
            <div className="row">
              <h1>Billiam Wenda</h1>
              <span>Content Creator</span>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus corporis nobis eos et rerum assumenda minima eligendi voluptatibus consequatur.</p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
