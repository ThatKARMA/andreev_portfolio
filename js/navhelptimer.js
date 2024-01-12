let sec = 0;
let hovernav = 0;

function start() {

    if (hovernav == 0) {

        sec++;

        console.log(sec);
    
        if(sec >= 5) {
            $('#mydivid').css("visibility","hidden");
            if(sec >= 12) {
                $('#mydivid').css("visibility","visible");
                sec = 0;
                console.log(sec);
                if(sec = 0) {
                    start();
                }
            }
        }
    }

}

let stop = setInterval(start, 1000);