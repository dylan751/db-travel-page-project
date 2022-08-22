export interface Tour {
  tourId: number;
  title: string;
  duration: string;
  startTime: string;
  rating: number;
  hotel: string;
  price: number;
  vehicle: string;
  type: string; // Should be ENUM
  numberOfPeople: string;
  description: string;
  numberOfBooking: number;
  image: string;
  isTrending: boolean;
}
