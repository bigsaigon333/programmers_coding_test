/* Date: 2020-08-27 Thu 22:11
1st try: 1h 14m 49s >> 통과
Comment: 정말 무식한 구현이었지만, 접근방법은 맞았다. 후... 시간이 오래걸렸네 ㅠㅠ
 */
function solution(key, lock) {
	var answer = true;
	const N = lock.length + 2 * (key.length - 1);
	const BASE = key.length - 1;
	let newLock = Array(N)
		.fill(0)
		.map(() => Array(N).fill(1));

	for (let i = 0; i < lock.length; i++) {
		for (let j = 0; j < lock[i].length; j++) {
			newLock[i + BASE][j + BASE] = lock[i][j];
		}
	}

	// console.table(key);
	// console.table(newLock);

	let key1 = key;
	let key2 = rotate(key1);
	let key3 = rotate(key2);
	let key4 = rotate(key3);

	// console.table(key1);
	// console.table(key2);
	// console.table(key3);
	// console.table(key4);

	let size = newLock.length - (key.length - 1);
	// console.log(size);

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			if (couldOpen(i, j, key1, newLock, lock.length)) {
				// console.log("Succeed1: ", i, j);
				return true;
			}
			if (couldOpen(i, j, key2, newLock, lock.length)) {
				// console.log("Succeed2: ", i, j);

				return true;
			}
			if (couldOpen(i, j, key3, newLock, lock.length)) {
				// console.log("Succeed3: ", i, j);

				return true;
			}
			if (couldOpen(i, j, key4, newLock, lock.length)) {
				// console.log("Succeed4: ", i, j);
				console.table(key4);

				return true;
			}
		}
	}

	return false;
}

function duplicate(arr) {
	let ret = Array(arr.length)
		.fill(0)
		.map(() => Array(arr.length).fill(0));

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			ret[i][j] = arr[i][j];
		}
	}
	return ret;
}
function merge(px, py, key, lock) {
	let tmp = duplicate(lock);

	for (let i = 0; i < key.length; i++) {
		for (let j = 0; j < key[i].length; j++) {
			tmp[i + px][j + py] += key[i][j];
		}
	}
	return tmp;
}

function couldOpen(px, py, key, lock, SIZE) {
	let tmp = merge(px, py, key, lock);

	for (let i = key.length - 1; i < key.length - 1 + SIZE; i++) {
		for (let j = key.length - 1; j < key.length - 1 + SIZE; j++) {
			if (tmp[i][j] === 2 || tmp[i][j] === 0) return false;
		}
	}

	return true;
}

function rotate(arr) {
	let newArr = Array(arr.length)
		.fill(0)
		.map(() => Array(arr.length).fill(0));

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			// console.log(`(${i}, ${j}) => (${j},${arr.length - 1 - i})`);
			newArr[j][arr.length - 1 - i] = arr[i][j];
		}
	}
	return newArr;
}

console.log(
	solution(
		[
			[0, 0, 0],
			[1, 0, 0],
			[0, 1, 1],
		],
		[
			[1, 1, 1],
			[1, 1, 0],
			[1, 0, 1],
		]
	)
);
