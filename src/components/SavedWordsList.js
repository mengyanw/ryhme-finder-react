
const SavedWordsList = (props) => {
    const { savedWordsArray } = props;
    return (
        <div className="row">
            Saved words: {savedWordsArray.join(', ')}
        </div>
    )
}

export default SavedWordsList;