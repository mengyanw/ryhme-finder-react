import RyhmeGroup from "./RyhmeGroup";
import OutputWordsList from "./OutputWordsList";
import "./OutputGroup.css"
const OutputGroup = (props) => {
  const { wordsFoundFromAPI, isRhymeOrSynonym, isInitialOrLoadingOrReady} = props;
  if (isInitialOrLoadingOrReady === 0) {
    return <h2 className="initial_output">Plese enter a word...</h2>;
  }
  else if (isInitialOrLoadingOrReady === 1) {
    return <h2 className="loading_output">Loading...</h2>;
  } 
  else {
    if (wordsFoundFromAPI.length == 0) {
      return <div>(no results)</div>;
    } 
    else if (isRhymeOrSynonym === false) {
        return (
          <OutputWordsList data={wordsFoundFromAPI} {...props} />
        )
    }
    else {
      const groupBy = (objects, property) => {
          // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
          // value for property (obj[property])
          if (typeof property !== "function") {
            const propName = property;
            property = (obj) => obj[propName];
          }
          const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
          for (const object of objects) {
            const groupName = property(object);
            //Make sure that the group exists
            if (!groupedObjects.has(groupName)) {
              groupedObjects.set(groupName, []);
            }
            groupedObjects.get(groupName).push(object);
          }
          // Create an object with the results. Sort the keys so that they are in a sensible "order"
          const result = {};
          for (const key of Array.from(groupedObjects.keys()).sort()) {
            result[key] = groupedObjects.get(key);
          }
          return result;
        };
      const groupedData = groupBy(wordsFoundFromAPI, "numSyllables");
      return (
        <div>
          {Object.entries(groupedData).map((entry) => (
            <RyhmeGroup entry={entry} key={entry[0]} {...props}/>
          ))}
        </div>
      );
    }
  }


};

export default OutputGroup;
