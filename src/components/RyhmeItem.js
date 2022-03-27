// import "./RhymeItem.css";
const RyhmeItem = (props) => {
  const { word, setSavedWordsArray, item } = props;
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
      <button className="btn btn-sm btn-outline-danger" type="button" onClick={onClickHandler}>
        save
      </button>
    </li>
  );
};
export default RyhmeItem;
