import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AccountPage.css'
import { get_user_info } from './actions/user'

function AccountPage(){
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.users.info !== undefined)
    const user = useSelector(st => st.users.info)

    useEffect(function(){
        dispatch(get_user_info());
    },[dispatch])

    if(!loaded) return <CircularProgress/>

    return(
        <div>
            {user.name}
        </div>
    )
}

export default AccountPage