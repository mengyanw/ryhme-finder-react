import "./SavedWordsList.css"
const SavedWordsList = (props) => {
    const { savedWordsArray } = props;
    let joinedSavedWords;
    if (savedWordsArray.length === 0) {
        joinedSavedWords = "None"
    }
    else {
        joinedSavedWords = savedWordsArray.join(', ')
    }
    return (
        <div className="saved_words">
            Saved words: {joinedSavedWords}
        </div>
    )
}

export default SavedWordsList;