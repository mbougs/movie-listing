import { useEffect, useState } from 'react';
import { TVShowAPI } from './TvShow';
import TVShowDetail from './TVShowDetail';
import TVShowList from './TVShowList';
import { Logo } from './Logo';
import myLogo from '../public/logo.png';
import { BACKDROP_BASE_URL } from '../config';
import s from './style.module.css';



// TVShowAPI.fetchPopulars(tvShow);
function App() {
  const [ currentTVShow, setCurrentTVShow ] = useState();
  const [ recommendationList, setRecommendationList ] = useState([]);
  
  useEffect(() => {
    fetchPopulars();
  }, []);
  
  useEffect(() => {
    console.log('current tv show has changed');
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  const fetchPopulars = async () => {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  };
  const fetchRecommendations = async (tvShowId) => {
    const recommendationListResp = await TVShowAPI.fetchRecommendations(tvShowId);
    if (recommendationListResp.length > 0) {
      setRecommendationList(recommendationListResp.slice(0, 20));
    }
  }
  
   
  const updateCurrentTVShow = (tvShow) => {
    setCurrentTVShow(tvShow);
  }
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
            <Logo logo={myLogo} title="WatchList" subtitle="Trending Movies & Tv-Shows" />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{width: "100%"}} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        { currentTVShow && <TVShowDetail tvShow={currentTVShow}/> }
      </div>
      <div className={s.recommended_tv_shows}>
        { currentTVShow && (
        <TVShowList onClickItem={ updateCurrentTVShow } 
        tvShowList = { recommendationList } /> )}
      </div>
    </div>
    </>
  )
}

export default App
