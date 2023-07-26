import { useState } from "react"
import {data} from "../data/data.js"
export default function Food(){
    const [food, setFood] = useState(data)
    const [selectedType, setSelectedType] = useState("all")
    const [selectedPrice, setSelectedPrice] = useState("")
    const handleType = (evt) => {
        const newFood = data.filter((item)=>(item.category===evt.target.name))        
        setFood(newFood)
        setSelectedType(evt.target.name)
    }
    const handlePrice = (evt) => {
        const newPrice = data.filter((item)=>(item.price===evt.target.name))
        setFood(newPrice)
        setSelectedPrice(evt.target.name)
        setSelectedType("")
    }
    return(
        <div className="max-w-[1640px] p-4 mx-auto">
            <h2 className="text-center text-orange-500 font-bold text-4xl">Top Rated Menu Items</h2>
            <div className="flex flex-col lg:flex-row justify-between gap-y-4">
                <div className="flex flex-col justify-between font-bold gap-y-1">
                    <p>Filter Type</p>
                    <div className="flex flex-wrap gap-x-2 text-orange-500 font-normal">
                        <button className={`border-orange-500 hover:bg-orange-500 hover:text-white ${selectedType==="all" ? "bg-orange-500 text-white" : ""}`} onClick={()=>{
                            setFood(data)
                            setSelectedType("all")
                            setSelectedPrice("")
                        }} name="all">
                            All
                        </button>
                        <button className={`border-orange-500 hover:bg-orange-500 hover:text-white ${selectedType==="burger" ? "bg-orange-500 text-white" : ""}`} onClick={handleType} name="burger">Burgers</button>
                        <button className={`border-orange-500 hover:bg-orange-500 hover:text-white ${selectedType==="pizza" ? "bg-orange-500 text-white" : ""}`} onClick={handleType} name="pizza">Pizza</button>
                        <button className={`border-orange-500 hover:bg-orange-500 hover:text-white ${selectedType==="salad" ? "bg-orange-500 text-white" : ""}`} onClick={handleType} name="salad">Salads</button>
                        <button className={`border-orange-500 hover:bg-orange-500 hover:text-white ${selectedType==="chicken" ? "bg-orange-500 text-white" : ""}`} onClick={handleType} name="chicken">Chicken</button>
                    </div>                    
                </div>
                <div className="flex flex-col justify-between font-bold gap-y-1">
                    <p>Filter Price</p>
                    <div className="flex gap-x-2 text-orange-500 font-normal">
                        <button className={`border-orange-500 hover:bg-orange-500 hover:text-white ${selectedPrice==="$" ? "bg-orange-500 text-white" : ""}`} onClick={handlePrice} name="$">$</button>
                        <button className={`border-orange-500 hover:bg-orange-500 hover:text-white ${selectedPrice==="$$" ? "bg-orange-500 text-white" : ""}`} onClick={handlePrice} name="$$">$$</button>
                        <button className={`border-orange-500 hover:bg-orange-500 hover:text-white ${selectedPrice==="$$$" ? "bg-orange-500 text-white" : ""}`} onClick={handlePrice} name="$$$">$$$</button>
                        <button className={`border-orange-500 hover:bg-orange-500 hover:text-white ${selectedPrice==="$$$$" ? "bg-orange-500 text-white" : ""}`} onClick={handlePrice} name="$$$$">$$$$</button>
                    </div>
                </div>                
            </div>
            {/* When you define only the grid columns and don't explicitly set the rows, the grid container will automatically generate rows as needed to hold the grid items. The items will be placed in the grid from left to right until it reaches the last column, and then it will move to the next row and continue the pattern. */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-bold mt-6">
                {food.map((item)=>(
                    <div className="max-w-full max-h-full rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-200">
                        <img src={item.image} alt="" className="max-h-[200px] h-full w-full object-cover" />
                        <div className="flex justify-between p-4 items-center">
                            <p>{item.name}</p>
                            <p className="bg-orange-500 rounded-full p-1 text-white font-normal">{item.price}</p>

                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    )
}