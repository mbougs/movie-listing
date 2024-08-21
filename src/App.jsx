import { useEffect, useState } from 'react';
import { TVShowAPI } from './TvShow';
import TVShowDetail from './TVShowDetail';
import s from './style.module.css';
import { BACKDROP_BASE_URL } from '../config';



TVShowAPI.fetchPopulars();
function App() {
  const [ currentTVShow, setCurrentTVShow ] = useState();
  
  const fetchPopulars = async () => {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
}

useEffect(() => {
  fetchPopulars();
}, []);

console.log(currentTVShow);

  return (
    <>
    <div className={s.main_container}
    // style={{
    //   background: currentTVShow
    //   ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}) no-repeat center / cover`
    //   : 'black',
    //   }}
      style={ currentTVShow && {background: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}) no-repeat center / cover`}}
      >

      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>LOGO</div>
            <div>Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{width: "100%"}} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        { currentTVShow && <TVShowDetail tvShow={currentTVShow}/> }
      </div>
      <div className={s.recommended_tv_shows}>Recommended for You</div>
    </div>
    </>
  )
}

export default App
