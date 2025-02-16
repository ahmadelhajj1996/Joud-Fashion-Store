import { useRef, useState } from "react";
import { handleClickOutside, useEventListeners } from "../utils/helpers";


function Search(props) {
    const { items } = props
    const [message, setMessage] = useState('')
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchOpen, setSearchOpen] = useState(false);
    const dropdownRef = useRef(null)
    const handleFocus = () => setSearchOpen(true)
    const handleClick = (e) => handleClickOutside(dropdownRef, e, [setSearchOpen(false), setMessage('')])
    useEventListeners(searchOpen, [
        { type: 'mousedown', handler: handleClick },
        // { type: 'keydown', handler: handleKey }
    ]);

    const changeInput = (e) => {
        const value = e.target.value;
        !searchOpen ? setSearchOpen(true) : '';
        setMessage(value);
        handleFocus
        const matchedItems = items.filter(category =>
            category.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredItems(matchedItems);
    }
    return (
        <>
            <div className="w-1/3 mx-auto relative ">
                <div className="flex justify-between px-4 py-1 text-sm w-full  rounded-full bordered   focus:outline-none focus:ring-0  focus:border-blue-600 "
                >
                    <input
                        type="text"
                        value={message}
                        onFocus={handleFocus}
                        onChange={changeInput}
                        placeholder="Search Here"
                        className="px-0 py-0 text-sm  font-lighter   w-full border-0 p-2 "
                    />
                    <div className="cursor-pointer" onClick={() => { setMessage(''); }}>x</div>
                </div>
                {searchOpen && filteredItems.length > 0 && message.length > 0  && <>
                    <div className="absolute top-10 w-full bg-white rounded-sm p-2 " ref={dropdownRef}>
                        <ul className="ps-2">
                            {/* the filtering here*/}

                            {filteredItems.map((category, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer text-xs transition-all duration-200"
                                >
                                    {category}
                                </li>
                            ))}

                        </ul>
                    </div>
                </>}
            </div>
        </>
    )
}

export default Search