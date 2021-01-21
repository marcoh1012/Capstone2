import { Button, Card, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AccountPage.css'
import { get_user_info } from './actions/user'
import Logout from './Logout'

import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';

function AccountPage(){
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.users.info !== undefined)
    const user = useSelector(st => st.users.info)
    const token = useSelector(st => st.users.access_token)

    useEffect(function(){
        dispatch(get_user_info());
    },[token, dispatch])

    if(!loaded) return <CircularProgress/>

    return(
        <div className="Account-Page"> 
            <Card className='user-card'>
                    <div className='user-card-top'>
                        <img className='user-thumbnail' src={user.thumbnail} alt=''/>
                        <div className='user-name'>
                            <div >
                            <h1>{user.full_name} ({user.name})</h1>
                            <div className='user-buttons'>
                                <Button variant="contained" color="primary" className='edit-page-button' href={`https://www.thingiverse.com/${user.name}/edit`}> Edit Profile</Button>
                                <Logout />
                            </div>
                            </div>
                            <div className='user-bio'>
                                <h4>Bio:</h4>
                                <div dangerouslySetInnerHTML={{__html: user.bio_html}}></div>
                            </div>
                            
                            <div className="user-notification">
                                ****Work in Progress: Editing Profile, Uploading Models, Editing Models, Following and Followers features are done through the <a href='https://thingiverse.com'>thingiverse</a> site. ****
                            </div>
                        </div>
                    </div>
                    <div className='user-card-bottom'>
                        <div className = 'user-button'>
                            <a className='thing-link'href='https://www.thingiverse.com/thing:0/edit'><PublishTwoToneIcon className='user-icon' fontSize='inherit'/><p className='link-p'>Upload</p></a>
                        </div>
                        <div className = 'user-button'>
                            <a className='thing-link'href={`/users/${user.name}`}><div className='link-p'><p className='number' > {user.count_of_designs}</p> Designs</div></a>
                        </div>
                        <div className = 'user-button'>
                            <a className='thing-link'href={`https://www.thingiverse.com/${user.name}/followers`}><p className='number' > {user.count_of_followers}</p><p className='link-p'>Followers</p></a>
                        </div>
                        <div className = 'user-button'>
                            <a className='thing-link'href={`https://www.thingiverse.com/${user.name}/following`}><p className='number' > {user.count_of_following}</p><p className='link-p'>Following</p></a>
                        </div>
                        <div className = 'user-button'>
                            <a className='thing-link'href='/likes'><p className='number' > {user.like_count}</p><p className='link-p'>Likes</p></a>
                        </div>
                    </div>
            </Card>
        </div>
    )
}

export default AccountPage