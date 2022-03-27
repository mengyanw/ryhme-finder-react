import RyhmeItem from "./components/RyhmeItem";
import InputGroup from "./components/InputGroup";
import OutputDescription from "./components/OutputDescription";
import OutputList from "./components/OutputList";
import SavedWordsList from "./components/SavedWordsList";

import { useState } from "react";

function App() {
  const [ryhmeFoundFromAPI, setRhymeFoundFromAPI] = useState([]);
  const [synonymFoundFromAPI, setSynonymFoundFromAPI] = useState([]);
  const [outputDescription, setOutputDescription] = useState("");
  const [savedWordsArray, setSavedWordsArray] = useState([]);

  return (
    <main className="container">
      <h1 className="row">Rhyme Finder</h1>
      <SavedWordsList savedWordsArray={savedWordsArray} />
      <InputGroup
        setRhymeFoundFromAPI={setRhymeFoundFromAPI}
        setSynonymFoundFromAPI={setSynonymFoundFromAPI}
        setOutputDescription={setOutputDescription}
      />
      <OutputDescription outputDescription={outputDescription} />
      <output>
        <OutputList
          ryhmeFoundFromAPI={ryhmeFoundFromAPI}
          setSavedWordsArray={setSavedWordsArray}
        />
      </output>
    </main>
  );
}

export default App;
