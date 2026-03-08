function addPost(){

let title=document.getElementById("title").value
let text=document.getElementById("text").value
let file=document.getElementById("imageUpload").files[0]

let reader=new FileReader()

reader.onload=function(){

let image=reader.result

let posts=JSON.parse(localStorage.getItem("posts")||"[]")

posts.push({

title:title,
text:text,
image:image,
likes:0,
comments:[]

})

localStorage.setItem("posts",JSON.stringify(posts))

alert("Post berjaya ditambah")

}

reader.readAsDataURL(file)

}