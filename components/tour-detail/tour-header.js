import classes from './tour-header.module.css';

function TourHeader(props) {
    const { title } = props;

    return <div className={classes["tour-header"]}>
        <h1>{title}</h1>
    </div>
}

export default TourHeader;