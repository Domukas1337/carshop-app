'use client'

import Image from "next/image"
import { useState } from "react"

interface Car {
    name: string
    image: string
    id: string
    price: number
}

const cars: Car[] = [{
    name: "BMW M5",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/50723/m5-exterior-right-front-three-quarter-2.jpeg?q=80",
    id: "0",
    price: 10000
}, 
{
    name: "AUDI A8",
    image: "https://i.pinimg.com/originals/2d/a1/a8/2da1a8b66a8a541c84761a6712feab4f.png",
    id: "1",
    price: 100000
},
{
    name: "HONDA CIVIC",
    image: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/36aff300-8c88-45e3-b717-d3f66436fe19/959ba0f6-22b5-43a6-8eba-f6114eaaf96a.png",
    id: "2",
    price: 1000
},
]

export default function CarsMain() {
    const [imageSrc, setImageSrc] = useState(cars[0].image);
    const [selectedCar, setSelectedCar] = useState<Car>(cars[0]); ;
    const defaultText = 'Select a car'
    
    const setImage = (car: Car) => {
        let imageSrc = '';   
        switch (car.id) {
            case '0':
                imageSrc = 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/50723/m5-exterior-right-front-three-quarter-2.jpeg?q=80';
                break;
            case '1':
                imageSrc = 'https://i.pinimg.com/originals/2d/a1/a8/2da1a8b66a8a541c84761a6712feab4f.png';
                break;
            case '2':
                imageSrc = 'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/36aff300-8c88-45e3-b717-d3f66436fe19/959ba0f6-22b5-43a6-8eba-f6114eaaf96a.png';
                break;
            default:
                break;
            }
        return imageSrc
};
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            const car = cars.find((car) => car.id === event.currentTarget.id);
                if (car) {
                    setImageSrc(setImage(car));
                    setSelectedCar(car);
                }
            }
    return (
        <div className="flex flex-wrap h-screen justify-center items-center mx-auto">
            <div className="border-2 border-blue-200 rounded-lg shadow-md">
                <div className="border border-gray-200 rounded-lg shadow-md">
                    <ul className="rounded-md m-2">
                        {cars.map((car) => (
                            <li key={car.name} className="text-center">
                                <div className={selectedCar?.id === car.id ? 'clicked' : 'w-full border-2 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-150'} id={car.id}>
                                    <button className="m-2" id={car.id} onClick={handleClick}>{car.name}</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border-2 border-gray-200 rounded-lg shadow-md m-2">
                    <Image
                        src={imageSrc}
                        alt={defaultText}
                        width={600}
                        height={400}
                        loading="lazy"
                        className="rounded-md transition-all duration-300 hover:scale-100 hover:opacity-50"
                        />
                </div>
                <div className="text-center">
                    <p>Price: {selectedCar.price}$</p> 
                </div>
                <div className="text-center mb-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-150">Add to cart</button> 
                </div>
            </div>
        </div>
    )
}