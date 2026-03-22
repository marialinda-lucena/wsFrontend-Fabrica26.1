import Link from "next/link";

export default function CharacterCard({ character }: any) {
  return (
    <Link href={`/detalhes/${character.id}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          border: "1px solid #00ffff",
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
          gap: "15px",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img
          src={character.image}
          alt={character.name}
          style={{
            width: "100px",
            borderRadius: "12px",
          }}
        />

        <div>
          <h2 style={{ color: "#7fffd4" }}>{character.name}</h2>
          <p style={{ color: "#7fffd4" }}>{character.status}</p>
          <p style={{ color: "#7fffd4" }}>{character.species}</p>
        </div>
      </div>
    </Link>
  );
}