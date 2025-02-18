import { useState, useEffect } from "react";

const images = [
    "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQK3zwv_Zl4-Yvie1xgTfd68hpKfNt3WQtex25znWMtcQDy6NM1KUql7mZaflyIllykaqroRr4-p7010uepV9E2zfXLDv97ArL0AoHnbg",
    "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQK3zwv_Zl4-Yvie1xgTfd68hpKfNt3WQtex25znWMtcQDy6NM1KUql7mZaflyIllykaqroRr4-p7010uepV9E2zfXLDv97ArL0AoHnbg",
    "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQK3zwv_Zl4-Yvie1xgTfd68hpKfNt3WQtex25znWMtcQDy6NM1KUql7mZaflyIllykaqroRr4-p7010uepV9E2zfXLDv97ArL0AoHnbg",
    "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQK3zwv_Zl4-Yvie1xgTfd68hpKfNt3WQtex25znWMtcQDy6NM1KUql7mZaflyIllykaqroRr4-p7010uepV9E2zfXLDv97ArL0AoHnbg",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

  

    return (
        <div className="relative w-full  mx-auto overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (

                    <div key={index} className="flex-shrink-0 w-full h-full relative"
                    >
                        <img

                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full sm:h-[400px] flex-shrink-0"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl md:text-4xl font-bold">slide.title</h2>
                            <p className="text-sm md:text-lg mt-2">slide.description slide.description slide.description slide.description slide.description slide.description slide.description slide.description</p>
                        </div>
                    </div>

                ))}
            </div>
            {/* <button
        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-inherit text-white"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-inherit text-white"
        onClick={nextSlide}
      >
        &gt;
      </button> */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-6 h-[2px] cursor-pointer  ${index === currentIndex ? "bg-cyan-600" : "bg-white"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
