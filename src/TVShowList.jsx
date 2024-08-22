import TVShowListItem from "./TVShowListItem";
import s from './style.module.css'

const TVShowList = ({ onClickItem, tvShowList }) => {
    return ( 
        <div>
            <div className={s.showList_title}>Recommended for you: </div>
            <div className={s.showList_list}>
                {tvShowList.map((tvShow) => {
                    return (
                        <span className={s.tv_show_item} key={tvShow.id}>
                            <TVShowListItem 
                            tvShow={ tvShow } 
                            onClick={ onClickItem } />
                        </span>
                    );
                })}
            </div>
        </div>
     );
}
 
export default TVShowList;