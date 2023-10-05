import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"

const SearchBar = ({ data }) => {

    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setValue(query);
        if (query.length > 1) {
            const filterSuggestions = data.filter(
                (suggestion) =>
                    suggestion.toLowerCase().indexOf(query) > -1
            );
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
        } else {
            setSuggestionsActive(false);
        }
    };

    const handleClick = (e) => {
        setSuggestions([]);
        setValue(e.target.innerText);
        setSuggestionsActive(false);
    };

    const handleKeyDown = (e) => {
        // UP ARROW
        if (e.keyCode === 38) {
            if (suggestionIndex === 0) {
                return;
            }
            setSuggestionIndex(suggestionIndex - 1);
        }
        // DOWN ARROW
        else if (e.keyCode === 40) {
            if (suggestionIndex - 1 === suggestions.length) {
                return;
            }
            setSuggestionIndex(suggestionIndex + 1);
        }
        // ENTER
        else if (e.keyCode === 13) {
            setValue(suggestions[suggestionIndex]);
            setSuggestionIndex(0);
            setSuggestionsActive(false);
        }
    };

    const Suggestions = () => {
        return (
            <ul className="suggestions m-1 rounded fixed z-20 w-1/4 border-slate-300 border-2" style={{backgroundColor : "white",cursor: "pointer"}}>
                {suggestions.map((suggestion, index) => {
                    return (
                        <li
                            className={index === suggestionIndex ? "active" : ""}
                            key={index}
                            onClick={handleClick}
                            style={{borderBottomWidth : "1px",boxShadow : "1px #e2e2e2" ,paddingLeft: "10px", paddingTop: "10px",color: "rgb(4,120,27)"}}
                        >
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className="autocomplete w-1/2">
            <label className="relative block ">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <AiOutlineSearch className='text-emerald-700' />
                </span>
                <input className="text-emerald-700 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search for player..."
                    type="text"
                    name="search"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </label>
            {suggestionsActive && <Suggestions />}
        </div>
    );

};

export default SearchBar;