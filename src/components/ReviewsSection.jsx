import React from 'react';
import './ReviewsSection.css';

const reviews = [
  {
    id: 1,
    name: "Mius Puiru",
    role: "Maximum Miracle Centre Church",
    image: "https://lh3.googleusercontent.com/zEeknM2BzzjQUBEeLiWYf3-4zoMj1psa7LViKYbbK_FbMOubj5nMJQaEGVBH3Wb_IsZ--zUAO9oq7I8UpQC3xwMNae0LALahTSijBw=s750",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus corporis nobis eos et rerum assumenda minima eligendi voluptatibus consequatur."
  },
  {
    id: 2,
    name: "Rilliam Wuto",
    role: "President of Kenya",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/William_Ruto_2023.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus corporis nobis eos et rerum assumenda minima eligendi voluptatibus consequatur."
  },
  {
    id: 3,
    name: "Billiam Wenda",
    role: "Content Creator",
    image: "https://lh3.googleusercontent.com/0ct84q95SWcxOLlGNGfyF3mh8U3CfjA7Zy91HKDD-OJJEgadHscrrS3lYrVL4Vh6nr1B_Y5YmozRrUwpCfkZuUR4CFiUWzGCT_BgPxRazjA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus corporis nobis eos et rerum assumenda minima eligendi voluptatibus consequatur."
  }
];

const ReviewsSection = () => {
  return (
    <section className="reviews">
      <div className="heading">
        <span>Reviews</span>
        <h3>What our clients say about us</h3>
      </div>
      <div className="clients-reviews">
        {reviews.map(review => (
          <div key={review.id} className="review">
            <div className="info">
              <img src={review.image} alt={`Picture of ${review.name}`} />
              <div className="row">
                <h1>{review.name}</h1>
                <span>{review.role}</span>
              </div>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
