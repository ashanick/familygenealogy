export function NewUserName(Name){
    console.log('New User Name in Action : ', Name)
    return{
        type:"NewUserName",
        Name: Name
    }
}

export function NewUserEmail(Email){
    console.log('New Email in Action : ', Email)
    return{
        type:"NewUserEmail",
        Email: Email
    }
}

export function NewUserCity(City){
    console.log('City in Action : ', City)
    return{
        type:"NewUserCity",
        City: City
    }
}

export function UserArrayLength(length){
    console.log('User Array Length ', length)
    return {
        type: "NewId",
        NewId: length
    }
}

export function GetUserSuccess(Users){
    console.log('In action GetUser Success : ', Users.length)
    return{
        type: 'Success',
        FetchUsers: Users,

    }
}

export function GetUserDetailsFetch(){
    return((dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(json => {
            var arrlength = json.length
            console.log('Users List Fetch Function : ', json)
            console.log('Length of current array : ', arrlength)
            dispatch(UserArrayLength(arrlength))
            dispatch(GetUserSuccess(json));
        })
        .catch ((error)=>
            {dispatch(GetErrorMessage(error))}
            )
    })
}

export function AddNewUserAPI(NewUser){
    console.log('in add new user  api : ', NewUser)
    return((dispatch) =>{
    })
}

export function GetErrorMessage(error){
    return{
        type: "GetErrorMessage",
        error: error
    }
}
