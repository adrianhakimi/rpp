const posts=[

{
title:"Duty Free Rantau Panjang",
image:"https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
text:"Tempat shopping paling popular di Kelantan."
},

{
title:"Roti John BB's",
image:"https://images.unsplash.com/photo-1550547660-d9450f859349",
text:"Roti john mini viral di Rantau Panjang."
},

{
title:"Golok View Homestay",
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945",
text:"Homestay selesa dekat sempadan Thailand."
}

]


function loadPosts(){

const feed=document.getElementById("feed")

posts.forEach(p=>{

feed.innerHTML+=`

<div class="post">

<h3>${p.title}</h3>

<img src="${p.image}">

<p>${p.text}</p>

<div class="buttons">

<button onclick="like(this)">👍 Like <span>0</span></button>

<button onclick="toggleComment(this)">💬 Comment</button>

<button onclick="share()">🔗 Share</button>

</div>

<div class="commentBox">

<input class="commentInput" placeholder="Tulis komen">

<button onclick="addComment(this)">Hantar</button>

<div class="comments"></div>

</div>

</div>

`

})

}

loadPosts()



function like(btn){

let count=btn.querySelector("span")

if(btn.dataset.liked){

alert("Anda sudah like")

return

}

count.innerText=parseInt(count.innerText)+1

btn.dataset.liked=true

}


function toggleComment(btn){

let post=btn.closest(".post")

let box=post.querySelector(".commentBox")

box.style.display=box.style.display==="block"?"none":"block"

}


function addComment(btn){

let post=btn.closest(".post")

let input=post.querySelector(".commentInput")

let comments=post.querySelector(".comments")

let number=comments.children.length+1

let div=document.createElement("div")

div.innerText=number+". "+input.value

comments.appendChild(div)

input.value=""

}


function share(){

let url=window.location.href

navigator.clipboard.writeText(url)

alert("Link copied. Boleh share di Facebook atau WhatsApp")

}