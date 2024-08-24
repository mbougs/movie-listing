import FiveStarRating from './FiveStarRating';
import s from './style.module.css'

function TVShowDetail({ tvShow }) {
    const rating = tvShow.vote_average / 2;

    return (
        <>
        <div className={s.title}>{ tvShow.name }</div>
        <div className={s.rating_container}>
            <FiveStarRating rating={ rating } />
            <span className={s.rating}>{ rating }/5</span>
        </div>
        <div className={s.overview}>{ tvShow.overview }</div>
        </>
    );
}

export default TVShowDetail;