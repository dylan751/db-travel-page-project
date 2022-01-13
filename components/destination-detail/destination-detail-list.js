import DestinationDetailItem from "./destination-detail-item";
import classes from "./destination-detail-list.module.css";

function DestionDetailList(props) {
  const { destinations } = props;

  return (
    <ul className={classes["destination-detail-list"]}>
      {destinations.map((destination) => (
        <DestinationDetailItem
          key={destination.DiaDiemID}
          TourID={destination.TourID}
          TenDiaDiem={destination.TenDiaDiem}
          DiaChi={destination.DiaChi}
          MoTa={destination.MoTa}
          NoiDung={destination.NoiDung}
          Anh={destination.Anh}
        />
      ))}
    </ul>
  );
}

export default DestionDetailList;
