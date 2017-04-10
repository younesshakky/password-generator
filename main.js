

// characters
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		lowerCase = 'abcdefghijklmnopqrstuvwxyz',
		digits = '0123456789',
		symbols = '@*!#$àç&=+-_';

// elements
var checkboxes = document.querySelectorAll('input[type="checkbox"]'),
		generateBtn = document.querySelector('#generate'),
		passOutput = document.querySelector('#generatedPass'),
		selectInput = document.querySelector('select'),
		chars;


passOutput.onclick = function () {
	var st = document.getElementById('status');

	if(passOutput.value === ''){
		st.innerText = 'nothing to copy';
			setTimeout(function() {
				st.innerText = '';
			}, 500);
	}else{
		this.select();
		document.execCommand('copy');
		st.innerText = 'copied';
		setTimeout(function() {
				st.innerText = '';
		}, 500);
	}

}

selectInput.onchange = function () {
  console.log(selectInput.value);
}

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
    }else {

		}
  } // end for loop

  for(var i = 0; i < selectInput.value; i++){
    rdNum = Math.floor(Math.random() * chars.length);
    passOutput.value += chars[rdNum];
  }
}
