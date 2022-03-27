
import OutputWordsList from "./OutputWordsList";
const RyhmeGroup = (props) => {
  const { entry } = props;
  const [numSyllables, data] = entry;
  return (
    <div>
      <h3>Syllables: {numSyllables}</h3>
      <OutputWordsList data={data} {...props} />
    </div>
  );
};
export default RyhmeGroup;
