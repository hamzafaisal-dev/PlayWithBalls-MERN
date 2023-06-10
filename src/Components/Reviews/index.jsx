import React from "react";
import { useState } from "react";
import "./style.css";
import { Typography, TextField, Button, Rating } from "@mui/material";

const Reviews = () => {
  const [userReview, setUserReview] = useState("");
  const [userRating, setUserRating] = useState(1);

  const handleReviewChange = (event) => {
    setUserReview(event.target.value);
  };

  const handleRatingChange = (event, value) => {
    setUserRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Review:", userReview);
    console.log("User Rating:", userRating);
    // Add your logic to handle the submission of the user review and rating

    setUserReview("");
    setUserRating(0);
  };

  return (
    <>
      <Typography variant="h5">Reviews</Typography>
      <div className="reviews">
        <div className="review">
          <div className="reviewer">
            <span className="reviewer-name">John Doe</span>
            <span className="review-rating">4.5/5</span>
          </div>
          <div className="review-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            varius lectus libero, id rhoncus velit auctor in.
          </div>
        </div>

        <div className="review">
          <div className="reviewer">
            <span className="reviewer-name">Jane Smith</span>
            <span className="review-rating">3.8/5</span>
          </div>
          <div className="review-content">
            Sed pulvinar lacinia justo a gravida. Vestibulum id sagittis ex, sit
            amet mollis arcu. Praesent nec nibh sed tortor placerat interdum.
          </div>
        </div>
      </div>

      <Typography variant="h5" style={{ marginTop: "50px" }}>
        Add Your Review
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="user-review">
          <Rating
            name="user-rating"
            value={userRating}
            defaultValue={1}
            onChange={handleRatingChange}
            size="medium"
            precision={1}
            required
            style={{ marginLeft: "865px" }}
          />
          <TextField
            placeholder="Write a review for this ground"
            variant="outlined"
            required
            fullWidth
            multiline
            rows={4}
            value={userReview}
            onChange={handleReviewChange}
            style={{ marginTop: "15px" }}
          />
        </div>
        <div className="user-review">
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#24DC89", marginTop: "20px" }}
          >
            Submit Review
          </Button>
        </div>
      </form>
    </>
  );
};

export default Reviews;
