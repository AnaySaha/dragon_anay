import { useParams } from "react-router-dom";

const Category = () => {
    const { id } = useParams();
    return (
        <div>
         <h2>Category {id} Selected</h2>
        </div>
    );
};

export default Category;
