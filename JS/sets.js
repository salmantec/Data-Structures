const Set = function () {
    const collection = [];

    // has - Presence of element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1)
    }

    // values - Return the set values
    this.values = function () {
        return collection;
    }

    // size - Return the size (length) of set
    this.size = function () {
        return collection.length;
    }

    // add - Adds a value into set
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }

    // remove - Removes a values from set
    this.remove = function (element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // union - Union two sets
    this.union = function (otherSet) {
        const unionSet = new Set();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(function(element) {
            unionSet.add(element);
        });
        secondSet.forEach(function(element) {
            unionSet.add(element);
        })
        return unionSet;
    }

    // intersect - Intersection of two sets
    this.intersection = function (otherset) {
        const intersectionSet = new Set();
        const firstSet = this.values();
        firstSet.forEach(function (element) {
            if (otherset.has(element)) {
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }

    // difference - Differences of two sets
    this.difference = function (otherSet) {
        const differenceSet = new Set();
        const firstSet = this.values();
        firstSet.forEach(function (element) {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });
        return differenceSet;
    }

    // subset - Check if the set is subset of different set
    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (element) {
            return otherSet.has(element)
        });
    }
}

var setA = new Set();
var setB = new Set();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());




