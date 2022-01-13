import classes from './tour-header.module.css';

function TourHeader(props) {
    const { TieuDe } = props;

    return <div className={classes["tour-header"]}>
        <h1>{TieuDe}</h1>
    </div>
}

export default TourHeader;