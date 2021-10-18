//Function to display time
(function timeNow(){
    setTimeout(function() {
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log(time);
        timeNow();
    }, 1000);
})();
