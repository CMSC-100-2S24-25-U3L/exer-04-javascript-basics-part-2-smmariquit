/**
 * This program, for the purposes of demonstrating understanding of importing packages, does the following:
 *
 *  Generate a unique ID by concatenating parameters
 *  Adds an account to a database after validation
 *  Implements a .gitignore file to exclude node modules from pushing to GitHub
 * 
 *  This specific program is the test file.
 * 
 * @author Simonee Ezekiel M. Mariquit
 * @created_date Feb 26, 2025, 10:30 AM
 * References:
 * [1] String Slicing in JS https://www.w3schools.com/jsref/jsref_slice_string.asp
 * [2] Empty strings are falsy https://www.nfriedly.com/techblog/2009/07/advanced-javascript-operators-and-truthy-falsy/
 */

import index from './index.js';

index.addAccount(["alan", "turing", "a@b.com", 19])
index.addAccount(["simonee", "mariquit", "smmariquit@up.edu.ph", 20])
index.addAccount(["gru", "minions", "gru@minioncorps.com", 19])