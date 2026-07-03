document.addEventListener("DOMContentLoaded",()=>{


    console.log(
        "%c🌊 Rising Waters - No Flood Risk Page Loaded",
        "color:#00ff88;font-size:16px;font-weight:bold;"
    );


    // Button click animation

    const buttons=document.querySelectorAll(".btn");


    buttons.forEach(button=>{


        button.addEventListener("click",function(){


            this.style.transform="scale(0.95)";


            setTimeout(()=>{

                this.style.transform="";

            },150);


        });


    });



    // Animate probability numbers

    const values=document.querySelectorAll(".value");


    values.forEach(value=>{


        let target=parseFloat(
            value.innerText.replace("%","")
        );


        let current=0;


        let interval=setInterval(()=>{


            current+=1;


            value.innerText=current+"%";


            if(current>=target){


                clearInterval(interval);


                value.innerText=target+"%";

            }


        },20);


    });



});