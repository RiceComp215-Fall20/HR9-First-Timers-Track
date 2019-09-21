
document.addEventListener('DOMContentLoaded', function() {


  var Comp140check = document.getElementById('Comp140');
  var Comp182check = document.getElementById('Comp182');
  var Comp215check = document.getElementById('Comp215');
  var Comp310check = document.getElementById('Comp310');
  var Comp321check = document.getElementById('Comp321');
  var Comp322check = document.getElementById('Comp322');
  var Comp382check = document.getElementById('Comp382');
  var Comp411check = document.getElementById('Comp411');
  var Comp412check = document.getElementById('Comp412');
  var Comp421check = document.getElementById('Comp421');
  var Donecheck = document.getElementById('Done');
  var dict = {};
  console.log(dict);
  


   
  Comp140check.addEventListener('click', function() {
     var curColour = Comp140check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp140check.style.backgroundColor = "darkblue";

        
     	//Comp140check.style.backgroundColor = lightColor
     	delete dict["Comp140"];
     	
     	
     }
     else
     {
     	Comp140check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	dict["Comp140"] = "Tuesday3-4PM,Wednesday7-8PM"
     	
     	
     } 

  }, false);

  Comp182check.addEventListener('click', function() {
     var curColour = Comp182check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp182check.style.backgroundColor = "darkblue";

        delete dict["Comp182"];
        
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp182check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	dict["Comp182"] = "Tuesday3-4PM,Wednesday7-8PM"
     	
     	
     } 

  }, false);

  Comp215check.addEventListener('click', function() {
     var curColour = Comp215check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp215check.style.backgroundColor = "darkblue";
        delete dict["Comp215"];
        
     	//Comp140check.style.backgroundColor = lightColor
     	
     }
     else
     {
     	Comp215check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	dict["Comp215"] = "Tuesday3-4PM,Wednesday7-8PM"
     	
     	
     } 

  }, false);

  Comp310check.addEventListener('click', function() {
     var curColour = Comp310check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp310check.style.backgroundColor = "darkblue";
        delete dict["Comp310"];
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp310check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	dict["Comp310"] = "Tuesday3-4PM,Wednesday7-8PM"
     	
     } 

  }, false);

  Comp321check.addEventListener('click', function() {
     var curColour = Comp321check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp321check.style.backgroundColor = "darkblue";
        delete dict["Comp321"];
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp321check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	dict["Comp321"] = "Tuesday3-4PM,Wednesday7-8PM"
     	
     	
     } 

  }, false);

  Comp322check.addEventListener('click', function() {
     var curColour = Comp322check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp322check.style.backgroundColor = "darkblue";
        delete dict["Comp322"];
        
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp322check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	dict["Comp322"] = "Tuesday3-4PM,Wednesday7-8PM"
     	
     } 

  }, false);

  Comp382check.addEventListener('click', function() {
     var curColour = Comp382check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp382check.style.backgroundColor = "darkblue";
        delete dict["Comp382"];
        
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp382check.style.backgroundColor = "dodgerblue";
     	
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	dict["Comp382"] = "Tuesday3-4PM,Wednesday7-8PM"
     	
     } 



  }, false);

  Comp411check.addEventListener('click', function() {
     var curColour = Comp411check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp411check.style.backgroundColor = "darkblue";
        delete dict["Comp411"];
        
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp411check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	dict["Comp411"] = "Tuesday3-4PM,Wednesday7-8PM"
     	
     } 

  }, false);

  Comp412check.addEventListener('click', function() {
     var curColour = Comp412check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp412check.style.backgroundColor = "darkblue";
        delete dict["Comp412"];
        
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp412check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	dict["Comp412"] = "Tuesday3-4PM,Wednesday7-8PM"
     	
     } 

  }, false);
  
  Comp421check.addEventListener('click', function() {
     var curColour = Comp421check.style.backgroundColor;
     //print(curColour)
     //const darkColor = rgb(64,123,233)
     //const lightColor = rgb(28,35,128)
     
     if(curColour === "dodgerblue") 
     {
        Comp421check.style.backgroundColor = "darkblue";
        delete dict["Comp421"];
        
        
     	//Comp140check.style.backgroundColor = lightColor
     }
     else
     {
     	Comp421check.style.backgroundColor = "dodgerblue";
     	//Comp140check.style.backgroundColor = darkColor
     	// var curColour = rgb(64,123,233)
     	dict["Comp421"] = "Tuesday3-4PM,Wednesday7-8PM"
     	
     } 

  }, false);
  Donecheck.addEventListener('click', function() {
     
     window.open('https://calendar.google.com/calendar/r');

  }, false);

  
}, false);