import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";


const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquin font-bold text-center">
        What Our <span>Customers</span> Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-16 flex flex-1 justify-evenly items-center max-lg:flex-col gap-16">
        {reviews.map((review)=>(
          <ReviewCard
          key={review.customerName}
          customerName={review.customerName}
          imgURL={review.imgURL}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
