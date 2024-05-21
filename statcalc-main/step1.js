let hNull;
let Mean;
let Sx;
let n;

document.getElementById("mySubmit").addEventListener("click", function(){
	
	hNull = document.getElementById("input1").value;
	document.getElementById("hNull").textContent = `hNull: ${hNull}`;
	Mean = document.getElementById("input2").value;
	document.getElementById("Mean").textContent = `Mean: ${Mean}`;
	Sx = document.getElementById("input3").value;
	document.getElementById("Sx").textContent = `Sx: ${Sx}`;
	n = document.getElementById("input4").value;
	document.getElementById("n").textContent = `n: ${n}`;
	
});