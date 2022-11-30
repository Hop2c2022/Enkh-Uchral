import '../App.css';
// import {Header} from './components/Header'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
export const Api = () => {
  const [info, setInfo] = useState("");
  useEffect(() => {
    const dataAvagc = async () => {
      const result = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=dbc823c792e9fac530de69b22661fcd7&language=en-US&page=1"
      );
      setInfo(result);
    };
    dataAvagc();
  }, []);
  console.log(info);
  {info?.data?.results?.map((el) => {
    return (
      <Link to="/watch">
        <img
          src={`https://image.tmdb.org/t/p/w500${el?.backdrop_path}`}
          style={{
            width: "430px",
            borderRadius: "8px",
            paddingRight: "30px",
          }}
          className="netflixcard"
        />
      </Link>
    );
  })}
};