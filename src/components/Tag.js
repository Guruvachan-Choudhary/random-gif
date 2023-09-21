import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    const[tag,setTag] = useState('car');
    const [gif, setGif] = useState('');
    const[loading, setLoading] = useState('false');
    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
          const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif( imageSource);
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    })
    function clickHandler() { 
        fetchData();
    }
    function changeHandler(event){
        setTag(event.target.value)
    }
    return (
        <div className=" flex flex-col  items-center  gap-y-5  mb-[20px] w-1/2  bg-orange-500 rounded-lg border border-black">
            <h1 className="text-2xl mt-[15px] underline uppercase font-bold">Random {tag} GIF</h1>
            {
                loading ? (<Spinner/>): (<img src={gif} alt="" width="450px" />)
            }
            <input type="" 
            className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
            onChange={ changeHandler}
            value={tag}></input>
            <button onClick={clickHandler} className="w-10/12 bg-red-800 text-lg py-2 rounded-lg mb-[20px] text-white">Generate</button>
        </div>
    );
};
export default Tag;