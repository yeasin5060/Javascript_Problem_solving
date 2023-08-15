var today = new Date ();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saterday"];
    console.log("Today is :"+daylist[day]+"");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var fulltime = (hour>12)? "PM":"AM";
    hour = (hour>12)?hour-12:hour;
    if(hour === 0 && fulltime === "PM"){
    if(minute === 0 && second === 0){
        hour = 12;
        fulltime = "Noon"
    }
    else{
        hour = 12;
        fulltime = "PM"
    }
    }
    if( hour === 0 && fulltime === "AM"){
    if(minute === 0 && second === 0){
        hour = 12;
        fulltime = "Midnight"
    }
    else{
        hour = 12;
        fulltime = "AM";
    }
    }
    console.log(hour+":"+minute+":"+second);function cToF(celsius) 



    {
      var cTemp = celsius;
      var cToFahr = cTemp * 9 / 5 + 32;
      var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
        console.log(message);
    }
    
    function fToC(fahrenheit) 
    {
      var fTemp = fahrenheit;
      var fToCel = (fTemp - 32) * 5 / 9;
      var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
        console.log(message);
    } 
    cToF(60);
    fToC(45);
    
for( let a = 0; a < 5;a++){
    setTimeout(()=>console.log(a),1)
}


const var_names = "yeasin";
const a = 124;
this[var_names] = a;
console.log(this[var_names]);



var filename = "munshi.ms"
  console.log(filename.split(".").pop());
var filename = "asd.bs"
console.log(filename.split(".").pop());

