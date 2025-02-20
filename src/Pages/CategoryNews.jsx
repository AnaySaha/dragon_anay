import { useLoaderData } from "react-router-dom";
import NewsCard from "../assets/Components/NewsCard";

const CategoryNews = () => {
    const news = useLoaderData() || [];
    console.log(news);
    const apiResponse = useLoaderData();
console.log("API Response:", apiResponse);


    return (
        <div className="">
            <h2 className="font-semibold mt-3">Dragon News Home</h2>
            <p className="text-gray-400 text-sm"> {news.length > 0 ? `${news.length} News Found in This Category` : "No News Found in This Category"}</p> 
            <div>
            {news.length > 0 ? (
                news.map((singleNews) => (
                    <NewsCard key={singleNews._id} news={singleNews} />
                ))
            ) : (
                <p className="text-gray-500 text-center">No news available.</p>
            )}
        </div>

        </div>
    );
};

export default CategoryNews;
