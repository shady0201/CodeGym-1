function addInput(value) {
	document.getElementById('input').value += value;
} 

function clearInput() {
	document.getElementById('input').value = '';
	document.getElementById('input-two').value = '';
}

function calculate() {
	let input = document.getElementById('input').value;
	let result = eval(input);
	document.getElementById('input').value = result;
	//document.getElementById('input-two').value = (`${input} = `);
	document.getElementById('input-two').value = input + " = ";
}

function canbacHai() {
	let input = document.getElementById("input").value;
	let result = Math.sqrt(input);
	document.getElementById("input").value = result;
	document.getElementById('input-two').value = (`√/(${input})`);
}

function motChia() {
	let input = document.getElementById("input").value;
	let result = 1/input;
	document.getElementById("input").value = result;
	document.getElementById('input-two').value = (`1/(${input})`);
}
