window.addEventListener("load", function () {
    console.log(localStorage.getItem("loginUser"))
    var userLogin = localStorage.getItem("loginUser")
    if (userLogin) {
        window.location.replace("./dashboard.html")
    }
})
function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    var getUser = JSON.parse(localStorage.getItem("users"))

    var user = getUser.find(function (value) {
        if (value.email === email && value.password === password) return true
    })
    if (user !== -1) {
        alert("successfully login")
        localStorage.setItem("loginUser", JSON.stringify(user))
        window.location.replace("./dashboard.html")
    } else {
        alert("email or password does not match")
    }
}




