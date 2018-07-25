var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");

function addItem( ){
		var newli = document.createElement("li");
		newli.innerHTML = "Новая Задача!";
		newli.className = "item";
		myList.appendChild(newli);
		popup.style.display = "none";
}

function delItem( ) {
 myList.removeChild(story[0]);


	if(story.length == 0) {
		popup.style.display = "block";
		}
}
function closePopup() {
	popup.style.display = "none";
}



btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);