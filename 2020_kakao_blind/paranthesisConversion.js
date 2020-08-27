/* Date: 2020-08-27 Thu 20:54
1st try: 34m 25s >> 통과
Comment: Level2라고 되어 있으나 처음 인상은 절대 Level2가 아니었다.
다만, 어떻게 구현해야 할지가 자세히 나와있어서 이를 그대로 구현하니 성공
 */

function solution(p) {
	if (p === "") return "";

	let [u, v] = getBalanced(p);
	console.log(`u: ${u}    v: ${v}`);

	let answer = rec(u, v);

	return answer;
}

function rec(u, v) {
	if (u === "" && v === "") return u;

	if (isRight(u)) {
		let [u1, v1] = getBalanced(v);
		return u + rec(u1, v1);
	} else {
		let [u1, v1] = getBalanced(v);
		console.log(`u1: ${u1}    v1: ${v1}`);

		return "(" + rec(u1, v1) + ")" + reverse(u);
	}
}

function reverse(str) {
	if (str.length === 2) return "";

	let ret = "";
	for (let i = 1; i < str.length - 1; i++) {
		if (str[i] === "(") ret += ")";
		else ret += "(";
	}
	return ret;
}

function getBalanced(str) {
	let count = 0;

	let i;
	for (i = 0; i < str.length; i++) {
		if (str[i] === "(") count++;
		else if (str[i] === ")") count--;

		if (count === 0) break;
	}

	return [str.slice(0, i + 1), str.slice(i + 1)];
}

function isRight(str) {
	if (str === "") return true;
	if (str[0] === ")") return false;

	let stack = [];
	stack.push(str[0]);

	for (let i = 1; i < str.length; i++) {
		let top = stack[stack.length - 1];

		if (top === "(" && str[i] === ")") {
			stack.pop();
		} else stack.push(str[i]);
	}
	return stack.length === 0;
}

console.log(solution("(()())()"));
console.log(solution(")("));
console.log(solution("()))((()"));
