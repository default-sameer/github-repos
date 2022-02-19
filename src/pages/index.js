import axios from "axios"
import { useState, useEffect } from "react"
import Search from "../components/Search"
import { searchRepos } from '../services/githubServices'
import RepoList from "../components/repo-list"
import { getRandomWord } from '../helpers/randomWord.helper';
import Image from "next/image"
import homeStyle from '../scss/index.module.scss'


export default function Home(props) {

  const [searchText, setSearchText] = useState(props.searchText)
  const [language, setLanguage] = useState('')
  const [repos, setRepos] = useState(props.repos)
  const [loading, setLoading] = useState(false)

  const onSearchTextChange = (text) => {
    setSearchText(text)
    if(text){
    loadRepos(text, language)
    }
  }

  const onLanguageChange = (language) => {
    setLanguage(language)
    loadRepos(searchText, language)
  }

  const loadRepos = async (searchText, language) => {
    setLoading(true);
    const res = await searchRepos(searchText, language);
    if(res && res.data){
      setLoading(false);
      setRepos(res.data.items);
    }
    
  }
  
  return (
    <div className={homeStyle.container}>
      <Image
      className={homeStyle.logo}
        src="/img/repos.svg"
        alt="Github Repo Search Image"
        width={350}
        height={350}
      />
      <Search searchText={searchText} language={language} onSearchTextChange={onSearchTextChange} onLanguageChange={onLanguageChange}/>
      <RepoList repos={repos} loading={loading}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const searchText = getRandomWord();
  const res = await searchRepos(searchText);

  return{
    props: {
      searchText: searchText,
      repos: res.data.items
    }
  }
}
