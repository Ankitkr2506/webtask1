import { useState } from "react";

import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultList } from "./components/SearchResultList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;