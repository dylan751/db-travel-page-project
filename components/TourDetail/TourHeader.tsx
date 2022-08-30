import classes from './TourHeader.module.css';

interface TourHeaderProps {
  title: string;
}

const TourHeader = ({ title }: TourHeaderProps) => {
  return (
    <div className={classes['tour-header']}>
      <h1>{title}</h1>
    </div>
  );
};

export default TourHeader;
