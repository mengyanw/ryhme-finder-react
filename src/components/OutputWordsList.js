import WordItem from "./WordItem";
const OutputWordsList = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.map((item, index) => (
        <WordItem word={item.word} key={index} {...props} />
      ))}
    </ul>
  );
};

export default OutputWordsList;
