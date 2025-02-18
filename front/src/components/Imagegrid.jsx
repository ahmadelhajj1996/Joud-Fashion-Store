import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Imagegrid(props) {
    const {language , currency , direction} = useSelector((state) => state.general);
    const { items, columns, imageCLass, details = {} ,  detailsClass } = props
    return (
        <div dir={direction}>
            <div className={`grid justify-center items-center ${columns}`}>
                {items.map((item, index) => (
                    <Link key={index} to={item.link} className="cursor-pointer relative">
                        <img
                            src={item.image}
                            className={imageCLass}
                        />
                        {details.text &&  <h2 className="absolute start-2 bottom-10 text-xl uppercase  text-white">{item.text}</h2> }
                        <div className= {`flex flex-col   ${detailsClass}  `}  >

                            {details.title && <h1 className="text-sm text-gray-900   ">{item.title[language]}</h1>}

                            {details.price && item.variations.length > 0 && (
                                    // <p className="image_top_title ps-0 pt-3 text-sm/4">
                                    //      ${item.variation[0].attributes.price}
                                    // </p>
                                    <p className="text-sm/8 text-gray-800  ">$35</p>    // currency
                            )}
                            {details.description && (
                                <p className="paragraph p-0 line-clamp-3 ">{item.description[language]}</p>
                            )}
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Imagegrid;
