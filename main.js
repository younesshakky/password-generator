


var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		lowerCase = 'abcdefghijklmnopqrstuvwxyz',
		digits = '0123456789',
		symbols = '@*!#&=+-_';

var checkboxes = document.querySelectorAll('input[type="checkbox"]');

var generateBtn = document.querySelector('#generate');

var passOutput = document.querySelector('#generatedPass');

var selectInput = document.querySelector('select');


passOutput.onclick = function () {
  this.select();
}

selectInput.onchange = function () {
  console.log(selectInput.value);
}

  chars = "";

// generating
generateBtn.onclick = function () {
  passOutput.value = '';

  for (var i = 0; i < checkboxes.length;i++){
    if(checkboxes[i].checked){
      if(checkboxes[i].id === 'upperCase'){
        chars += upperCase;

      }else if (checkboxes[i].id === 'lowerCase') {
        chars += lowerCase;

      }else if (checkboxes[i].id === 'digits') {
        chars += digits;

      }else if (checkboxes[i].id === 'symbols'){
        chars += symbols;

      }

    }else{

    }
  } // end for loop

  // console.log(chars);


	if(checkboxes.length)

  for(var i = 0; i < selectInput.value; i++){
    rdNum = Math.floor(Math.random() * chars.length);
    passOutput.value += chars[rdNum];
  }
}
