
    
      function addZero(x, n) {
        while (x.toString().length < n) {
          x = "0" + x;
        }
        return x;
      }

      const d = new Date();
      let h = addZero(d.getUTCHours(), 2);
      let m = addZero(d.getUTCMinutes(), 2);
      let s = addZero(d.getUTCSeconds(), 2);
      let ms = addZero(d.getUTCMilliseconds(), 3);
      let time = h + ":" + m + ":" + s + ":" + ms;
      document.getElementById("currentUTCTime").innerHTML = time;
    

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[d.getUTCDay()];
document.getElementById("currentDay").innerHTML = day;

