import authAxios from "./authAxios";

class destinationApi {
  getListDestinations = async () => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/destinations`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  getDestination = async (destinationId) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/destinations/${destinationId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  getDestinationByTourId = async (tourId) => {
    const res = await authAxios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/destinations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const allDestinations = res.data.data.edges;

    const destinations = allDestinations.filter(
      (destination) => destination.tourId == tourId
    );

    return destinations;
  };

  addDestination = async (destinationData) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/destinations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: destinationData,
      }
    );
  };

  updateDestination = async (destinationId, destinationData) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/destinations/${destinationId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: destinationData,
      }
    );
  };

  deleteDestination = async (destinationId) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/ivr/${destinationId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
}

export default new destinationApi();
