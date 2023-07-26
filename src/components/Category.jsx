import {categories} from "../data/data.js"
export default function category(){
    return(
        <div className="max-w-[1640px] mx-auto p-4 mt-12">
            <h2 className="text-center text-orange-500 font-bold text-4xl">Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
                {categories.map((category)=>(
                    <div className="bg-slate-100 flex max-w-[400px] max-h-[200px] justify-between items-center p-4 rounded-lg">
                        <p className="font-bold text-lg">
                            {category.name}
                        </p>
                        <img src={category.image} alt="" className="max-w-100px max-h-[100px]"/>
                    </div>
                ))}

            </div>

        </div>
    )
}