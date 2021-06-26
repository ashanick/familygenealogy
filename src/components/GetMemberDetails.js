import React, { Component } from 'react'
import {connect} from 'react-redux'
import { GetUserDetailsFetch, NewUserName, NewUserEmail, NewUserCity, AddNewUserAPI} from './ReduxComponents/action';

export class GetMemberDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
            orgUsers:[],
            showAddUser: false,
            newUser: {
                name:"",
                email:"",
                city:"",
                newId: 0
            }
        }
    }

    componentDidMount=()=>{
        this.props.GetUserDetailsFetch();
        console.log('State Data in Component Mount:', this.props.userData)
        this.setState({showAddUser: false})
    }

    clickAddNewUser =(e) =>{
        this.setState({showAddUser: !this.state.showAddUser})
        this.setState({newId: this.props.propsNewArrId})
        this.setState({name: " "})
        this.setState({email: " "})
        this.setState({city: " "})
    }

    submitNewUser = (e) =>{
        e.preventDefault();
        console.log( 'Aubmit User : ', this.state.name, ' Email : ', this.state.email )
        if (this.state.name ===" "){
            alert('Please add name')
        } else {
            const evalData = JSON.stringify(this.state.newUser)
            console.log('Submiting Eval Data : ', evalData)
            this.props.propsSetNewUserName(this.state.name)
            this.props.propsSetNewUserEmail(this.state.email)
            this.props.propsSetNewUserCity(this.state.city)
            this.props.AddNewUserAPI()
            this.setState({showAddUser: !this.state.showAddUser})
        }
    }

    render() {
        console.log('Users in Render : ', this.props.propsuserData)
        console.log('Click Add New User new state :' , this.state.showAddUser)
        console.log('New User Id :', this.state.newId)
        return (
            <React.Fragment>
               <h1>Hello Json fellow table</h1> 
               <div>
                    <input type="button" onClick={this.clickAddNewUser} value="Add New Users"></input>
                    { this.state.showAddUser ?
                    <div>
                        <h4>Add New Member</h4>
                        <div className="addNewUser">
                            <p>New Member Id : {this.state.newId}</p>
                            <p>Name: {this.state.name} 
                            <input type="text" 
                                value={this.state.name} 
                                onChange={(e)=> this.setState({name: e.target.value})} /></p>
                            <p>Email: {this.state.email}
                            <input type="text" 
                                value={this.state.email} 
                                onChange={(e)=> this.setState({email: e.target.value})} /></p>
                            <p>City: {this.state.city}
                            <input type="text" 
                                value={this.state.city} 
                                onChange={(e)=> this.setState({city: e.target.value})} /></p>
                            <button type="submit" onClick={this.submitNewUser}>Add New User</button>
                        </div>
                    </div>
                    :null
                    }
                </div>
            <div  className="table">
                <table className="table" style={{margin: '20px 20px', boxSizing: 'border-box', border: 'solid black 2px'}}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                       this.props.propsuserData.map((user, index)=>{
                       return (<tr key={index} style={{padding: '10px 10px'}}>
                           <td style={{padding: '10px 10px'}}>{user.id}</td>
                            <td style={{padding: '10px 10px'}}>{user.name}</td>
                            <td style={{padding: '10px 10px'}}>{user.email}</td>
                            <td style={{padding: '10px 10px'}}>{user.address.city}</td>
                       </tr> 
                        )
                   })}
                    </tbody>
                </table>    
            </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log('State Users :', state.FetchUsers)
    return{
        propsuserData: state.FetchUsers,
        propsNewArrId: state.NewId,
        propsNewUserName: state.Name,
        propsNewUserEmail: state.Email
    }
}

function mapDisptachToProps(dispatch){
    console.log('Dispatch : ', dispatch)
    return{
        GetUserDetailsFetch : ()=>{dispatch(GetUserDetailsFetch())},
        propsSetNewUserName: (e)=>{dispatch(NewUserName(e))},
        propsSetNewUserEmail: (e)=>{dispatch(NewUserEmail(e))},
        propsSetNewUserCity: (e)=>{dispatch(NewUserCity(e))},
        AddNewUserAPI: () =>{dispatch(AddNewUserAPI())}
    }
}

export default GetMemberDetails = connect(mapStateToProps, mapDisptachToProps)(GetMemberDetails)
