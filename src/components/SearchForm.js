import { useState } from "react";
// @refresh false
export default function SearchForm({
  defaultImage,
  setDefaultImage,
  data,
  setData,
}) {
  const [input, setInput] = useState("");

  async function handleSearch(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${input}.json`
      );
      const { data } = await res.json();
      console.log(data);
      setDefaultImage(false);
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form className="search form">
      <label>Enter Champions Name</label>
      <input
        type="text"
        placeholder="Aatrox"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={(e) => handleSearch(e)}>Search</button>
    </form>
  );
}
