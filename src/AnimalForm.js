// serpapi.com/ Google Search API
import React, { useState } from "react"

// random adjectives
let randomAdjectives = [
  "aggressive ",
  "fast ",
  "poisonous",
  "dangerous",
  "dirty",
  "clean",
  "slow ",
  "little",
  "big",
  "small"
]
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
console.log("Testing: " + randomAdjective);

const AnimalForm = () => {
  const [query, setQuery] = useState("");
  const [Images, setImages] = useState([]);

  function handleSubmit(e) {
    getImagesData();
    e.preventDefault();
  }

  // https://serpapi.com/search.json?q=randomAdjectives+${query}&tbm=isch&ijn=1
  async function getImagesData() {
    const URL = `https://serpapi.com/search.json?q=${query}&tbm=isch&ijn=1`

    const fetching = await fetch(URL);
    const toJson = await fetching.json();
    setImages(toJson.results);
    console.log(URL);
  }

  // setQuery((randomAdjective = randomAdjective + e.target.value));
  function handleChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
    console.log("rendered");
  }

  return (
    <>
      <h1 className="mt-20 text-2xl font-bold text-center ">
        Enter your Favourite Animal
      </h1>
      <p className="mt-2 text-xl font-bold text-center text-gray-600">
        {" "}
        {randomAdjective + " " + query}
      </p>

      <form
        onSubmit={handleSubmit}
        className="relative max-w-md mx-auto mt-5 rounded-lg shadow"
      >
        <div className="relative flex items-center w-full h-12 overflow-hidden rounded-lg focus-within:shadow-lg">
          <div className="grid w-12 h-full text-gray-300 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Enter Image name"
            maxLength="20"
            minLength="2"
            required
            className="outline-none"
          />
          <button className="absolute text-gray-500 right-10" type="submit">
            Search
          </button>
        </div>
      </form>

      {Images.map((Image) => (
        <div classNameName="Image-card" key={Image.id}>
          <img
            src={Image.images_results[0].thumbnail}
            alt={Image.poster_path}
          />
        </div>
      ))}
    </>
  );
};

export default AnimalForm;
