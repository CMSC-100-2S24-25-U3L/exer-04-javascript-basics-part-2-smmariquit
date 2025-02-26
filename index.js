/**
 * This program, for the purposes of demonstrating understanding of importing packages, does the following:
 *
 *  Generate a unique ID by concatenating parameters
 *  Adds an account to a database after validation
 *  Implements a .gitignore file to exclude node modules from pushing to GitHub
 * 
 * @author Simonee Ezekiel M. Mariquit
 * @created_date Feb 26, 2025, 11:30 AM
 * 
 * References:
 * [1] String Slicing in JS https://www.w3schools.com/jsref/jsref_slice_string.asp
 * [2] Empty strings are falsy https://www.nfriedly.com/techblog/2009/07/advanced-javascript-operators-and-truthy-falsy/
 */

// Import all necessary modules.
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

// Using the first name and last name, generate a unique ID for a new user.
function generateUniqueID(fn, ln){
    let first_letter = fn[0]; // First letter of first name
    let uniqueIDString = uuidv4().slice(0,8); // Generate a UUID, then take its first 8 characters
    return first_letter + ln + uniqueIDString;
}

function addAccount(arr){
    if(arr.length != 4){ // Guardrail 1: Array must be of length 4
        return;
    }

    // Guardrail 2: First 3 elements must be strings
    if(typeof(arr[0]) != "string" || typeof(arr[1]) != "string" || typeof(arr[2]) != "string" ){
        return;
    }

    // Guardrail 3: 4th element must be a number
    if(typeof(arr[3]) != "number"){
        return;
    }

    // If elements are valid, store in variables
    let fn = arr[0]
    let ln = arr[1]
    let email = arr[2]
    let age = arr[3]

    // Guardrail 4: Strings must be non-empty
    // Note: empty strings are Falsy in JavaScript
    if(!fn || !ln || !email){
        return;
    }

    // Guardrail 5: Email must be valid accdg to vaalidator package
    if(!validator.isEmail(email)){
        return;
    }

    // Guardrail 6: Age must be at least 18
    if(age < 18){
        console.log("pass");
        return;
    }

    // Generate the line of data for the user
    let data =
        fn + ',' +
        ln + ',' +
        email + ',' +
        age + ',' +
        generateUniqueID(fn,ln) + '\n';

    // Try to append it and return true if success, otherwise return false
    try {
        appendFileSync('users.txt', data);
        return true
    } catch (err) {
        console.log(err);
        return false
    }
}

export default { generateUniqueID, addAccount }