document.addEventListener('DOMContentLoaded', function (){

    // set the target date and time
    const targetTime = new Date('November 17, 2024 12:00:00').getTime();

    // update the time every seconds
    const countdown = setInterval(() =>{

        // get the current time
        const now = new Date().getTime();

        // find the time difference between the target time and current time

        const timeDifference = targetTime - now;

        // getting the daysm hours, minutes and seconds from the difference

        const days = Math.floor(timeDifference / (1000*60*60*24));
        const hours = Math.floor((timeDifference % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((timeDifference % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((timeDifference % (1000*60)) / 1000);

        const countdownDisplayField = document.getElementById('countDownField');
        countdownDisplayField.innerHTML = `<span>${days}d : </span>
                                            <span>${hours}h : </span>
                                            <span>${minutes}m : </span>
                                            <span>${seconds}s</span>`;

        if(timeDifference < 0){
            clearInterval(countdown);
            countdownDisplayField.innerHTML = `Expired`;
        }
    },1000);
})