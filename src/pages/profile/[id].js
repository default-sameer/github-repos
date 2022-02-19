import {getProfile} from '../../services/githubServices'
import profileStyle from '../../scss/profile.module.scss'
import Button from '../../components/shared/button'
// import { FaGithub } from 'react-icons/fa'

const Profile = ({profile}) => {
  return (
    <div>
        <Button href='/' text='Back' />
        <h3 className='is-sixe-3'>{profile.name}</h3>
            {profile.bio && <div className={profileStyle.text}>{profile.bio}</div>}
            {profile.email && <div className={profileStyle.text}>{profile.email}</div>}
            {profile.loaction && <div className={profileStyle.text}>{profile.loaction}</div>}

            <div className={profileStyle.counters}>
                <div>
                    Followers: {profile.followers}
                </div>
                <div>
                    Following: {profile.following}
                </div>
            </div>
          <Button href={profile.html_url} text='View on Github' type='info' target='_blank' external/>
          
    </div>
  )
}

export const getServerSideProps = async ({query}) => {
    const res = await getProfile(query.id)
    return{
        props:{
            profile: res.data
        }
    }
}

export default Profile