import { useState, useEffect } from "react";

const Categories = ({ setFilters }) => {
    const [categories, setCategories] = useState([]);

    const reqApiCategory = async () => {
        const api1 = await fetch('https://yoga-api-nzy4.onrender.com/v1/categories')
        const categoriesApi = await api1.json();
        const categoriesArray = categoriesApi.map(category => category.category_name).flat();
        setCategories(categoriesArray);
    }

    useEffect(() => {
        reqApiCategory()
    }, []);

    return (
        <div className="categories">
            <button className="category-button" onClick={() => setFilters(null)}>Show all categories</button>
            {categories.map(category => (
                <button key={category} className="category-button" onClick={() => setFilters(category)}>{category}</button>
            ))}
        </div>
    );
}

export default Categories;

