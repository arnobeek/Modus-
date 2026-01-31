import Footer from "../components/Footer";

export default function Experiences(){

    const experiences = [
        {
            id:1,
            icon:"",
            name:'Photography Journeys',
            image:"https://images.unsplash.com/photo-1626569846723-faf43927df8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbGRsaWZlJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
            info:"Capture Uganda's beauty with guidance from professional wildlife photographers.",
            activities:[
                "Golden hour shoots",
                "Expert guidance",
                "Bird photgraphy",
                "Landscape workshops"
            ]
        }
    ]

    return(
        <div>
            <div className="text-white flex flex-col gap-5 justify-center h-[100vh] px-10 hero-image-experiences">
                <div className="flex items-center gap-2 ">
                    <hr className="w-10 text-green-600 h-0.5"/>
                    <p>EXPERIENCE UGANDA</p>
                </div>
                <p className="text-8xl">Curated Experiences</p>
                <p className="text-xl">Beyond wildlife viewing, we create immersive experiences that <br /> connect you with East Africa's soul— its people, cultures, <br /> landscapes, and conservation efforts.</p>
                
            </div>
            <div>
                
            </div>
            <Footer />
        </div>
    )
}