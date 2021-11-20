function Queue () {
    const collection = [];

    // Actual queue methods
    // enqueue
    this.enqueue = function (element) {
        collection.push(element);
    }

    // dequeue
    this.dequeue = function () {
        collection.shift()
    }

    // size
    this.size = function () {
        return collection.length;
    }

    // front item
    this.front = function () {
        return collection[0];
    }

    // isEmpty
    this.isEmpty = function() {
        return (collection.length === 0);
    }

    // Helper method - print
    this.print = function () {
        return console.log(collection);
    }
}

var queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.print();
queue.dequeue();
console.log(queue.front());
queue.print();