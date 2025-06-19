/**
 * 01. Find the second largest number from an array
 */

function secondLargest(arr) {
	let firstLargest = -Infinity;
	let secondLargestNumber = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > firstLargest) {
			secondLargestNumber = firstLargest;
			firstLargest = arr[i];
		} else if (arr[i] > secondLargestNumber) {
			secondLargestNumber = arr[i]
		}
	}

	return secondLargestNumber;
}

console.log(secondLargest([3, 7, 2, 9, 11, 64]));

