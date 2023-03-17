import { useState } from "react";
import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const [successEntries, setSuccessEntries] = useState([]);

  function handleAddNewEntry(newEntry) {
    setSuccessEntries([...successEntries, newEntry]);
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        successEntries={successEntries}
        onAddNewEntry={handleAddNewEntry}
      />
    </>
  );
}

export default MyApp;
