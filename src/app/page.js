"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
function page({ searchParams }) {
  const [mylist, setMyList] = useState([]);
  const genre = searchParams.genre || "Popular";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          genre === "TopRated" ? `top_rated` : `popular`
        }?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => setMyList(res.data.results))
      .catch((err) => console.log("something wrong:", err));

  }, [genre, API_KEY]);
  console.log(mylist)

  return (
    <div>
      {mylist.map((item, i) => (
        <h1 key={i}> {item.title} </h1>
      ))}
    </div>
  );
}

export default page;
