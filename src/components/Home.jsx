import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Vector.png";
import { Footer } from "./Footer.jsx";
import Title from "../mtitle.png";
import { Button } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const Header = () => {
  const [tv, setTv] = useState("");
  const [movie, setMovie] = useState("");
  const [movie2, setMovie2] = useState("");
  const [movie3, setMovie3] = useState("");
  const [movie4, setMovie4] = useState("");
  const [movie5, setMovie5] = useState("");
  useEffect(() => {
    const dataAvagc = async () => {
      const result = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=dbc823c792e9fac530de69b22661fcd7&language=en-US&page=1"
      );
      const kino = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dbc823c792e9fac530de69b22661fcd7&language=en-US&page=1"
      );
      const kino2 = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dbc823c792e9fac530de69b22661fcd7&language=en-US&page=2"
      );
      const kino3 = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dbc823c792e9fac530de69b22661fcd7&language=en-US&page=3"
      );
      const kino4 = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dbc823c792e9fac530de69b22661fcd7&language=en-US&page=4"
      );
      const kino5 = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dbc823c792e9fac530de69b22661fcd7&language=en-US&page=5"
      );
      setTv(result);
      setMovie(kino);
      setMovie2(kino2);
      setMovie3(kino3);
      setMovie4(kino4);
      setMovie5(kino5);
    };
    dataAvagc();
  }, []);
  console.log(tv);
  console.log(movie);
  console.log(movie2);
  console.log(movie3);
  console.log(movie4);
  console.log(movie5);

  return (
    <div className="container">
      <div className="page1" style={{ width: "100vw" }}>
        <div className="header d-flex flex-row mt-5" style={{ width: "40%" }}>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div
            className="navbar d-flex justify-content-around"
            style={{ width: "700px" }}
          >
            <Link className="hd" to={"/"}>
              Home
            </Link>
            <Link className="hd" to={"/genre/83"}>
              TV Shows
            </Link>
            <Link className="hd" to={"/genre/34399"}>
              Movies
            </Link>
            <Link className="hd" to={"/latest"}>
              Latest
            </Link>
            <Link className="hd" to={"/browse/my-list"}>
              My List
            </Link>
            <Link className="hd" to={"/browse/original-audio"}>
              Browse by Languages
            </Link>
          </div>
          <div className="search"></div>
        </div>
        <div className="title">
          <img
            style={{
              width: "900px",
              height: "400px",
              marginTop: "150px",
              marginLeft: "100px",
            }}
            src={Title}
            alt=""
          />
        </div>
        <div className="tailbar">
          A TV producer discovers a secret supernatural world as she becomes
          entangled with a former deity who's spent centuries searching for his
          lost lover.
        </div>
        <div className="bttn">
          <Button
            style={{
              display: "flex",
              justifyContent: "row",
              alignItems: "center",
              marginLeft: "100px",
              marginTop: "30px",
              height: "60px",
              width: "150px",
              borderRadius: "5px",
            }}
          >
            <svg
              width="67"
              height="30"
              viewBox="0 0 11 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 14.925V0.924999L11 7.925L0 14.925Z" fill="black" />
            </svg>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Play
            </div>
          </Button>
          <Button
            style={{
              display: "flex",
              justifyContent: "row",
              alignItems: "center",
              marginLeft: "100px",
              marginTop: "30px",
              height: "60px",
              width: "200px",
              borderRadius: "5px",
              backgroundColor: "#6D6D6EB3",
            }}
          >
            <svg
              width="40"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.325 15H10.825V9H9.325V15ZM10 7.15C10.2333 7.15 10.4292 7.075 10.5875 6.925C10.7458 6.775 10.825 6.58333 10.825 6.35C10.825 6.11667 10.7458 5.91667 10.5875 5.75C10.4292 5.58333 10.2333 5.5 10 5.5C9.76667 5.5 9.57083 5.58333 9.4125 5.75C9.25417 5.91667 9.175 6.11667 9.175 6.35C9.175 6.58333 9.25417 6.775 9.4125 6.925C9.57083 7.075 9.76667 7.15 10 7.15V7.15ZM10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3583 0 9.975C0 8.60833 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.02917 3.825 2.9375 2.925C3.84583 2.025 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.64167 0 10.025 0C11.3917 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3667 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.975 16.1542 17.075 17.0625C16.175 17.9708 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10.025 18.5C12.375 18.5 14.375 17.6708 16.025 16.0125C17.675 14.3542 18.5 12.3417 18.5 9.975C18.5 7.625 17.675 5.625 16.025 3.975C14.375 2.325 12.3667 1.5 10 1.5C7.65 1.5 5.64583 2.325 3.9875 3.975C2.32917 5.625 1.5 7.63333 1.5 10C1.5 12.35 2.32917 14.3542 3.9875 16.0125C5.64583 17.6708 7.65833 18.5 10.025 18.5Z"
                fill="white"
              />
            </svg>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              More Info
            </div>
          </Button>
        </div>
      </div>
      <div className="api">
        {movie?.data?.results?.map((el) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/w500${el?.backdrop_path}`}
              style={{
                width: "430px",
                borderRadius: "8px",
                marginRight: "30px",
              }}
              className="netflixcard"
            />
          );
        })}
      </div>
      <div className="api">
        {tv?.data?.results?.map((el) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/w500${el?.backdrop_path}`}
              style={{
                width: "430px",
                borderRadius: "8px",
                marginRight: "30px",
              }}
              className="netflixcard"
            />
          );
        })}
      </div>
      <div className="api">
        {movie2?.data?.results?.map((el) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/w500${el?.backdrop_path}`}
              style={{
                width: "430px",
                borderRadius: "8px",
                marginRight: "30px",
              }}
              className="netflixcard"
            />
          );
        })}
      </div>

      <div className="api">
        {movie3?.data?.results?.map((el) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/w500${el?.backdrop_path}`}
              style={{
                width: "430px",
                borderRadius: "8px",
                marginRight: "30px",
              }}
              className="netflixcard"
            />
          );
        })}
      </div>

      <div className="api">
        {movie4?.data?.results?.map((el) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/w500${el?.backdrop_path}`}
              style={{
                width: "430px",
                borderRadius: "8px",
                marginRight: "30px",
              }}
              className="netflixcard"
            />
          );
        })}
      </div>

      <div className="api">
        {movie5?.data?.results?.map((el) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/w500${el?.backdrop_path}`}
              style={{
                width: "430px",
                borderRadius: "8px",
                marginRight: "30px",
              }}
              className="netflixcard"
            />
          );
        })}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
