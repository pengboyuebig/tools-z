// Tool function for generating throttling function
/**
 * 
 * @param {*} callback Function to set throttling
 * @param {*} delay duration
 * @returns 
 */
function throttle (callback, delay) {
  // It is used to save the time of processing events. The initial value is 0 to ensure that it will be executed for the first time
  let start = 0
  // Return event listening function = = > it will be executed every time an event occurs
  return function (event) {
    // The current time the event occurred
    const current = Date.now()
    // The time difference from the last processing event is greater than the delay time
    if (current - start > delay) {
      // Executes functions that handle events
      callback.call(event.target, event)
      // Guaranteed current time
      start = current
    }
  }
}
/* 
Tool function for generating anti shake function
*/
/**
 * 
 * @param {*} callback Function to set debounce
 * @param {*} delay duration
 * @returns 
 */
function debounce (callback, delay) {
  // Return event listening function = = > it will be executed every time an event occurs
  return function (event) {
    // If there is still an unexecuted timer, clear it
    if (callback.timeoutId) {
      clearTimeout(callback.timeoutId)
    }
    // Start the timer of delay and ensure the timer ID
    callback.timeoutId = setTimeout(() => {
      // Executes functions that handle events
      callback.call(event.target, event)
      // Delete saved timer ID
      delete callback.timeoutId
    }, delay);
  }
}
/**
 * 
 * @param {*} array De duplicated array
 * @returns 
 */
//De duplication of arrays using container objects
function unique (array) {
  const arr = []
  const obj = {}
  array.forEach(item => {
    if (!obj.hasOwnProperty(item)) {// You can determine whether there is one without traversal
      obj[item] = true
      arr.push(item)
    }
  })
  return arr
}
//Flatten arrays
/**
 * 
 * @param {*} arr Flat array
 * @returns 
 */
function flatten (arr) {
  // As long as arr is a multidimensional array (some elements are arrays)
  while (arr.some(item => Array.isArray(item))) {
    // Dimension reduction of arr
    arr = [].concat(...arr)
  }
  return arr
}
//Deep copy
/**
 * 
 * @param {*} target Data requiring deep cloning
 * @param {*} map Container object, no need to pass
 * @returns 
 */
function copyDeep (target, map = new Map()) {
  const type = getType(target)
  if (type === 'Object' || type === 'Array') {
    let cloneTarget = map.get(target)
    if (cloneTarget) {
      return cloneTarget
    }
    if (type === 'Array') {
      cloneTarget = []
      map.set(target, cloneTarget)
      target.forEach((item, index) => {
        cloneTarget[index] = deepClone4(item, map)
      })
    } else {
      cloneTarget = {}
      map.set(target, cloneTarget)
      Object.keys(target).forEach(key => {
        cloneTarget[key] = deepClone4(target[key], map)
      })
    }

    return cloneTarget
  } else {
    return target
  }
}
/* 
 String reverse order: reversestring (STR) generates a string in reverse order
*/
function reverseString (str) {
  // return str.split('').reverse().join('')
  // return [...str].reverse().join('')
  return Array.from(str).reverse().join('')
}
/**
 * Intercept string: truncate (STR, Num) if the length of the string exceeds num, intercept the length part of the previous num and end
 * @param {*} str Intercept string
 * @param {*} num Intercepted length
 * @returns 
 */
function truncate (str, num) {
  return str.length > num ? str.slice(0, num) + '...' : str
}
// Format the event and date (change the number to have a money class)
function fmoney (s, n) {
  n = n > 0 && n <= 20 ? n : 2;
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
  let l = s.split('.')[0].split('').reverse()
  let t = '';
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '');
  }
  return t.split('').reverse().join('');
};
//Replace the Arabic numerals with 一 二
function numberToUpperCase (textIndex) {
  let newString = "";
  let newTextIndex = textIndex + "";

  function sum (value, index) {
    var newValue = "";
    if (textIndex === 9) {
      return !index ? "十" : "";
    }
    let isSeat = ~~textIndex > 9 && ~~textIndex < 19;
    switch (~~value) {
      case 1:
        newValue = !index ? (isSeat ? "" : "一") : "十一";
        break;
      case 2:
        newValue = !index ? (isSeat ? "" : "二") : "十二";
        break;
      case 3:
        newValue = !index ? (isSeat ? "" : "三") : "十三";
        break;
      case 4:
        newValue = !index ? (isSeat ? "" : "四") : "十四";
        break;
      case 5:
        newValue = !index ? (isSeat ? "" : "五") : "十五";
        break;
      case 6:
        newValue = !index ? (isSeat ? "" : "六") : "十六";
        break;
      case 7:
        newValue = !index ? (isSeat ? "" : "七") : "十七";
        break;
      case 8:
        newValue = !index ? (isSeat ? "" : "八") : "十八";
        break;
      case 9:
        newValue = !index ? (isSeat ? "" : "九") : "十九";
        break;
      case 0:
        newValue = "十";
        break;
      default:
        break;
    }
    return newValue;
  }

  for (let i = 0; i < newTextIndex.length; i++) {
    newString += sum(newTextIndex.substring(i, i + 1), i);
  }
  return newString;
}
module.exports = {
  throttle,
  debounce,
  unique,
  flatten,
  copyDeep,
  reverseString,
  truncate,
  numberToUpperCase
}