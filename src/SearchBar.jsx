import { Search } from 'react-bootstrap-icons';
import s from './style.module.css';
import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [ searchValue, setSearchValue ] = useState("");

    function submit(e){
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            onSubmit(e.target.value);
            setSearchValue("");
        }        
    }
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    return ( 
        <>
        <Search size={25} className={s.search_icon} />
        <input 
        className={s.search_input} 
        type="text" 
        value={ searchValue } 
        onKeyUp={ submit } 
        onChange={ handleChange } 
        placeholder='Search a movie or tv-show' />
        </>
     );
}
 
export default SearchBar;