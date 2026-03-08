function addPost(){

let title=document.getElementById("title").value
let image=document.getElementById("image").value
let text=document.getElementById("text").value

let post={title,image,text}

let posts=JSON.parse(localStorage.getItem("posts")||"[]")

posts.push(post)

localStorage.setItem("posts",JSON.stringify(posts))

alert("Post added")

}