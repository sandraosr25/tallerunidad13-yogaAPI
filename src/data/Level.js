import { useState, useEffect} from "react";

export default function Level() {
    const [beginner, setBeginner] = useState([]);
   //const [intermediateLevel, setIntermediateLevel] = useState([]);

    const reqApiLevels = async () => {
        const api2 = await fetch('https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner')
       // const api3 = await fetch('hhttps://yoga-api-nzy4.onrender.com/v1/categories?id=5&level=intermediate')
        const beginnerApi = await api2.json();
        console.log(beginnerApi.poses);
        const arrayBeginner = beginnerApi.poses;  
        setBeginner(arrayBeginner);      
    }
  
    //const intermediateApi = await api3.json();
    //setIntermediateLevel(intermediateApi);

    useEffect(() =>{
        reqApiLevels();
    }, []);

    return(
        <div>
            {beginner.map((posture) => (
                <div className='item-content' key={posture.id}>
                     <h3 className='item-name'> {posture.english_name}</h3>
                </div>
            ))}
            {/*
           } <div>
            {intermediateLevel.map((intermediate) => (
                <div className='item-content' key={intermediate.id}>
                     <h3 className='item-name'> {intermediate.poses.english_name}</h3>
                </div>
            ))}
            </div>*/}
        </div>
    );
}


