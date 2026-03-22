export default function SearchBar({ setSearch }: any) {
  return (
    <input
      type="text"
      placeholder="Buscar personagem..."
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #66fcf1",
        outline: "none",
      }}
    />
  );
}