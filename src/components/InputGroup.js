import { useState, useEffect } from "react";

const InputGroup = (props) => {
  const { setRhymeFoundFromAPI, setSynonymFoundFromAPI, setOutputDescription} = props;
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
        (json) => { callback(Object.values(json)); },
        (err) => { console.error(err); }
      );
  };
  const showRyhmes = () => {
      setOutputDescription(() => {
          return `Words that rhyme with ${wordInput}:`
      })
      return datamuseRequest(getDatamuseRhymeUrl(wordInput), setRhymeFoundFromAPI);
  }
  const showSynonyms = () => {
      return datamuseRequest(getDatamuseSimilarToUrl(wordInput), setSynonymFoundFromAPI);
  }
  const keyDownHandler = (e) => {
      if (e.key === 'Enter') { showRyhmes(); }
  }
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
        <button type="button" className="btn btn-secondary" onClick={showSynonyms}>
          Show synonyms
        </button>
      </div>
    </div>
  );
};

export default InputGroup;
