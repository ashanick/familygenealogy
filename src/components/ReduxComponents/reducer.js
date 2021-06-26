var InitialState={
    FetchUsers:[],
    ChangeUsers: [],
    errorMessage: "", 
    Name: 'Asha',
    Email: 'asha@gmail.com'
}

function reducer(state=InitialState, action){
    var newState = {...state}
    // console.log('State in reducer : ', newState)
    // console.log( 'Action  : ', action)
    // console.log( 'Action Type : ', action.type)
    // console.log( 'Action  Users: ', action.FetchUsers)
    switch (action.type) {
        case "GetUserDetails": {
            newState.Users = action.Users
            return newState }
        case "GetErrorMessage": {
            newState.error = action.data
            return newState}
        case "Success": {
            newState.FetchUsers = action.FetchUsers
            var temp = newState.FetchUsers.length + 1
            console.log('Reducer Success : ', temp)
            newState.NewId = temp
            return newState }
        case "NewUserName":{
            newState.Name = action.Name
            return newState }
        case "NewUserEmail":{
            newState.Email = action.Email
            return newState }
        case "NewUserCity": {
            newState.City = action.City
            return newState
        }
    }
    return newState
}

export default reducer