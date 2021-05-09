import { useEffect, useState } from "react";
import axios from "../../axios";
import Video from "../Video/Video";


const Videos = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        console.log('video componnet mount');

        axios.get('video/').then(response => {
            setData(response.data);
        })
    }, []);


    return (
        <>  
            { data.map(item => <Video key={item.id} data={item}/>)}
        </>
    )
}

export default Videos;