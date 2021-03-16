// $$$$$$$$$$$ Eloquent JavaScript $$$$$$$$$$$

// ==============================================
// Basic Problem 1 (Chess Board of Required Size)
// ==============================================

// let width = prompt("Enter width: ");
// let height = prompt("Enter height: ");
// const ch1 = '#';
// const ch2 = ' ';
// let result1 = '';
// let result2 = '';

// if (width == '0' || height == '0') {
//     console.log('boooooooooo....');
// } else {
//     for (let i = 0; i < Number(width); i++) {
//         if (i % 2 == 0) {
//             result1 += ch1;
//             result2 += ch2;
//         } else {
//             result1 += ch2;
//             result2 += ch1;
//         }
//     }

//     for (let i = 0; i < Number(height); i++) {
//         if (i % 2 == 0) {
//             console.log(result1);
//         } else {
//             console.log(result2);
//         }
//     }
// }

// ===============================================================================================
// Basic Problem 2 (Sequence of Additions & Multiplication to find a given target starting from 1)
// ===============================================================================================

// let target = prompt("Set a target value: ");

// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) ||
//                 find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1");
// }

// console.log(findSolution(target));

// ================================================
// Basic Problem 3 (Recursion to find odd and even)
// ================================================

// let number = Number(prompt("Enter a number: "));

// function isEven(number) {
//     if (number === 0) {
//         return 'Even';
//     } else if (number === 1 || number === -1) {
//         return 'Odd';
//     } else {
//         if (number > 1) {
//             return isEven(number - 2);
//         } else if (number < -1) {
//             return isEven(number + 2);
//         }
//     }
// }

// console.log(isEven(number));

// ================================
// Basic Problem 4 (Sum of a Range)
// ================================

// function range(start, end, step = 1) {
//     let arr = [];
//     if (start > end) {
//         for (let i = start; i > end - 1; i = i + step) {
//             arr.push(i);
//         }
//     } else {
//         for (let i = start; i < end + 1; i = i + step) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
//     console.log(step);
//     return arr;
// }

// function sum(arr) {
//     let result = 0;
//     for (let num of arr) {
//         result += num;
//     }

//     return result;
// }

// console.log(sum(range(10, 0, -3)));

// ==================================================
// Basic Problem 5 (Program to convert Array to List)
// ==================================================

// function arrToList(arr) {
//     let list;
//     if (arr.length == 0) {
//         return null;
//     } else if (arr.length == 1) {
//         return { data: arr[0], rest: null };
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             arr[i] = { data: arr[i], rest: null };
//         }
//         for (let i = arr.length - 1; i > 0; i--) {
//             arr[i - 1].rest = arr[i];
//         }
//         list = arr[0];
//         return list;
//     }
// }

// ============================================================================
// Basic Problem 6 (Program to convert List to Array and some helper functions)
// ============================================================================

// Looping method

// function listToArr(list) {
//     let arr = [];
//     let temp = list;
//     if (temp.length == 0) {
//         return [];
//     } else {
//         while (temp.rest) {
//             arr.push(temp.data);
//             temp = temp.rest;
//         }
//         arr.push(temp.data);
//         return arr;
//     }
// }

// Recursive Method

// let arr = [];

// function listToArr(list) {
//     if (list.rest == null) {
//         arr.push(list.data);
//         return arr;
//     } else {
//         arr.push(list.data);
//         return listToArr(list.rest);
//     }
// }

// Function to add an element at the start of the list

// function prepend(element, list) {
//     element = { data: element, rest: null };
//     if (list == null) {
//         list = element;
//     } else {
//         element.rest = list;
//         list = element;
//     }
//     return list;
// }

// Function to return the data at the given position

// function nthTerm(list, position) {
//     let counter = 0;
//     let temp = list;
//     if (temp == null) {
//         return undefined;
//     } else {
//         while (temp.rest) {
//             if (counter == position) {
//                 return temp.data;
//             } else if (counter != position && temp.rest == null) {
//                 return undefined;
//             } else {
//                 temp = temp.rest;
//                 counter++;
//             }
//         }
//     }
// }

// console.log(nthTerm(arrToList([]), 0));

// ======================================
// Basic Problem 7 (Array helper methods)
// ======================================

// Filtering 

// function filter(array, test) {
//     let passed = [];
//     for (let element of array) {
//         if (test(element)) {
//         passed.push(element);
//         }
//     }
//     return passed;
// }

// console.log(filter(SCRIPTS, script => script.living));

// Mapping

// function map(array, transform) {
//     let mapped = [];
//     for (let element of array) {
//         mapped.push(transform(element));
//     }
//     return mapped;
// }

// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");

// console.log(map(rtlScripts, s => s.name));

// Reducing

// function reduce(array, combine, start) {
//     let current = start;
//     for (let element of array) {
//         current = combine(current, element);
//     }
//     return current;
// }
// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// ======================================================================================
// Basic Problem 8 (Program to log the amount of different scripts used in a given input)
// ======================================================================================

// Function to return script given character code

// function characterScript(code) {
//     for (let script of SCRIPTS) {
//         if (script.ranges.some(([from, to]) => {
//             return code >= from && code < to;
//         })) {
//             return script;
//         }
//     }
//     return null;
// }

// function to group character count by script name

// function countBy(items, groupName) {
//     let counts = [];
//     for (let item of items) {
//         let name = groupName(item);
//         let known = counts.findIndex(c => c.name == name);
//         if (known == -1) {
//             counts.push({name, count: 1});
//         } else {
//             counts[known].count++;
//         }
//     }
//     return counts;
// }

// function to determine the percentage of each script used in the input

// function textScripts(text) {
//     let scripts = countBy(text, char => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.name : "none";
//     }).filter(({name}) => name != "none");
//     let total = scripts.reduce((n, {count}) => n + count, 0);
//     if (total == 0) return "No scripts found";
//     return scripts.map(({name, count}) => {
//         return `${Math.round(count * 100 / total)}% ${name}`;
//     }).join(", ");
// }

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

// =====================================================
// Basic Problem 9 (Program to flatten a given 2D array)
// =====================================================

// let arrays = [[1, 2, 3], [4, 5], [6]];

// console.log(arrays.reduce((flat, current) => flat.concat(current), []));

// =============================================================
// Basic Problem 10 (Program to implement my own looping method)
// =============================================================

// function loop(start, test, update, body) {
//     for (let value = start; test(value); value = update(value)) {
//       body(value);
//     }
// }
  
// loop(3, n => n > 0, n => n - 1, console.log);

// =============================================================
// Basic Problem 11 (Program to implement my own looping method)
// =============================================================

// function every(array, predicate) {
//     for (let element of array) {
//       if (!predicate(element)) return false;
//     }
//     return true;
// }

// function every2(array, predicate) {
//     return !array.some(element => !predicate(element));
// }

// console.log(every([1, 3, 5], n => n < 10));

// console.log(every([2, 4, 16], n => n < 10));

// console.log(every([], n => n < 10));

// ==================================================================
// Basic Problem 12 (Program to determine dominant writing direction)
// ==================================================================

// function dominantDirection(text) {
//     let counted = countBy(text, char => {
//       let script = characterScript(char.codePointAt(0));
//       return script ? script.direction : "none";
//     }).filter(({name}) => name != "none");
  
//     if (counted.length == 0) return "ltr";
  
//     return counted.reduce((a, b) => a.count > b.count ? a : b).name;
// }

// console.log(dominantDirection("Hello!"));

// console.log(dominantDirection("Hey, مساء الخير"));

// ==========================================================
// Basic Problem 13 (Program to implement an iterable matrix)
// ==========================================================

// class Matrix {
//     constructor(width, height, element = (x, y) => undefined) {
//         this.width = width;
//         this.height = height;
//         this.content = [];
//         for (let y = 0; y < height; y++) {
//             for (let x = 0; x < width; x++) {
//                 this.content[y * width + x] = element(x, y);
//             }
//         }
//     }
//     get(x, y) {
//         return this.content[y * this.width + x];
//     }
//     set(x, y, value) {
//         this.content[y * this.width + x] = value;
//     }
// }

// Matrix Iterator Class

// class MatrixIterator {
//     constructor(matrix) {
//         this.x = 0;
//         this.y = 0;
//         this.matrix = matrix;
//     }
//     next() {
//         if (this.y == this.matrix.height) return {done: true};
//         let value = {
//             x: this.x,
//             y: this.y,
//             value: this.matrix.get(this.x, this.y)
//         };
//         this.x++;
//         if (this.x == this.matrix.width) {
//             this.x = 0;
//             this.y++;
//         }
//         return {value, done: false};
//     }
// }

// Iterator function

// Matrix.prototype[Symbol.iterator] = function() {
//     return new MatrixIterator(this);
// };

// let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
// for (let {x, y, value} of matrix) {
//     console.log(x, y, value);
// }

// =======================================================================================
// Basic Problem 14 (Program to inherit a symmetric matrix from the previous matrix class)
// =======================================================================================

// class SymmetricMatrix extends Matrix {
//     constructor(size, element = (x, y) => undefined) {
//         super(size, size, (x, y) => {
//             if (x < y) return element(y, x);
//             else return element(x, y);
//         });
//     }
//     set(x, y, value) {
//         super.set(x, y, value);
//         if (x != y) {
//             super.set(y, x, value);
//         }
//     }
// }
//     let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
//     console.log(matrix.get(2, 3));

// ============================================================
// Basic Problem 15 (Program to convert celsius into farenheit)
// ============================================================

// class Temperature {
//     constructor(celsius) {
//         this.celsius = celsius;
//     }
//     get fahrenheit() {
//         return this.celsius * 1.8 + 32;
//     }
//     set fahrenheit(value) {
//         this.celsius = (value - 32) / 1.8;
//     }
//     static fromFahrenheit(value) {
//         return new Temperature((value - 32) / 1.8);
//     }
// }
// let temp = new Temperature(22);
// console.log(temp.fahrenheit);

// temp.fahrenheit = 86;
// console.log(temp.celsius);

// ===============================================
// Basic Problem 16 (Program to implement vectors)
// ===============================================

// class Vec {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     plus(other) {
//       return new Vec(this.x + other.x, this.y + other.y);
//     }
  
//     minus(other) {
//       return new Vec(this.x - other.x, this.y - other.y);
//     }
  
//     get length() {
//       return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
// }
  
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));

// console.log(new Vec(1, 2).minus(new Vec(2, 3)));

// console.log(new Vec(3, 4).length);

// ================================================================================
// Basic Problem 17 (Program to implement Group data structure with helper methods)
// ================================================================================

// class Group {
//     constructor() {
//       this.members = [];
//     }
  
//     add(value) {
//       if (!this.has(value)) {
//         this.members.push(value);
//       }
//     }
  
//     delete(value) {
//       this.members = this.members.filter(v => v !== value);
//     }
  
//     has(value) {
//       return this.members.includes(value);
//     }
  
//     static from(collection) {
//       let group = new Group;
//       for (let value of collection) {
//         group.add(value);
//       }
//       return group;
//     }
// }
  
// let group = Group.from([10, 20]);
// console.log(group.has(10));

// console.log(group.has(30));

// group.add(10);
// group.delete(10);
// console.log(group.has(10));

// =========================================================================
// Basic Problem 18 (Program to implement iterator for Group data structure)
// =========================================================================

// Group.prototype[Symbol.iterator] = function() {
//     return new GroupIterator(this);
// }

// class GroupIterator {
//     constructor(group) {
//       this.group = group;
//       this.position = 0;
//     }
  
//     next() {
//       if (this.position >= this.group.members.length) {
//         return {done: true};
//       } else {
//         let result = {value: this.group.members[this.position],
//                       done: false};
//         this.position++;
//         return result;
//       }
//     }
// }

// for (let value of Group.from(["a", "b", "c"])) {
// console.log(value);
// }

// =====================================================================================================================================
// Basic Problem 19 (Program to implement alternate way to figure out if a property brlongs to that object alone but not it's prototype)
// =====================================================================================================================================

// let map = {one: true, two: true, hasOwnProperty: true};

// console.log(Object.prototype.hasOwnProperty.call(map, "one"));

// ====================================================================================
// Basic Problem 20 (Program to implement a robot for delivering mails around the town)
// ====================================================================================

// Network of roads from one place to another 

const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

// function to convert edges into a graph

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
const roadGraph = buildGraph(roads);

// A class to update the state of robot and the parcels

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Code to check the working of previous code

// let first = new VillageState(
//     "Post Office",
//     [{place: "Post Office", address: "Alice's House"}]
// );
// let next = first.move("Alice's House");
// console.log(next.place);

// console.log(next.parcels);

// console.log(first.place);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Function to update the state of robot

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

// function to randomly pick an element form an array

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

// A robot that decides the next direction to move randomly

function randomRobot(state) {
    return {
        direction: randomPick(roadGraph[state.place])
    };
}

// class method to produce a set of random parcels

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({
            place,
            address
        });
    }
    return new VillageState("Post Office", parcels);
};

// to run the random robot

// runRobot(VillageState.random(), randomRobot);

// Given mailroute that runs around the town

var mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

// robot that decides next direction according to mailroute given

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {
        direction: memory[0],
        memory: memory.slice(1)
    };
}

//  to run route robot

// runRobot(VillageState.random(), routeRobot, []);

// function to find an efficient route to move in

function findRoute(graph, from, to) {
    let work = [{
        at: from,
        route: []
    }];
    for (let i = 0; i < work.length; i++) {
        let {
            at,
            route
        } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({
                    at: place,
                    route: route.concat(place)
                });
            }
        }
    }
}

// a robot that acts according to efficient route found for it

function goalOrientedRobot({
    place,
    parcels
}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {
        direction: route[0],
        memory: route.slice(1)
    };
}

// to run goal oriented robot

// runRobot(VillageState.random(), goalOrientedRobot, []);

// ================================================
// Basic Problem 21 (Program to compare two robots)
// ================================================

// function countSteps(state, robot, memory) {
//     for (let steps = 0;; steps++) {
//       if (state.parcels.length == 0) return steps;
//       let action = robot(state, memory);
//       state = state.move(action.direction);
//       memory = action.memory;
//     }
// }
  
//   function compareRobots(robot1, robot2) {
//     let total1 = 0, total2 = 0;
//     for (let i = 0; i < 100; i++) {
//       let state = VillageState.random();
//       total1 += countSteps(state, robot1, []);
//       total2 += countSteps(state, robot2, []);
//     }
//     console.log(`Robot 1 needed ${total1 / 100} steps per task`)
//     console.log(`Robot 2 needed ${total2 / 100}`)
// }
  
// compareRobots(routeRobot, goalOrientedRobot);

// ============================================================
// Basic Problem 22 (Program to implement more efficient robot)
// ============================================================

