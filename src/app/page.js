"use client";

import Card from "@/components/Card";
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
        }?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revaidate: 10 } }
      )
      .then((res) => setMyList(res.data.results))
      .catch((err) => console.log("something wrong:", err));
  }, [genre, API_KEY]);

  return (
    <>
      {/* <h1>{mylist.title}</h1> */}
      <Card result={mylist} />
    </>
  );
}

export default page;
