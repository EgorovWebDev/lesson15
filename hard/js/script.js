var name = document.getElementById("name");
				age = document.getElementById("age");
				done = document.getElementById("done");
				btn = document.getElementById("btn");

function allow(){
	if (age.value >= 18 && done.checked) {
		alert("Доступ разрешён");
	}

	else {
		alert("Доступ запрещён");
	}
}


btn.addEventListener("click", allow);
