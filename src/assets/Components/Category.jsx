import React from 'react';

const Category = () => {
    const { id } = useParams();
    return (
        <div>
         <h2>Category {id} Selected</h2>
        </div>
    );
};

export default Category;
