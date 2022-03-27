import InputGroup from "./components/InputGroup";
import OutputDescription from "./components/OutputDescription";
import OutputGroup from "./components/OutputGroup";
import SavedWordsList from "./components/SavedWordsList";
import "./App.css"
import { useState } from "react";

function App() {
  const [wordsFoundFromAPI, setWordsFoundFromAPI] = useState([]);
  const [outputDescription, setOutputDescription] = useState("");
  const [savedWordsArray, setSavedWordsArray] = useState([]);
  const [isRhymeOrSynonym, setIsRyhmeOrSynonym] = useState(true);
  const [isInitialOrLoadingOrReady, setInitialOrLoadingOrReady] = useState(0);

  return (
    <main className="container">
      <h1 className="app_title">🎵 Rhyme Finder 🎹 </h1>
      <SavedWordsList savedWordsArray={savedWordsArray} />
      <InputGroup
        setWordsFoundFromAPI={setWordsFoundFromAPI}
        setOutputDescription={setOutputDescription}
        setIsRyhmeOrSynonym={setIsRyhmeOrSynonym}
        setInitialOrLoadingOrReady={setInitialOrLoadingOrReady}
      />
      <OutputDescription
        outputDescription={outputDescription}
      />
      <output className="col">
        <OutputGroup
          wordsFoundFromAPI={wordsFoundFromAPI}
          setSavedWordsArray={setSavedWordsArray}
          isRhymeOrSynonym={isRhymeOrSynonym}
          isInitialOrLoadingOrReady={isInitialOrLoadingOrReady}
        />
      </output>
    </main>
  );
}

export default App;
