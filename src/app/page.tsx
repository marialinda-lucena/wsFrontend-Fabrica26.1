"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import { fetchCharacters } from "../components/API";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");

  useEffect(() => {
    async function load() {
      const data = await fetchCharacters();
      setCharacters(data);
    }
    load();
  }, []);

  const filtered = characters.filter((char: any) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />

      {/* SEARCH + BOTÃO CENTRALIZADOS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <SearchBar setSearch={setSearch} />

        <button
          onClick={() => setView(view === "grid" ? "list" : "grid")}
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #66fcf1",
            background: "#1f8f7a",
            color: "white",
            cursor: "pointer",
          }}
        >
          Mudar visualização
        </button>
      </div>

      {/* LISTA DE PERSONAGENS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            view === "grid" ? "repeat(3, 1fr)" : "1fr",
          gap: "15px",
          padding: "20px",
        }}
      >
        {filtered.map((char: any) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      <Footer />
    </div>
  );
}