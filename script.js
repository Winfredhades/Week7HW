// 1. Question Solution;
{
const str = 'strings are immutable in javascript';

// Split the string into an array of words
const words = str.split(" ");

// Capitalize the first letter of each word and create a new array
const capitalizedWords = words.map(word => {
  if (word.length > 0) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  } else {
    return ""; // Handle empty strings (e.g., if there are multiple spaces)
  }
});

// Join the capitalized words back into a single string
const capitalizedString = capitalizedWords.join(" ");

console.log(str); // Original string remains unchanged
console.log(capitalizedString); // Output: "Strings Are Immutable In Javascript"
}
//----------------------------------------------------------------------------------------------------------------
// 2. Question Solution;
{
  const namesArr=["roronoa zoro", "vinsmoke sanji", "tony tony chopper", "gold roger"];
  const initializednameArray = []; // Created New array for display the result.
  for(let i = 0; i < namesArr.length; i++){
    const nSurname = namesArr[i].split(" "); // Splited each name into an array of words. 
    let initials = "";
  for(let g = 0; g < nSurname.length; g++){
    initials += nSurname[g][0].toUpperCase(); // Get the first letter of each name and capitalized these.
  }
  initializednameArray.push(initials);
}
console.log(namesArr);
console.log(initializednameArray);
}
//----------------------------------------------------------------------------------------------------------------
// 3. QUESTION SOLUTION;
{
  const userInput = prompt("PLEASE ENTER A DATE FOR CHECKING WEEKEND OR NOT!!!");
    const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/g;
    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (dateRegex.test(userInput)) {
      const [day, month, year] = userInput.split(/[\/\-]/); // Split the input into day, month, and year
      const dayDate = new Date(`${month}/${day}/${year}`).getDay(); // Construct the date in MM/DD/YYYY format
      if (dayDate === 0 || dayDate === 6) {
        alert(`Given date is ${userInput}. This date is a weekend (${dayArray[dayDate]}).`);
      } else {
        alert(`Given Date is ${userInput} And this day is ${dayArray[dayDate]}. This is not a weekend.`);
      }
    } else {
      alert("Please Enter a Valid Date in 'DD/MM/YYYY' format!");
    }
}
//----------------------------------------------------------------------------------------------------------------
// 4. QUESTION SOLUTION;
{
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const day = currentDate.getDay();
  const months = ["June", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const currentMonth = currentDate.getMonth();
  console.log(`Day is : ${weekDays[day]}- Month is: ${months[currentMonth]}`);
}
//-----------------------------------------------------------------------------------------------------------------------------------------
// 5.QUESTION SOLUTION:
{
  const licensePlate = ("AG 123 456");
  const swissLicensePlateRegex = /[A-Z]{2} [1-9]{3} [1-9]{3}(?:-\d{3})?$/;
  if(swissLicensePlateRegex.test(licensePlate)){
    console.log(`The license plate is ${licensePlate} exist in Switzerland`);
  }else{
    console.log(`The license plate is not belongs to Switzerland`);
  }
}
//-----------------------------------------------------------------------------------------------------------------------