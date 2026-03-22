"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Detalhes() {
  const params = useParams();
  const id = params.id;

  const [character, setCharacter] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    async function load() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharacter(data);
    }

    load();
  }, [id]);

  if (!character) {
    return <p style={{ color: "white", textAlign: "center" }}>Carregando...</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        backgroundColor: "#000",
        color: "#7fffd4",
        fontFamily: "var(--font-rick)",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px", color: "#00ffcc" }}>
        {character.name}
      </h1>

      <img
        src={character.image}
        alt={character.name}
        style={{
          width: "250px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      />

      <p>Status: {character.status}</p>
      <p>Espécie: {character.species}</p>
      <p>Gênero: {character.gender}</p>
      <p>Origem: {character.origin.name}</p>
    </div>
  );
}