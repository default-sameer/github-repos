import RepoListItem from './repo-list-item';
import loaderStyle from '../scss/loader.module.scss';

const RepoList = ({repos, loading}) => {

    if(loading){
        return <img className={loaderStyle.loader} src='./img/loading.gif' alt='loading gif'></img>
    }
    if(!repos || repos.length === 0){
        return <span className={loaderStyle.message}>No repos found</span>
    }
  return (
    <div className={loaderStyle.repoList}>
          {repos.map((repo) => (<RepoListItem key={repo.id} repo={repo}></RepoListItem>))}
        
    </div>
  )
}

export default RepoList