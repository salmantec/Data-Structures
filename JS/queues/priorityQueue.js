function PriorityQueue () {
    const collection = [];

    // Actual queue methods
    // enqueue
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    }

    // dequeue
    this.dequeue = function () {
        return collection.shift()[0];
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

var pq = new PriorityQueue();
pq.enqueue(["Salman", 2]);
pq.enqueue(["Mohamed", 1]);
pq.enqueue(["Khan", 3]);
pq.print();
pq.dequeue();
console.log(pq.front());
pq.print();