import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {

    const destinations = [
        "Bwindi Impenetrable Forest",
        "Murchison Falls National Park",
        "Kibaale Forest and Queen Elizabeth",
        "Serengeti and Ngorongoro",
        "Masai Mara and Amboseli",
        "Kidepo Valley and Northern Uganda"
    ]
    const durations = [
        "2-4 Days",
        "5-7 Days",
        "8-10 Days",
        "11-13 Days",
        "14-16 Days",
        "17+ Days"
    ] 
    const travelStyles = [
        "Gorilla Trekking",
        "Wildlife Safari",
        "Cultural Immersion",
        "Photography Expedition",
        "Luxury Safari"
    ]
    const treasures = [
        {
            id:1,
            name:'Bwindi Impenetrable Forest',
            location:'Uganda',
            info:'Trek through ancient rainforest to encounter endangered mountain gorillas in their natural habitat—an experience that changes lives.',
            image:'https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YndpbmRpJTIwaW1wZW5ldHJhYmxlJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww'
        },
        {
            id:2,
            name:'Murchison Falls National Park',
            location:'Uganda',
            info:'Trek through ancient rainforest to encounter endangered mountain gorillas in their natural habitat—an experience that changes lives.',
            image:'https://images.unsplash.com/photo-1704183683740-1400a49816b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVyY2hpc29uJTIwZmFsbHN8ZW58MHx8MHx8fDA%3D'
        },
        {
            id:3,
            name:'Kidepo Valley National Park',
            location:'Uganda',
            info:'Trek through ancient rainforest to encounter endangered mountain gorillas in their natural habitat—an experience that changes lives.',
            image:'https://images.unsplash.com/photo-1518709368567-b22d4217b91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lyYWZmZXN8ZW58MHx8MHx8fDA%3D'
        },
        {
            id:4,
            name:'Lake Mburo National Park',
            location:'Uganda',
            info:'Trek through ancient rainforest to encounter endangered mountain gorillas in their natural habitat—an experience that changes lives.',
            image:'https://images.unsplash.com/photo-1553521306-9387d3795516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMG1idXJvfGVufDB8fDB8fHww'
        },
        {
            id:5,
            name:'Masai Mara National Reserve',
            location:'Kenya',
            info:'Trek through ancient rainforest to encounter endangered mountain gorillas in their natural habitat—an experience that changes lives.',
            image:'https://images.unsplash.com/photo-1554990772-0bea55d510d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFzYWklMjBtYXJhfGVufDB8fDB8fHww'
        },
        {
            id:6,
            name:'Serengeti Migration',
            location:'Tanzania',
            info:'Witness the greatest wildlife spectacle on Earth as millions of wildebeest thunder across the endless plains.',
            image:'https://images.unsplash.com/photo-1580145575237-75fec2a0320b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VyZW5nZXRpfGVufDB8fDB8fHww'
        },
        
        
    ]

    const navigate = useNavigate()

    return (
        <div>
            <div className="flex justify-center h-[110vh] hero-image-home  ">
                <div className="flex flex-col justify-center text-white items-center w-250">
                    <p className="font-bold text-8xl">East Africa, <br />Reimagined</p>
                    <p className="text-4xl mt-10">Discover East Africa's misty mountains, ancient forests, and extraordinary wildlife through bespoke luxury safaris.</p>
                </div>
            </div>
            <div className="flex flex-col gap-10 h-[60vh] shadow z-50 justify-self-center w-320 -mt-20 bg-gray-100 px-8 py-10 mb-20">
                <div>
                    <p className="text-4xl font-medium text-gray-900">Tailor-Made Journey</p>
                    <p className="text-gray-600">Design your perfect East African adventure</p>
                </div>
                <div className="flex justify-between gap-5">
                    <div className="flex flex-col gap-3 w-full">
                        <label className="text-gray-600">DESTINATION</label>
                        <select className="text-gray-500">
                            <option>Select a destination</option>
                            {destinations.map((d, index) => (
                                <option value={d} key={index}>{d}</option>
                            ))}
                        </select>
                        <hr />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <label className="text-gray-600">DURATION</label>
                        <select className="text-gray-500">
                            <option>Select duration</option>
                            {durations.map((d, index) => (
                                <option value={d} key={index}>{d}</option>
                            ))}
                        </select>
                        <hr />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <label className="text-gray-600">TRAVEL STYLE</label>
                        <select className="text-gray-500">
                            <option>Select style</option>
                            {travelStyles.map((t, index) => (
                                <option value={t} key={index}>{t}</option>
                            ))}
                        </select>
                        <hr />
                    </div>
                    
                </div>
                <button className="border w-60 px-1 py-2 text-lg font-medium bg-[#3a5a40] text-white hover:cursor-pointer hover:scale-105 transition-all duration-300">EXPLORE JOURNEYS</button>
            </div>
            <div className="px-25 mb-10">
                <p className="text-5xl mb-20 text-[#3a5a40]">  Discover East Africa's Hidden <br /> Treasures </p>
                <div className="grid grid-cols-2">
                    {
                        treasures.map(treasure => (
                            <div key={treasure.id} className=" flex flex-col gap-3 px-5 mb-10">
                                <div className="mb-5">
                                    <img src={treasure.image} className="rounded-md hover:scale-105 transition-all duration-350"/>
                                </div>
                                <p className="text-3xl font-medium">{treasure.name}</p>
                                <p className="text-sm text-gray-600">{treasure.location}</p>
                                <p>{treasure.info}</p>
                            </div>
                        ))
                    }

                </div>
                <button className="flex gap-2 justify-self-center border px-6 py-2 bg-[#3a5a40] text-white text-lg hover:cursor-pointer hover:justify-between hover:gap-4 hover:scale-105 transition-all duration-300" onClick={() => navigate("/destinations")}>DISCOVER MORE <span>&gt;</span></button>
            </div>

            <Footer />
        </div>
    )
}