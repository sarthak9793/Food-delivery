export default function HeadlineCards(){
    
    return(
        <div className="max-w-[1640px] p-4 py-12 mx-auto grid md:grid-cols-3 gap-6 pb-20">
            {/* Card */}
            <div className="relative rounded-xl overflow-hidden">
                <div className="bg-black/50 absolute w-full h-full text-white p-2 py-4">
                    <p className="font-bold text-2xl">Sun's Out, BOGO's Out</p>
                    <p>Through 8/26</p>
                    <button className="bg-white text-black absolute bottom-4">Order Now</button>
                </div>
                <img src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="" className="max-h-[160px] md:max-h-[200px] w-full object-cover" />
            </div>
            <div className="relative rounded-xl overflow-hidden">
                <div className="bg-black/50 absolute w-full h-full text-white p-2 py-4">
                    <p className="font-bold text-2xl">New Restaurants</p>
                    <p>Added Daily</p>
                    <button className="bg-white text-black absolute bottom-4">Order Now</button>
                </div>
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="" className="max-h-[160px] md:max-h-[200px] w-full object-cover" />
            </div>
            <div className="relative rounded-xl overflow-hidden">
                <div className="bg-black/50 absolute w-full h-full text-white p-2 py-4">
                    <p className="font-bold text-2xl">We Deliver Desserts Too</p>
                    <p>Tasty Treats</p>
                    <button className="bg-white text-black absolute bottom-4">Order Now</button>
                </div>
                <img src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" className="max-h-[160px] md:max-h-[200px] w-full object-cover" />
            </div>
            
            
        </div>
    )
}