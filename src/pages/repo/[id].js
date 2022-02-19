import { getRepo } from '../../services/githubServices'
import repoStyle from '../../scss/repo.module.scss'
import Button from '../../components/shared/button'
import UserAvatar from '../../components/UserAvatar';

const Repo = ({ repo }) => {
    return (
        <div>
            <Button href="/" text="Back" />

            <div className={repoStyle.header}>
                <span>{repo.name}</span>
            </div>
            <UserAvatar user={repo.owner}></UserAvatar>
            <div className={repoStyle.description}>{repo.description}</div>
            <div className={repoStyle.language}>{repo.language}</div>

            <Button
                href={repo.html_url}
                text="View on Github"
                type="dark"
                target="_blank"
                external
            />
        </div>
    );
};
export const getServerSideProps = async ({ query }) => {
    const res = await getRepo(query.id);
    return {
        props: { repo: res.data }
    };
};

export default Repo