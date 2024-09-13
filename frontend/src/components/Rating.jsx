import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
const Rating = (props) => {
  const { rating, numReviews } = props;

  return (
    <div className="rating">
      <span>
        <FontAwesomeIcon
          icon={rating >= 1 ? faStar : rating >= 0.5 ? faStarHalfAlt : farStar}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={rating >= 2 ? faStar : rating >= 1.5 ? faStarHalfAlt : farStar}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={rating >= 3 ? faStar : rating >= 2.5 ? faStarHalfAlt : farStar}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={rating >= 4 ? faStar : rating >= 3.5 ? faStarHalfAlt : farStar}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={rating >= 5 ? faStar : rating >= 4.5 ? faStarHalfAlt : farStar}
        />
      </span>
      <span> {numReviews} reviews</span>
    </div>
  );
};

export default Rating;
