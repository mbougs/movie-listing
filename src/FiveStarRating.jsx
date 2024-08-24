import { StarFill, StarHalf, Star } from 'react-bootstrap-icons';

const FiveStarRating = ({ rating }) => {
    // Declare star icon array
    const starList = [];
    // Store number of filled stars
    const starFillCount = Math.floor(rating);
    // Store half star if present
    const hasHalfStar = (rating - parseInt(rating)) >= 0.5;
    // Store number of empty stars
    const emptyStarCount = 5 - starFillCount - (hasHalfStar? 1 : 0);
    // Adding filled star icon
    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={'star-fill' + i} />);        
    }
    // Adding half star icon if present
    if (hasHalfStar) {
        starList.push(<StarHalf key={'star-half'} />);
    }
    // Adding empty star icon
    for (let i = 1; i <= emptyStarCount; i++) {
        starList.push(<Star key={'star-empty' + i} />);        
    }

    return <>{ starList }</>;
}
 
export default FiveStarRating;