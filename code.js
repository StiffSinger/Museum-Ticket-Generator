/* create variables */
var weekDay;
var age;
var price = 10;
var code;

onEvent("calculateButton", "click", function() {
/* getting the user inputs */
weekDay = getText("dayDropdown");
age = getText("ageDropdown");
code = getText("discountInput");

/*  50% discount for non-adults; on the weekends ("Saturday" and "Sunday") everyone pays full price of $10 */
if(age < 19 && weekDay != "Sunday" && weekDay != "Saturday") {
  price = price * 0.5;
}

/**
 *If you use the discount code "FREEFRIDAY" on a Friday you get in for $0.
 *No other discount codes will work and the code only works on Fridays.
 */
if (code == "FREEFRIDAY" && weekDay == "Friday") {
  price = 0;
  setProperty("discountInput", "text", ""); // clear the discount code box
}

setProperty("ticketOutput", "text", "Day: " + weekDay + "\nAge: " + age + "\nPrice: $" + price); // output the ticket info
price = 10; // set the price back to 10 to avoid bugs
});