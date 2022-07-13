/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Latop from './Latop.js'

const newLatop = new Latop("i5 11thgen","8gb","HP","5MP","20000MAH");
newLatop.backLigthPresent=false;
console.log(newLatop.backLigthPresent)
console.log(newLatop.displayResolution)
newLatop.upgradeRam("16GB")
console.log(newLatop)
