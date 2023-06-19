import { useState, useEffect} from "react";

export default function Category() {
    const [categories, setCategories] = useState([]);

    const reqApiCategory = async () => {
        const api1 = await fetch('https://yoga-api-nzy4.onrender.com/v1/categories')
        const categoriesApi = await api1.json();
        setCategories(categoriesApi);
    }

    useEffect(() =>{
        reqApiCategory()
    });

    return(
        <div>
            {categories.map((category) => (
                <div className='item-content' key={category.id}>
                     <h3 className='item-name'> {category.category_name}</h3>
                </div>
            ))}
        </div>
    );
}


