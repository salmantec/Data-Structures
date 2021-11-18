// Create a stack
const Stack = function () {
	// Initial values
	this.count = 0;
	this.storage = {};

	// Push into stacks
	this.push = function (value) {
		this.storage[this.count] = value;
		this.count++;
	}

	// Pop -> Pick latest value from stacks
	this.pop = function () {
		if (this.count === 0) {
			return undefined;
		}

		this.count--;
		const result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	// Return the size of stack
	this.size = function () {
		return this.count;
	}

	// Peak - To display the latest / top element of stack
	this.peak = function () {
		return this.storage[this.count - 1];
	}
}

const newStack = new Stack();

newStack.push(1);
newStack.push(2);
console.log(newStack.peak());
console.log(newStack.pop());
console.log(newStack.peak());