import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-red-200">
          <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p> 
        <Marquee pauseOnHover speed={50} className="space-x-10">  
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
         </p>
         
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
         </p>

         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
         </p>
            
        </Marquee>
</div>
    );
};

export default LatestNews;