import imageStyle from '../scss/user-avatar.module.scss'
import Link from 'next/link'

const UserAvatar = ({user}) => {
  return (
      <div className={imageStyle.user}>
        <figure className={`${imageStyle.avatar} image`}>
           <img className="is-rounded" src={user.avatar_url} alt="User Image" />
        </figure>
        <div className={imageStyle.userLink}>
            <Link href='/profile/[id]' as={`/profile/${user.login}`}>
                <a>{user.login}</a>
            </Link>
        </div>
    </div>
  )
}

export default UserAvatar