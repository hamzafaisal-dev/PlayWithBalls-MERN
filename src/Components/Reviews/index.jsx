import React from "react";
import { useState } from "react";
import "./style.css";
import { Typography, TextField, Button, Rating } from "@mui/material";
import axios from "axios";

const Reviews = ({ reviews }) => {
  const [userReview, setUserReview] = useState("");
  const [userRating, setUserRating] = useState(0);

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

    const groundID = window.location.pathname.substring(45);
    const path = `grounds/${groundID}/reviews`;

    const reviewData = {
      comment: userReview,
      rating: userRating === null ? 1 : userRating,
    };

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .post(`http://localhost:3001/${path}`, reviewData, config)
      .then((response) => {
        console.log(`Review added successfully`);
      })
      .catch((error) => {
        console.log(error);

        if (error.response.data.message === "Invalid token") {
          localStorage.removeItem("token");
          window.location.assign("/login");
        }

        if (error.response) {
          alert(error.response.data.message);
        } else if (error.request) {
          alert(error.request.data.message);
        } else {
          alert("Errorrf", error.message);
        }
      });

    setUserReview("");
    setUserRating(1);
  };

  return (
    <>
      <Typography variant="h5">Reviews</Typography>
      <div className="reviews">
        {reviews?.map((review) => {
          return (
            <div className="review" key={review._id}>
              <div className="reviewer">
                <span className="reviewer-name">
                  {review.userID.firstName + " " + review.userID.lastName}
                </span>
                <span className="review-rating">{review.rating}/5</span>
              </div>
              <div className="review-content">{review.comment}</div>
            </div>
          );
        })}

        {/* <div className="review">
          <div className="reviewer">
            <span className="reviewer-name">Jane Smith</span>
            <span className="review-rating">3.8/5</span>
          </div>
          <div className="review-content">
            Sed pulvinar lacinia justo a gravida. Vestibulum id sagittis ex, sit
            amet mollis arcu. Praesent nec nibh sed tortor placerat interdum.
          </div>
        </div> */}
      </div>

      <Typography variant="h5" style={{ marginTop: "50px" }}>
        Add Your Review
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="user-review">
          <Rating
            name="user-rating"
            value={userRating}
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
