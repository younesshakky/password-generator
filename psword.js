// code base fo password generator

/*
	scenerio :

	app have 4 checkboxes
		1: small letters
		2: capitalized letters
		3: digits
		4: symbols (maybelater)
		-------------
	and should let user change the length of his password
	ex 8, 12, 16 charachters

*/


// var Chars = {
//
// 	upperCase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//
// 	lowerCase : 'abcdefghijklmnopqrstuvwxyz',
//
// 	digits: '0123456789',
//
// 	symbols: '@*!#&=+-_'
//
// };


var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',

		lowerCase = 'abcdefghijklmnopqrstuvwxyz',

		digits = '0123456789',

		symbols = '@*!#&=+-_';



var checkAll = document.querySelector('#checkall');

var generatedPass = document.querySelector('#generatedPass');

var checkboxes = document.querySelectorAll('input[type="checkbox"]');

var generateBtn = document.getElementById('generate');


// function isCheckedboxes () {
checkAll.onchange = function () {

	for (var i = 0; i < checkboxes.length; i++){

		if (checkAll.checked === true){
				// console.log('checked');
				checkboxes[i].setAttribute('checked', true);

		}else{
				// console.log('unchecked');
				checkboxes[i].removeAttribute('checked');
		}
	}
}
// }

function getlength(){
	var SelectValue = document.querySelector('select').value;
	// return SelectValue;

}

// var checkboxes2 = [
// 	{name: upperCase, ID: checkboxes[0].id = "upperCase"},
// 	{name: lowerCase, ID: checkboxes[1].id = "lowerCase"},
// 	{name: digits, ID: checkboxes[2].id = "digits"},
// 	{name: symbols, ID: checkboxes[3].id = "symbols"}
//
// ];
// return checkboxes2;

function getCheckedboxes(checkbox){
	if(checkbox.checked == true){

	}
}

generateBtn.onclick = function (){

	for(var i = 0; i < checkboxes.length; i++){
			// switch (checkboxes){
			// 	case 0:
			//
			// }
	}

}


// selectInput.addEventListener('change', function(){
// 	alert(selectInput.value);
// });



// var checkboxes = document.querySelectorAll('input[type="checkbox"]');
