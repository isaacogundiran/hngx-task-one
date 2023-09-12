 const x = new Date(); 
  
 const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
  
 const enigmaticWeekday = x.getDay(); 
  
 const mysticDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]'); 
 mysticDayElement.textContent = `Currnt Day of The Week: ${weekdays[enigmaticWeekday]}`; 
  
 const mysticalUTCTime = x.getTime(); 
  
 const arcaneTimeElement = document.querySelector('[data-testid="currentUTCTime"]'); 
 arcaneTimeElement.textContent = `Current UTC Time: ${mysticalUTCTime} ms`; 
  
    



 
      
   