import TextInput from "./shared/TextInput"
import SelectInput from "./shared/SelectInput"
import LANGUAGES from "../constants/languages.constant";
import searchStyle from '../scss/search.module.scss'

const Search = (props) => {
    const {language, searchText, onSearchTextChange, onLanguageChange} = props;

    const languages = [{vlaue: '', label: 'All'},...LANGUAGES];
  return (
    <div className={searchStyle.search}>
        <TextInput className={searchStyle.searchText} label='Repo Search' value={searchText} onChange={(value) => onSearchTextChange(value)} />
      <SelectInput className={searchStyle.languageSelect} label='Language' value={language} options={languages} onChange={(value) => onLanguageChange(value)}/>
    </div>
  )
}

export default Search