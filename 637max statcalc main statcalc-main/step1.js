

let hNull;
let SampMean;
let Sx;
let n;
let Ha;
let pval;

document.getElementById("greater").addEventListener("click", function () {

	Ha = "greater";
	document.getElementById("Ha").textContent = `Ha>H0`;

})
document.getElementById("less").addEventListener("click", function () {

	Ha = "less";
	document.getElementById("Ha").textContent = `Ha<H0`;

})
document.getElementById("notEqual").addEventListener("click", function () {

	Ha = "notEqual";
	document.getElementById("Ha").textContent = `Ha≠H0`;

})

document.getElementById("mySubmit").addEventListener("click", function () {

	hNull = document.getElementById("input1").value;
	SampMean = document.getElementById("input2").value;
	Sx = document.getElementById("input3").value;
	n = document.getElementById("input4").value;

	if (Ha == "greater") {
		pval = 1-jStat.studentt.cdf((Number(SampMean)-Number(hNull))/(Sx/Math.sqrt(Number(n))), Number(n)-1);
	} else if (Ha == "less") {
		pval = jStat.studentt.cdf((Number(SampMean) - Number(hNull)) / (Sx / Math.sqrt(Number(n))), Number(n) - 1);
	} else if (Ha == "notEqual") {
		pval = 2*jStat.studentt.cdf((Number(SampMean) - Number(hNull)) / (Sx / Math.sqrt(Number(n))), Number(n) - 1);
	} else {
		pval = undefined;
	}

	document.getElementById("hNull").textContent = `hNull: ${hNull}`;
	document.getElementById("SampMean").textContent = `Sample Mean: ${SampMean}`;
	document.getElementById("Sx").textContent = `Sx: ${Sx}`;
	document.getElementById("n").textContent = `n: ${n}`;
	document.getElementById("PVal").textContent = `PVal: ${pval}`;
});