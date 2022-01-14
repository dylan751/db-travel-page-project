const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://db-travel-page-project.vercel.app';

// ----------------------------------------- TOURS ----------------------------------------------
export async function getAllTours() {
  const response = await fetch(`${server}/api/tours`);
  const data = await response.json();

  return data;
}

export async function getFeaturedTours() {
  const allTours = await getAllTours();

  const featuredTours = allTours.filter((tour) => tour.NoiBat);

  return featuredTours;
}

export async function getTourById(tourId) {
  const response = await fetch(`${server}/api/tours/${tourId}`); // MySql Query lấy về 1 array

  const data = await response.json();

  // Convert to an Object
  return data[0];
}


export async function getFilteredTours(
  price,
  star,
  vehicle,
  tourType,
  numberOfPeople
) {
  const allTours = await getAllTours();

  // Ban đầu khởi tạo filteredTours là tất cả các Tour => Rồi lọc điều kiện lần lượt nếu slug != 0
  let filteredTours = allTours;

  if (price != 0) {
    const numPrice = +price; // price đang là String
    filteredTours = filteredTours.filter(
      (tour) => tour.Gia >= numPrice && tour.Gia < numPrice + 400
    );
  }

  if (star != 0) {
    filteredTours = filteredTours.filter((tour) => tour.DanhGia == star);
  }

  if (vehicle != 0) {
    filteredTours = filteredTours.filter((tour) => tour.PhuongTien == vehicle);
  }

  if (tourType != 0) {
    filteredTours = filteredTours.filter(
      (tour) => tour.NoiNgoaiQuoc == tourType
    );
  }

  if (numberOfPeople != 0) {
    filteredTours = filteredTours.filter(
      (tour) => tour.SoLuongKhach == numberOfPeople
    );
  }

  return filteredTours;
}

// ----------------------------------------- DESTINATIONS ----------------------------------------------

export async function getAllDestinations() {
  const response = await fetch(`${server}/api/destinations`);
  const data = await response.json();

  return data;
}

export async function getDestinationById(tourId) {
  const allDestinations = await getAllDestinations();

  const destinations = allDestinations.filter(
    (destination) => destination.TourID == tourId
  );

  return destinations;
}

// ----------------------------------------- REVIEWS ----------------------------------------------

export async function getTourReviews(tourId) {
  const respone = await fetch(`${server}/api/reviews/${tourId}`);
  const data = await respone.json();

  return data;
}

// ----------------------------------------- PRODUCT ----------------------------------------------

export async function getAllProducts() {
  const response = await fetch(`${server}/api/products`);
  const data = await response.json();

  return data;
}

export async function getSortedProducts(sortMethod) {
  // const products = await getAllProducts();

  let products = await getAllProducts();

  let sortedProducts = products;

  if (sortMethod == "0") {
    sortedProducts = products;
  } else if (sortMethod == "high-to-low") {
    sortedProducts = products.sort((a, b) => (a.Gia < b.Gia ? 1 : -1));
  } else if (sortMethod == "low-to-high") {
    sortedProducts = products.sort((a, b) => (a.Gia > b.Gia ? 1 : -1));
  }

  return sortedProducts;
}
