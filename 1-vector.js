// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(newVec) {
        this.x += newVec.x;
        this.y += newVec.y;
        return this;
    }

    minus(newVec) {
        this.x -= newVec.x;
        this.y -= newVec.y;
        return this;
    }

    get length() {
        this.x **=2;
        this.y **=2;
        const output = Math.sqrt(this.x += this.y);
        return output;
    }
}
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

// Your code here.


// Tests
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5