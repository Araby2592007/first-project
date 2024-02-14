let countDownDate = new Date("Mar 12 , 2024 ").getTime();

let counter = setInterval(() => {

    let Datenow = new Date().getTime();
    let Datediff = countDownDate - Datenow;

    let days = Math.floor(Datediff / ( 1000 * 60 * 60 * 24 ));
    let hours = Math.floor(( Datediff % ( 1000 * 60 * 60 * 24 )) / (1000 * 60 * 60)  );
    let minute = Math.floor(( Datediff % ( 1000 * 60 * 60 )) / ( 1000 * 60 ));
    let second = Math.floor(( Datediff % ( 1000* 60 )) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days; 
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours ;
    document.querySelector(".minutes").innerHTML = minute < 10 ? `0${minute}` : minute ;
    document.querySelector(".seconds").innerHTML = second < 10 ? `0${second}` : second ;

    if(Datediff < 0 ){
        clearInterval(counter);
    }

},1000);
