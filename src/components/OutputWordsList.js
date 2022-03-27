import WordItem from "./WordItem";
const OutputWordsList = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.map((item, index) => (
        <WordItem word={item.word} item={item} key={index} {...props} />
      ))}
    </ul>
  );
};

export default OutputWordsList;
