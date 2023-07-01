window.addEventListener("load", function () {
    console.log(localStorage.getItem("loginUser"))
    var userLogin = localStorage.getItem("loginUser")
    if (userLogin) {
        window.location.replace("./dashboard.html")
    }

})

function signUp() {
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
    if (getUsers === null) {
        var arr = []
        arr.push(userObj)
        localStorage.setItem("users", JSON.stringify(arr))
        alert("user Signup")
        window.location.href = "./index.html"
    } else {
        console.log(getUsers)
        var findUser = getUsers.find(function (value) {
            if (value.email === email) {
                return true
            }
        })
        if (findUser === undefined) {
            getUsers.push(userObj)
            localStorage.setItem("users", JSON.stringify(getUsers))
            alert("user signUp")
            window.location.href = "index.html"
        }
        else {
            alert("email address already exists")
        }
    }
}
