```
Mainly to encapsulate some functions

FormatData
/**
 * 
 * @param {*} callback Function to set throttling
 * @param {*} delay duration
 * @returns 
 */
 throttle (callback, delay)

 /**
 * 
 * @param {*} callback Function to set debounce
 * @param {*} delay duration
 * @returns 
 */
 debounce (callback, delay)

 /**
 * 
 * @param {*} array De duplicated array
 * @returns 
 */
 unique (array)

 /**
 * 
 * @param {*} target Data requiring deep cloning
 * @param {*} map Container object, no need to pass
 * @returns 
 */
 copyDeep (target, map = new Map()) 

 
```