var currentKey = 1;
var currentRow = 1;
var sound = false;
var musicOn = true;
var move = false;

function music(){
    if(sound == true){
        var audio = new Audio(`music/${currentKey}.wav`);
        audio.play();
        window.setInterval(function(){
            audio.pause();
        }, 700);
    }
}


document.addEventListener("keyup", function(event) {


    if(move == false){
        // When clicking arrow down/j do this function
        if (event.keyCode === 74) {
            if(currentKey != document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount){
                currentKey = currentKey+1;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey-1})`).classList.remove("active");
            }
            else{
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                currentKey = 1;
            }
            document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
            music();
        }

        // When clicking arrow up/k do this function
        if (event.keyCode === 75) {
            if(currentKey == 1 ){
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                currentKey = document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount;
                }
            else{
                currentKey = currentKey-1;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey+1})`).classList.remove("active");
                }
            document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
            music();
        }

        // When clicking arrow right/l do this function
        if (event.keyCode === 76) {
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
        

        // When clicking arrow left/h do this function
        if (event.keyCode === 72) {
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

        // When key n clicked do this function
        if (event.keyCode === 78) {
            const currentLi = document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`);
            const li = document.createElement("li");
            let item = prompt("Please enter item", "");
            if(item != ""){
                li.appendChild(document.createTextNode(item));
                currentLi.after(li);
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey+1})`).classList.add("active");
                currentKey = currentKey+1;
            }
        }

        // When key U clicked do this function
        if (event.keyCode === 85) {
            if(currentKey != 1){
                if(currentKey != document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount){
                    document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).remove();
                    document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
                }
                else{
                    document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).remove();
                    if(!document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount < 1){
                        document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey-1})`).classList.add("active");
                        currentKey = currentKey-1;
                    }
                }
                 if(document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount == 0){
                    currentRow = currentRow+1;
                    document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
                 }

            }
        }

         // When key P clicked do this function
         if (event.keyCode === 80) {
             if(musicOn == true){
                 console.log(musicOn);
                if(document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount > 4){
                    function delay(time) {
                        return new Promise(resolve => setTimeout(resolve, time));
                    }
        
                    function song(key){
                        document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                        currentKey = key;
                        document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
                        music();
                    }
        
                    async function test() {
                        musicOn = false;
                        song(5);
                        await delay(700);
        
                        song(4);
                        await delay(700);
                        
                        song(3);
                        await delay(700);
        
                        song(4);
                        await delay(700);
        
                        song(5);
                        await delay(700);
        
                        song(5);
                        await delay(700);
        
                        song(5);
                        await delay(1000);
        
                        song(4);
                        await delay(700);
        
                        song(4);
                        await delay(700);
        
                        song(4);
                        await delay(1000);
        
                        song(5);
                        await delay(700);
        
                        song(5);
                        await delay(700);
        
                        song(5);
                        await delay(1000);
        
                        song(5);
                        await delay(700);
        
                        song(4);
                        await delay(700);
        
                        song(3);
                        await delay(700);
        
                        song(4);
                        await delay(700);
        
                        song(5);
                        await delay(700);
        
                        song(5);
                        await delay(700);
        
                        song(5);
                        await delay(1000);
        
                        song(5);
                        await delay(700);
        
                        song(4);
                        await delay(700);
        
                        song(4);
                        await delay(700);
        
                        song(5);
                        await delay(700);
        
                        song(4);
                        await delay(700);
        
                        song(3);
                        await delay(700);

                        musicOn = true;
        
                    }
                
                    test();

                }
            }
            
        }


        // When key I clicked do this function
        if (event.keyCode === 73) {
            let item = prompt("Please enter item", document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).innerHTML);
            if(item != ""){
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).innerHTML = item;
            }
        }
        // When key O clicked turn of music
        if (event.keyCode === 79) {
            if (sound == false){
                sound = true;
            }
            else{
                sound = false;
            }
            document.querySelector("#sound").classList.toggle("sound");

            
        }

        // When key 4 clicked do this function
        if (event.keyCode === 52) {
            if(document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(1)`)){
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                currentKey = 1;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
                music();
            }
        }

        // When key 5 clicked do this function
        if (event.keyCode === 53) {
            if(document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(2)`)){
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                currentKey = 2;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
                music();
            }
        }

        // When key 6 clicked do this function
        if (event.keyCode === 54) {
            if(document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(3)`)){
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                currentKey = 3;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
                music();
            }
        }

        // When key 7 clicked do this function
        if (event.keyCode === 55){
            if(document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(4)`)){
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                currentKey = 4;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
                music();
            }
        }

        // When key 8 clicked do this function
        if (event.keyCode === 56){
            if(document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(5)`)){
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                currentKey = 5;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
                music();
            }
        }

        // When key 9 clicked do this function
        if (event.keyCode === 57){
            if(document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(6)`)){
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                currentKey = 6;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
                music();
            }
        }

        // When key 0 clicked do this function
        if (event.keyCode === 48){
            if(document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(7)`)){
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                currentKey = 7;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
                music();
            }
        }


    }

    // if m is not enterd
    else{
        // When clicking arrow down/j do this function
        if (event.keyCode === 74) {
            if(currentKey < document.querySelector(`main :nth-child(${currentRow}) ul`).childElementCount){
                const text = document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).innerHTML;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).innerHTML = document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey+1})`).innerHTML;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey+1})`).innerHTML = text;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("move");
                currentKey = currentKey+1;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("move");
            }
        }

        // When clicking arrow up/k do this function
        if (event.keyCode === 75) {
            if(currentKey > 2){
                const text = document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).innerHTML;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).innerHTML = document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey-1})`).innerHTML;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey-1})`).innerHTML = text;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("move");
                currentKey = currentKey-1;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("move");
            }
        }

        // When clicking arrow right/l do this function
        if (event.keyCode === 76) {
            if(currentRow < document.querySelector(`main`).childElementCount){
                const currentLi = document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`);
                currentKey = 1;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("move");
                currentRow = currentRow+1;
                const currentUl = document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`);
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(currentLi.innerHTML));
                if(document.querySelector(`main :nth-child(${currentRow-1}) ul`).childElementCount == 1){
                    currentLi.innerHTML = "No items";
                }
                else{
                    currentLi.remove();
                }
                currentUl.after(li);
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey+1})`).classList.add("move");
                currentKey=currentKey+1;
            }
        }

        // When clicking arrow left/h do this function
        if (event.keyCode === 72) {
            if(currentRow > 1){
                const currentLi = document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`);
                currentKey = 1;
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("move");
                currentRow = currentRow-1;
                const currentUl = document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`);
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(currentLi.innerHTML));
                if(document.querySelector(`main :nth-child(${currentRow+1}) ul`).childElementCount == 1){
                    currentLi.innerHTML = "add a new item";
                }
                else{
                    currentLi.remove();
                }
                currentUl.after(li);
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey+1})`).classList.add("move");
                currentKey=currentKey+1;
            }
        }
    }

    // When clicking key M do this function
    if (event.keyCode === 77) {
        if(currentKey != 1){
            if(move == false){
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("active");
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("move");
                move = true;
            }
            else{
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.add("active");
                document.querySelector(`main :nth-child(${currentRow}) ul :nth-child(${currentKey})`).classList.remove("move");
                move = false;
            }
        }
    }
});
