let b , mvalue, key;
let myboj = {}
const myharry = ()=>{
	b = document.getElementsByTagName("input")[0]
	console.log("Clicked")
	mvalue = b.value;
	i = localStorage.length + 1
	localStorage.setItem(i , mvalue);
	b.value = "";
	location.reload();
}
const notmyharry = ()=>{
	localStorage.clear();
	location.reload();
}
const hatao = (uid)=>{
	localStorage.removeItem(uid)
	location.reload();
}
//Used to add item
let a = document.getElementById("additem");
a.addEventListener("click", myharry);

let r = document.getElementById("remitem");
r.addEventListener("click", notmyharry);

for(let l = 0; l<localStorage.length; l++){
	key = localStorage.key(l)
	document.getElementById("container").insertAdjacentHTML("afterbegin" ,`<li class="list-group-item" aria-current="true">${localStorage.getItem(key)}<button type="button" id=${key} class="btn btn-primary btn-sm mx-3 float-right" onclick="hatao(${key})">Delete</button></li>`)
}
