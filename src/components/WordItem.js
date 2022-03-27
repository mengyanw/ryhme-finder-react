import "./WordItem.css";
const WordItem = (props) => {
  const { word, setSavedWordsArray } = props;
  const onClickHandler = () => {
    setSavedWordsArray((prevArray) => {
        if (prevArray.includes(word) === false)
            return [...prevArray, word];
        else return prevArray;
    })
  }
  return (
    <li>
      {word}
      <button className="btn btn-sm btn-outline-success" type="button" onClick={onClickHandler}>
        save
      </button>
    </li>
  );
};
export default WordItem;
