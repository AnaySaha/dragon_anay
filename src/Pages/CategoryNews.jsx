import { data, useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const { data:news } = useLoaderData();
    console.log(news);

    return (
        <div className="">
            <h2 className="font-semibold mt-3">Dragon News Home</h2>
            <p className="text-gray-400 text-sm"> {news.length} News Found in This Category</p> 
            <div>
            {news.map((singleNews) => (
                <li>{singleNews.title}</li>
            )
            )
            }
        </div>

        </div>
    );
};

export default CategoryNews;