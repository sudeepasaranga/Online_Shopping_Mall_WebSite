{function myFunction(){
	var txt;
	if (confirm("press a button!")){
		txt= "pressed ok!";
	}
	else{
		txt= "";
	}
	document.getElementById("demo").innerHTML = txt;
     }
	
	
document.getElementById("p2").style.color = "blue";
}