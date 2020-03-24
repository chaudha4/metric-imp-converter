/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    let matchStr = /^[\d./]+(?=\D)/g;  // Look for 3.5 or 3.1/2 followed by all text like "Kg" "gal"
    let result = input.trim().match(matchStr);
    
    if (result == null) {
      return 1;
    }
    
    return result[0];
  };
  
  this.getUnit = function(input) {
    
    let matchStr = /(gal|l|mi|km|lbs|kg)$/ig;
    
    let result = input.trim().match(matchStr);
    
    if (result == null) {
      return null;
    }
    
    return result[0].toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var output = ['l','gal','km','mi','kg','lbs'];    
        
    return output[input.indexOf(initUnit)];
  };

  this.spellOutUnit = function(unit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var output = ['gallons','liters','miles','kilometers','pounds','kilogram'];    
        
    return output[input.indexOf(unit)];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
