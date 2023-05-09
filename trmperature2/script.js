
document.getElementById("Celsiusbtn").addEventListener('click', function (){
    document.getElementById('mainInput').placeholder = "Enter Celsius";
    document.getElementById("mainInput").addEventListener('input', function (e) {
      let cel = e.target.value;
      
      var result = (cel * 9/5)+32;
      document.getElementById("outPut1").innerHTML = result.toFixed(3)  + " F°";
      // Converting into Kelvins
      var result = Number(cel) + 273.15;
      document.getElementById("outPut2").innerHTML = result.toFixed(3)  + " K°"
    })
  })
  
  
  document.getElementById("Fahrenheitbtn").addEventListener('click', function (){
    document.getElementById('mainInput').placeholder = "Enter Fahrenheit";
    document.getElementById("mainInput").addEventListener('input', function (e) {
      let fahr = e.target.value;
    
      var result = (fahr - 32)*5/9;
      document.getElementById("outPut1").innerHTML = result.toFixed(3) + " C°";
      
      var result = (fahr-32)*5/9 + 273.15;
      document.getElementById("outPut2").innerHTML = result.toFixed(3) + " K°";
    })
  })
  
  
  document.getElementById("Kelvinbtn").addEventListener('click', function (){
    document.getElementById('mainInput').placeholder = "Enter Kelvin";
    document.getElementById("mainInput").addEventListener('input', function (e) {
      let kel = e.target.value;
      
      var result = kel - 273.15;
      document.getElementById("outPut1").innerHTML = result.toFixed(3) + " C°";
    
      var result = (kel - 273.15) * 9/5 + 32;
      document.getElementById("outPut2").innerHTML = result.toFixed(3) + " F°";
    })
  })