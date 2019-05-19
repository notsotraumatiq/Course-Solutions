const stringUtils = require('./stringUtils.js');
const arrayUtils = require('./arrayUtils.js');
const objUtils = require('./objUtils');



// 1..HEADDDDD CASEEEEEEEEEEEEEE
try {
    // Should Pass
    const headOne = arrayUtils.head([2, 3, 4]);
    console.log(headOne);
    console.log('head passed successfully');
    
 } catch (e) {
    console.log(e);
    console.error('head failed test case');
    
 }
 try {
    // Should Fail
    const headTwo = arrayUtils.head(1234);
    console.log(arrayUtils.head(headTwo));
    console.error('head did not error');
 } catch (e) {
    console.log(e);
    console.log('head failed successfully');
    
 }

// 2.. Stringg REPEATTTTTTTTTTTTT


try {
    // Should Pass
    const repeatOne = stringUtils.repeat("abcd",3);
    console.log(repeatOne);
    console.log('Repeat passed successfully');
 } catch (e) {
    console.log(e);
    console.error('Repeat failed test case');
    
 }
 try {
    // Should Fail
    const repeatTwo = stringUtils.repeat("abcd",);
    console.log(repeatTwo);
    console.error('Repeat did not error');
 } catch (e) {
    console.log(e);
    console.log('Repeat failed successfully');
 }

// 3... COUNTTTTTTT CHARSSSS

try {
    // Should Pass
    const countCharsOne = stringUtils.countChars('Hello, the pie is in the oven');
    console.log(countCharsOne);
    console.log('countChars passed successfully');
 } catch (e) {
    console.log(e);
    console.error('countChars failed test case');
    
 }
 try {
    // Should Fail
    const countCharsTwo = stringUtils.countChars();
    console.log(countCharsTwo);
    console.error('countChars did not error');
 } catch (e) {
    console.log(e);
    console.log('countChars failed successfully');
 }


 // 4... COUNTTTTTTT CHARSSSS

try {
    // Should Pass
    const countCharsOne = stringUtils.countChars('Hello, the pie is in the oven');
    console.log(countCharsOne);
    console.log('countChars passed successfully');
 } catch (e) {
    console.log(e);
    console.error('countChars failed test case');
    
 }
 try {
    // Should Fail
    const countCharsTwo = stringUtils.countChars();
    console.log(repeatTwo);
    console.error('countChars did not error');
 } catch (e) {
    console.log(e);
    console.log('countChars failed successfully');
 }

//  4...    mapVALUESSS


try {
    // Should Pass
    const mapValuesOne = objUtils.mapValues({ a: 1, b: 2, c: 3 }, n => n + 1);
    console.log(mapValuesOne);
    console.log('mapValues passed successfully');
 } catch (e) {
    console.log(e);
    console.error('mapValues failed test case');
    
 }
 try {
    // Should Fail
    const mapValuesTwo = objUtils.mapValues({a:1},"a");
    console.log(mapValuesTwo);
    console.error('mapValues did not error');
 } catch (e) {
    console.log(e);
    console.log('mapValues failed successfully');
 }








//console.log(arrayUtils.last([1,2,3]));
//console.log(arrayUtils.remove([11,22,33,4,45],0));
//console.log(arrayUtils.isEqual([1,2,3],[1,3]));