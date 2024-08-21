import s from './style.module.css'

function TVShowDetail({ tvShow }) {

    return (
        <>
        <div className={s.title}>{ tvShow.name }</div>
        <div className={s.rating}>User's vote: { tvShow.vote_average / 2}/5</div>
        <div className={s.overview}>{ tvShow.overview }</div>
        </>
    );
}

export default TVShowDetail;