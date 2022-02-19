import Link from "next/link"
import Image from "next/image"
import listStyle from '../scss/repo-list-item.module.scss';
import {FaStar, FaCodeBranch} from 'react-icons/fa'
import UserAvatar from "./UserAvatar";

const RepoListItem = ({ repo }) => {
  const cutDescription = (description) => {
    if (description && description.length > 100) {
      return description.slice(0, 100) + '...';
    }

    return description;
  };

  return (
    <div className={`${listStyle.repoListItem} box`}>
      <div className={listStyle.repoName}>
        <Link href="/repo/[id]" as={`/repo/${repo.id}`}>
          <a>{repo.name}</a>
        </Link>
      </div>

      <UserAvatar user={repo.owner}/>
      <p className={listStyle.description}>{cutDescription(repo.description)}</p>

      <div className={listStyle.footer}>
        <div className={listStyle.counters}>
          <div className={listStyle.counter}>
            <FaStar />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className={listStyle.counter}>
          <FaCodeBranch />
            <span>{repo.forks_count}</span>
          </div>
        </div>
        <div className={listStyle.language}>
          <spa>{repo.language}</spa>
        </div>
      </div>
    </div>
  );
};

export default RepoListItem;