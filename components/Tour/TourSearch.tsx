import classes from './TourSearch.module.css';

import { useRef } from 'react';
import { useRouter } from 'next/router';

const TourSearch = () => {
  const router = useRouter();

  const priceRef = useRef<HTMLSelectElement>();
  const starRef = useRef<HTMLSelectElement>();
  const vehicleRef = useRef<HTMLSelectElement>();
  const tourTypeRef = useRef<HTMLSelectElement>();
  const numberOfPeopleRef = useRef<HTMLSelectElement>();

  function submitHandler(event) {
    event.preventDefault();

    const enteredPrice = priceRef.current.value;
    const enteredStar = starRef.current.value;
    const enteredVehicle = vehicleRef.current.value;
    const enteredTourType = tourTypeRef.current.value;
    const enteredNumberOfPeople = numberOfPeopleRef.current.value;

    const fullPath = `/tours/${enteredPrice}/${enteredStar}/${enteredVehicle}/${enteredTourType}/${enteredNumberOfPeople}`;
    router.push(fullPath);
  }

  return (
    <div className={classes['tour-search']}>
      <h1>Find Your Tours</h1>
      <form className={classes['form']} onSubmit={submitHandler}>
        <div className={classes['form-controls']}>
          <div className={classes['form-control']}>
            <select id="price" ref={priceRef}>
              <option value="0">Giá</option>
              <option value="1">1 - 400</option>
              <option value="401">401 - 800</option>
              <option value="801">801 - 1200</option>
              <option value="1201">1201 - 1600</option>
            </select>
          </div>
          <div className={classes['form-control']}>
            <select id="star" ref={starRef}>
              <option value="0">Số sao</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={classes['form-control']}>
            <select id="vehicle" ref={vehicleRef}>
              <option value="0">Phương tiện</option>
              <option value="Máy bay">Máy bay</option>
              <option value="Tàu hỏa">Tàu hỏa</option>
              <option value="Tàu thủy">Tàu thủy</option>
              <option value="Xe buýt">Xe buýt</option>
            </select>
          </div>
          <div className={classes['form-control']}>
            <select id="tour-type" ref={tourTypeRef}>
              <option value="0">Kiểu Tour</option>
              <option value="Trong nước">Trong nước</option>
              <option value="Nước ngoài">Nước ngoài</option>
            </select>
          </div>
          <div className={classes['form-control']}>
            <select id="number-of-people" ref={numberOfPeopleRef}>
              <option value="0">Số lượng người</option>
              <option value="1-4">1 - 4</option>
              <option value="5-8">5 - 8</option>
              <option value="9-12">9 - 12</option>
              <option value="13-16">13 - 16</option>
            </select>
          </div>
        </div>
        <button>Tìm Tours</button>
      </form>
    </div>
  );
}

export default TourSearch;
