import { IoLocationOutline } from "react-icons/io5";
import Footer from "../components/Footer";

export default function Destinations(){

    const destinations = [
        {
            id:1,
            location:'Uganda',
            name:'Bwindi Impenetrable Forest',
            about:"Home to nearly half the world's remaining mountain gorillas, Bwindi Impenetrable Forest is a UNESCO World Heritage Site of extraordinary biodiversity. Trek through misty forests guided by expert trackers, spend an hour with a gorilla family, and stay in luxury eco-lodges supporting conservation and local communities.",
            best:'June - September, December - February',
            highlights:[
                "Mountain Gorilla Trekking",
                "Luxury eco-lodges",
                "Ancient rainforest",
                "Community visits"
            ],
            image:'https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YndpbmRpfGVufDB8fDB8fHww'
        },
        {
            id:2,
            location:'Uganda',
            name:'Bwindi Impenetrable Forest',
            about:"Home to nearly half the world's remaining mountain gorillas, Bwindi Impenetrable Forest is a UNESCO World Heritage Site of extraordinary biodiversity. Trek through misty forests guided by expert trackers, spend an hour with a gorilla family, and stay in luxury eco-lodges supporting conservation and local communities.",
            best:'June - September, December - February',
            highlights:[
                "Mountain Gorilla Trekking",
                "Luxury eco-lodges",
                "Ancient rainforest",
                "Community visits"
            ],
            image:'https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YndpbmRpfGVufDB8fDB8fHww'
        },
    ]

    return(
        <div className="relative">
            <div className="text-white flex flex-col gap-5 justify-center h-[100vh] px-10 hero-image-destination">
                <div className="flex items-center gap-2 ">
                    <hr className="w-10 text-green-600 h-0.5"/>
                    <p>DISCOVER EAST AFRICA</p>
                </div>
                <p className="text-8xl">Our Destinations</p>
                <p className="text-xl">From Uganda's misty mountains and ancient forests to the endless <br />  plains of Tanzania and Kenya— explore East Africa's most <br /> extraordinary destinations.</p>
                
            </div>
            <div className="px-20 py-10 flex flex-col gap-32">
                {
                    destinations.map((destination) => (
                        <div key={destination.id} className={`flex gap-16 items-center ${destination.id % 2 == 0 ? "flex-row-reverse" : "flex-row"}`}>
                            <img src={destination.image} className="rounded-2xl hover:scale-105 h-1/2"/>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center text-md">
                                    <IoLocationOutline className="text-green-600"/>
                                    <p>{destination.location}</p>
                                </div>
                                <p className="text-gray-900 text-5xl">{destination.name}</p>
                                <p className="text-gray-600 text-xl mb-5">{destination.about}</p>
                                <div className="flex items-center gap-2">
                                    <IoLocationOutline className="text-green-600"/>
                                    <p className="text-gray-500">Best Time: {destination.best}</p>

                                </div>
                                <hr />
                                <div className="flex flex-col gap-2">
                                    <p className="font-medium">HIGHLIGHTS</p>
                                    <ul className="grid grid-cols-2 gap-y-1.5">
                                        {destination.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-center gap-1 text-gray-500">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="flex items-center gap-2 border px-5 py-4 w-75 hover:bg-green-600 hover:text-white hover:cursor-pointer transition-all duration-300">CUSTOMIZE THIS JOURNEY <span><IoLocationOutline /></span></button>

                            </div>

                        </div>
                    ))
                }

            </div>
            <Footer />
        </div>
        
    )
}