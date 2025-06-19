/**
 * 01. Create a function to Find the index of given value from given array,
 * If not exist then return -1
 */

function searchElement(arr, x) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == x) {
			return i;
		}
	}
	return -1;
}

console.log('Index of x in array = ', searchElement([1, 4, 8, 3, 8, 9], 8));



/**
 * 02. Find the all negative numbers from given array
 */

function negativeNumber(arr) {
	let negativeNumb = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			negativeNumb.push(arr[i])
		}
	}

	return negativeNumb;
}

console.log('Negative Numbers = ', negativeNumber([4, -6, -2, 8, 5, -10, -6]))


/**
 * 02.1. Find the all negative numbers from given array and get the count
 */

function countNegative(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			count++;
		}
	}

	return count;
}

console.log(countNegative([1, 4, -3, -8, -3, 4, -18, 2, -44]))

/**
 * 03. Find the largest number from an array
 */

function findLargest(arr) {
	let largest = -Infinity;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i]
		}
	}
	return largest;
}
console.log(findLargest([4, 0, 1, 19, 23, 2, 4, 9]));

/**
 * 03.1. Find the smallest number from an array
 */

function findSmallest(arr) {
	let smallest = Infinity;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i]
		}
	}
	return smallest;
}

console.log(findLargest([4, 0, 1, 19, 23, 2, 4, 9]));
