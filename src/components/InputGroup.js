import { useState, useEffect } from "react";

const InputGroup = (props) => {
  const {
    setWordsFoundFromAPI,
    setOutputDescription,
    setIsRyhmeOrSynonym,
    setInitialOrLoadingOrReady,
  } = props;
  const [wordInput, setWordInput] = useState("");

  const getDatamuseRhymeUrl = (rel_rhy) => {
    return `https://api.datamuse.com/words?${new URLSearchParams({
      rel_rhy: rel_rhy,
    }).toString()}`;
  };
  const getDatamuseSimilarToUrl = (ml) => {
    return `https://api.datamuse.com/words?${new URLSearchParams({
      ml: ml,
    }).toString()}`;
  };
  const datamuseRequest = (url, callback) => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (json) => {
          setInitialOrLoadingOrReady(2);
          callback(Object.values(json));
        },
        (err) => {
          console.error(err);
        }
      );
  };
  const showRyhmes = () => {
    setInitialOrLoadingOrReady(1);
    setIsRyhmeOrSynonym(true);
    setOutputDescription(() => {
      return `Words that rhyme with ${wordInput}:`;
    });
    return datamuseRequest(
      getDatamuseRhymeUrl(wordInput),
      setWordsFoundFromAPI
    );
  };
  const showSynonyms = () => {
    setInitialOrLoadingOrReady(1);
    setIsRyhmeOrSynonym(false);
    setOutputDescription(() => {
      return `Words with a meaning similar to ${wordInput}:`;
    });
    return datamuseRequest(
      getDatamuseSimilarToUrl(wordInput),
      setWordsFoundFromAPI
    );
  };
  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      showRyhmes();
    }
  };
  return (
    <div className="row">
      <div className="input-group col">
        <input
          value={wordInput}
          onChange={(e) => setWordInput(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Enter a word"
          onKeyDown={keyDownHandler}
        />
        <button type="button" className="btn btn-primary" onClick={showRyhmes}>
          Show rhyming words
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={showSynonyms}
        >
          Show synonyms
        </button>
      </div>
    </div>
  );
};

export default InputGroup;
