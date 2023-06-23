import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Logout from "../components/Logout";
import Item from "../components/Item";
import Categories from "../data/Categories";

export default function Listado() {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState('');

    const [postures, setPostures] = useState([]);
    const [filters, setFilters] = useState(null);
    const [filteredPoses, setFilteredPoses] = useState([]);

    const doFetch = async () => {
        const api = await fetch('https://yoga-api-nzy4.onrender.com/v1/categories')
        const data = await api.json();
        const postures = data.map(category => category.poses).flat();
        setPostures(postures);
    }

    useEffect(() => {
        doFetch()
    }, []);

    useEffect(() => {
        let temp = postures?.filter(posture => posture.category_name === filters)
        setFilteredPoses(temp);
    }, [filters]);

    const onItemClick = (itemId) => {
        const selectedItem = postures.find((posture) => posture.id === itemId);
        setSelectedItem(selectedItem);
        localStorage.setItem('item', JSON.stringify(selectedItem));
        console.log(selectedItem);
        navigate("/detalle");
    };

    return (
        <>
            <div >
            <Logout />
            <div>
                <h3>Click on a posture to get the details or filter by category: </h3>
                <Categories setFilters={setFilters} />
            </div>
                <div className='listado'>
                    {filteredPoses.length !== 0 ? (
                        <div className='item-list'>
                            {filteredPoses.map((posture) => (
                                <Item key={posture.id} item={posture} onItemClick={onItemClick} />
                            ))}
                        </div>
                    ) : (
                        <div className='item-list'>
                            {postures.map((posture, index) => (
                                <Item key={`item-${index}`} item={posture} onItemClick={onItemClick} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Logout />
        </>
    );
}