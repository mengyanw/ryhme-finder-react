import RyhmeItem from "./RyhmeItem";
const RyhmeGroup = (props) => {
  const { entry } = props;
  const [key, dataInGroup] = entry;
  return (
    <div>
      <h3>Syllables: {key}</h3>
      <ul>
        {dataInGroup.map((item, index) => (
          <RyhmeItem word={item.word} item={item} key={index} {...props}  />
        ))}
      </ul>
    </div>
  );
};
export default RyhmeGroup;
