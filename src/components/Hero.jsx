export default function Hero(){
    
    return(
        <div className="max-w-[1640px] mx-auto p-4  ">
            <div className="relative">
                <div className="bg-black/40 absolute h-full w-full text-gray-200 flex flex-col justify-center font-bold pl-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">The <span className="text-orange-500">Best</span></h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"><span className="text-orange-500">Foods</span> Delivered</h1>

                </div>
                <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="max-h-[500px] w-full object-cover" />
            </div>
            
        </div>
    )
}
// Image ke upar overlay lagane ke liye ham ek parent element lete hain jiski position relative set kar dete hain. Uske undar hamara overlay hoga. Overlay ki position absoute rahegi. Overlay ka sibling image hoga. Overlay mein agar kuch likhna hai to us div ke undar aa jayega