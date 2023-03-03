import Input from "../components/Input";

export default function Home({ successEntries, onAddNewEntry }) {
  return (
    <>
      <h1>Mein Erfolgsjournal 🪂</h1>
      <Input onAddNewEntry={onAddNewEntry} />
      <h2>Was ich bisher erreicht habe:</h2>
      {successEntries.map((entry) => (
        <>
          <h3>{entry.date}</h3>
          <p>{entry.text}</p>
        </>
      ))}
    </>
  );
}
