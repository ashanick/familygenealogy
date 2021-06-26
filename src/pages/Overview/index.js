import React from 'react'
import './style.css'
import { getUserDetailsFromStore as store } from '../../components/ReduxComponents/store'
import { Provider } from 'react-redux'
import GetMemberDetails from '../../components/GetMemberDetails'

export const Overview = () => {
    return (
        <div className="home">
            <h1>Overview</h1>
            <p>Iyergars hail from 300+ villages and districts in South India. Surprise, there is a whole Iyengar village in West Bengal</p>
        </div>
    )
}

export const Users =() => {
    return(
        <div className="users"><h1>In Users</h1>
            <Provider store={store}>
                <GetMemberDetails />
            </Provider>
        </div>
    )
}
