import Image from "next/image";

import classes from "./destination-detail-item.module.css";

function DestinationDetailItem(props) {
  const { TenDiaDiem, DiaChi, MoTa, NoiDung, Anh } = props;

  return (
    <li className={classes["destination-detail-item"]}>
      <h1>{TenDiaDiem}</h1>
      <p className={classes["destination-address"]}>Địa chỉ: {DiaChi}</p>
      <p>{MoTa}</p>
      <div className={classes["image"]}>
        <Image src={Anh} alt={TenDiaDiem} width={1200} height={600} />
      </div>
      <p>{NoiDung}</p>
    </li>
  );
}

export default DestinationDetailItem;
