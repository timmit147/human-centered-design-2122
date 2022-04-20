var currentKey = 1;
var currentRow = 1;

document.addEventListener("keyup", function(event) {
    // When clicking arrow down do this function
    if (event.keyCode === 40) {
        if(currentKey != document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount){
            currentKey = currentKey+1;
            document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey-1})`).classList.remove("active");
        }
        else{
            document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
            currentKey = 1;
        }
        document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
    }

    // When clicking arrow up do this function
    if (event.keyCode === 38) {
        if(currentKey == 1 ){
            document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
            currentKey = document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount;
            }
        else{
            currentKey = currentKey-1;
            document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey+1})`).classList.remove("active");
            }
        document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
    }

    // When clicking arrow right do this function
    if (event.keyCode === 39) {
        if(currentRow == document.querySelector(`main`).childElementCount){
            document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
            currentRow = 1;
        }
        else{
            document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
            currentRow = currentRow+1;
        }
        if(currentKey > document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount){
            currentKey = document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount;
        }
        document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
    }

    // When clicking arrow left do this function
    if (event.keyCode === 37) {
        if(currentRow == 1){
            document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
            currentRow = document.querySelector(`main`).childElementCount;
        }
        else{
            document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
            currentRow = currentRow-1;
        }
        if(currentKey > document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount){
            currentKey = document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount;
        }
        document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
    }
});