let posts = JSON.parse(localStorage.getItem("posts"))

if(!posts){

posts = [

{
title:"Duty Free Rantau Panjang",
image:"https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
text:"Tempat shopping terkenal di Rantau Panjang.",
likes:0,
comments:[]
},

{
title:"Roti John BB's",
image:"https://images.unsplash.com/photo-1550547660-d9450f859349",
text:"Roti john mini viral.",
likes:0,
comments:[]
}

]

localStorage.setItem("posts",JSON.stringify(posts))

}


function savePosts(){

localStorage.setItem("posts",JSON.stringify(posts))

}


function loadPosts(){

const feed=document.getElementById("feed")

feed.innerHTML=""

posts.forEach((p,i)=>{

let commentHTML=""

p.comments.forEach((c,index)=>{

commentHTML+=`<div>${index+1}. ${c}</div>`

})

feed.innerHTML+=`

<div class="post">

<h3>${p.title}</h3>

<img src="${p.image}">

<p>${p.text}</p>

<div class="buttons">

<button onclick="like(${i})">
👍 Like (${p.likes})
</button>

<button onclick="toggleComment(${i})">
💬 Comment
</button>

<button onclick="share()">
🔗 Share
</button>

</div>

<div class="commentBox" id="comment${i}">

<input id="input${i}" placeholder="Tulis komen">

<button onclick="addComment(${i})">Hantar</button>

<div class="comments">

${commentHTML}

</div>

</div>

</div>

`

})

}

loadPosts()


function like(i){

posts[i].likes++

savePosts()

loadPosts()

}


function toggleComment(i){

let box=document.getElementById("comment"+i)

box.style.display=box.style.display==="block"?"none":"block"

}


function addComment(i){

let input=document.getElementById("input"+i)

posts[i].comments.push(input.value)

input.value=""

savePosts()

loadPosts()

}


function share(){

navigator.clipboard.writeText(window.location.href)

alert("Link copied")

}