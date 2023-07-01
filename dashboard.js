var addPost = document.getElementById("addPost")
var loginUser;
window.addEventListener("load", function () {
    var userLogin = localStorage.getItem("loginUser")
    if (!userLogin) {
        window.location.replace("./index.html")
        return
    }
    var getUser = JSON.parse(localStorage.getItem("loginUser"))
    loginUser = getUser
    var logoName = document.getElementById("logoName")
    logoName.innerHTML = loginUser.fullName.toUpperCase()


    if (addPost) {
        var getPosts = JSON.parse(this.localStorage.getItem("posts")) || []
        for (var value of getPosts) {
            addPost.innerHTML += `<div class="card" style="width: 400px;">
        <div class="card-body">
            <h5 class="card-title">${value.titleInput}</h5>
            <p class="card-text">${value.descInput}</p>
            <button class="btn btn-info" onclick="editPost(${value.id} , this)">EDIT</button>
            <button class="btn btn-danger" onclick="deletePost(${value.id} , this)">DELETE</button>
        </div>
    </div>`
        }
    }
})
function selfPost() {
    var titleInput = document.getElementById("titleInput")
    var descInput = document.getElementById("descInput")

    if (!titleInput.value || !descInput.value) {
        alert("enter value first")
        return
    }



    var id;
    var getPosts = JSON.parse(localStorage.getItem("posts")) || []

    if (getPosts.length > 0) {
        id = getPosts[0].id + 1
    } else {
        id = 1
    }


    var postBox = `<div class="card" style="width: 400px;">
    <div class="card-body">
        <h5 class="card-title">${titleInput.value}</h5>
        <p class="card-text">${descInput.value}</p>
        <button class="btn btn-info" onclick="editPost(${id} , this)">EDIT</button>
        <button class="btn btn-danger" onclick="deletePost(${id} , this)">DELETE</button>
    </div>
</div>`
    addPost.innerHTML = postBox + addPost.innerHTML
    var postObj = {
        id: id,
        titleInput: titleInput.value,
        descInput: descInput.value
    }

    getPosts.unshift(postObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    titleInput.value = ""
    descInput.value = ""
}


function deletePost(id, e) {
    var getPosts = JSON.parse(localStorage.getItem("posts"))
    var indexNum = getPosts.findIndex(function (value) {
        if (value.id === id)
            return true
    })
    getPosts.splice(indexNum, 1)
    localStorage.setItem("posts", JSON.stringify(getPosts))
    e.parentNode.parentNode.remove()
}
function editPost(id, e) {
    var indexNum;
    var getPosts = JSON.parse(localStorage.getItem("posts"))
    var post = getPosts.find(function (value, index) {
        if (value.id === id) {
            indexNum = index
            return true
        }
    })

    var editTitle = prompt("EDIT TITLE", post.titleInput)
    var editDesc = prompt("EDIT DESC", post.descInput)
    const editObj = {
        id: post.id,
        titleInput: editTitle,
        descInput: editDesc,
    }
    getPosts.splice(indexNum, 1, editObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))
    var h5Title = e.parentNode.firstElementChild
    var pDesc = e.parentNode.firstElementChild.nextElementSibling
    h5Title.innerHTML = editTitle
    pDesc.innerHTML = editDesc
}
function logout() {
    localStorage.removeItem("loginUser")
    window.location.replace("./index.html")
}