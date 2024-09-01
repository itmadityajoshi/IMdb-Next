import Link from "next/link";
import Image from "next/image";

function Card({ result }) {
    const imageUrl = result.poster_path || result.backdrop_path;

//   const imageUrl = result.poster_path
//     ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
//     : null;
  console.log(imageUrl);
  //   console.log("Poster Path:", result.poster_path);
  //   console.log("Backdrop Path:", result.backdrop_path);

  console.log("Result Object:", result);

  return (
    <div>
      <Link href={`/${result.id}`}>
        {imageUrl ? (
          <Image
            src={`https://image.tmdb.org/t/p/original//${imageUrl}`}
            alt="movie posture"
            width={300}
            height={300}
          ></Image>
        ) : (
          <div style={{ width: 300, height: 300, backgroundColor: "#ccc" }}>
            <p>No Image Available</p>
          </div>
        )}
        
      </Link>

      <h1>{result.title}</h1>
    </div>
  );
}

export default Card;
