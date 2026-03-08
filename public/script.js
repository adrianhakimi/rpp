async function loadPlaces(){

const res = await fetch("/places")

const places = await res.json()

const feed = document.getElementById("feed")

places.forEach(p=>{

feed.innerHTML+=`

<div class="post">

<h2>${p.name}</h2>

<img src="${p.image}">

<p>${p.description}</p>

<button onclick="like('${p._id}')">
👍 Like (${p.likes.length})
</button>

<button onclick="comment('${p._id}')">
💬 Comment
</button>

<button onclick="share()">
🔗 Share
</button>

</div>

`

})

}

loadPlaces()

async function like(id){

await fetch("/like/"+id,{method:"POST"})

location.reload()

}

function share(){

let url = window.location.href

navigator.clipboard.writeText(url)

alert("link copied")

}