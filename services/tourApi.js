import authAxios from "./authAxios";

class tourApi {
  getListTours = async () => {
    return await authAxios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/tours`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  getTour = async (tourId) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/tours/${tourId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  getFeaturedTours = async () => {
    const res = await authAxios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/tours`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const allTours = res.data.data.edges;
    const featuredTours = allTours.filter((tour) => tour.isTrending);

    return featuredTours;
  };

  getFilteredTours = async (price, star, vehicle, type, numberOfPeople) => {
    const res = await authAxios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/tours`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const allTours = res.data.data.edges;

    // Ban đầu khởi tạo filteredTours là tất cả các Tour => Rồi lọc điều kiện lần lượt nếu slug != 0
    let filteredTours = allTours;

    if (price != 0) {
      const numPrice = +price; // price đang là String
      filteredTours = filteredTours.filter(
        (tour) => tour.price >= numPrice && tour.price < numPrice + 400
      );
    }

    if (star != 0) {
      filteredTours = filteredTours.filter((tour) => tour.rating == star);
    }

    if (vehicle != 0) {
      filteredTours = filteredTours.filter(
        (tour) => tour.vehicle == vehicle
      );
    }

    if (type != 0) {
      filteredTours = filteredTours.filter(
        (tour) => tour.type == type
      );
    }

    if (numberOfPeople != 0) {
      filteredTours = filteredTours.filter(
        (tour) => tour.numberOfPeople == numberOfPeople
      );
    }

    return filteredTours;
  };

  addTour = async (tourData) => {
    return await authAxios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/tours`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: tourData,
    });
  };

  updateTour = async (tourId, tourData) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/tours/${tourId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: tourData,
      }
    );
  };

  deleteIvr = async (tourId) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/ivr/${tourId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
}

export default new tourApi();
