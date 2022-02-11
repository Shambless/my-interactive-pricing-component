// assigning class name to a variable
let cBox = document.querySelector(".switch input"),
    dur = document.querySelector(".month"),
    price = document.querySelector(".pricef"),
    gen = document.querySelector(".switch"),
    range = document.querySelector(".b-range");

// generates the price on switch
gen.onclick = function(){



    if(cBox.checked == true){

        let intPrice = parseInt(price.textContent);
            x=2;
        price.textContent = `${(intPrice - (intPrice * .25)) * 12}`;
        dur.textContent = `/year`;
        reset(x);
    }else{
        let x = 1;
        reset(x);
        updatePrices();
        dur.textContent = `/month`;
    }
}

// generate the price by moving the range bar
let pageviews = document.querySelector(".views span");
range.addEventListener('input', updatePrices);

function updatePrices(){

    if(range.value == 1){

        if(cBox.checked == true){
            price.textContent = `${(8 - (8 * .25)) * 12}`;
        }else{
            price.textContent = 8;
        }

        pageviews.textContent = "10k";

    }

    if(range.value == 2){

        if(cBox.checked == true){
            price.textContent = 108;
        }else{
            price.textContent = 12;
        }

        pageviews.textContent = "50k";
    }

    if(range.value == 3){

        if(cBox.checked == true){
            price.textContent = 144;
        }else{
            price.textContent = 16;
        }

        pageviews.textContent = "100k";
    }

    if(range.value == 4){

        if(cBox.checked == true){
            price.textContent = 216;
        }else{
            price.textContent = 24;
        }

        pageviews.textContent = "500k";

    }

    if(range.value == 5){

        if(cBox.checked == true){
            price.textContent = 324;
        }else{
            price.textContent = 36;
        }

        pageviews.textContent = "1M";
    }

}

// changes the slider color
function reset(x) {
	var elements = document.getElementsByClassName('switch'); // get all elements
	for(var i = 0; i < elements.length; i++){
		if (x == 1){
      elements[i].style.backgroundColor = "hsl(174, 77%, 80%)";
    }else{
      elements[i].style.backgroundColor = "hsl(225, 20%, 60%)";
    }
	}
}
