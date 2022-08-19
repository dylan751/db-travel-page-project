import authAxios from "./authAxios";

class reviewApi {
  getListReviews = async () => {
    return await authAxios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/reviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  getListReviewsByTourId = async (tourId) => {
    const res = await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/reviews`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const allReviews = res.data.data.edges;
    const reviewsByTourId = allReviews.filter(
      (review) => review.tourId == tourId
    );
    return reviewsByTourId;
  };

  getReview = async (reviewId) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/reviews/${reviewId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  addReview = async (reviewData) => {
    return await authAxios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: reviewData,
    });
  };

  updateReview = async (reviewId, reviewData) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/reviews/${reviewId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: reviewData,
      }
    );
  };

  deleteIvr = async (reviewId) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/ivr/${reviewId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
}

export default new reviewApi();
