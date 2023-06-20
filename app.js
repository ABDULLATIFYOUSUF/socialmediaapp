var loginUser;

window.addEventListener("load", function(){
    var getUser = JSON.parse(this.localStorage.getItem("loginUser"))
    loginUser = getUser
})
function signUp(){
    var fullName = document.getElementById("fullName").value
    var phoneNumber = document.getElementById("phoneNumber").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    // console.log(fullName, phoneNumber, email, password)

var userObj = {
    fullName,
    phoneNumber,
    email,
    password,
}
var getUsers = JSON.parse(localStorage.getItem("users"))
if(getUsers === null){
var arr = []
arr.push(userObj)
console.log("first user")
localStorage.setItem("users", JSON.stringify(arr))
alert("user Signup")
window.location.href = "./index.html"
} else{
    console.log(getUsers)
    var findUser = getUsers.find(function (value){
        console.log(value.email, "value")
        if(value.email === email){
            return true
        }
    })
    if (findUser === undefined){
        getUsers.push(userObj)
        localStorage.setItem("users", JSON.stringify(getUsers))
        alert("user signUp")
        window.location.href = "index.html"
    }
    else{
        alert("email address already exists")
    }
}
}

function login(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    var getUser = JSON.parse(localStorage.getItem("users"))
    
    var user = getUser.find(function (value) {
        if(value.email === email && value.password === password) return true
    })
    if (user !== -1) {
        alert("successfully login")
        localStorage.setItem("loginUser", JSON.stringify(user))
        window.location.replace("./dashboard.html")
    } else{
        alert("email or password does not match")
    }
}