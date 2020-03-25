const enhancer = require("./enhancer.js");
// test away!

let sword = {
	name: "Magic Sword",
	durability: 80,
	enhancement: 15
};

const club = {
	name: "Big Billy",
	durability: 50,
	enhancement: 20
};

// console.log("from tester:", enhancer.repair(club));

describe(".repair()", function() {
	it("should return the durability of item to 100", function() {
		expect(enhancer.repair(club).durability).toBe(100);
	});
});

// console.log("from tester:", enhancer.succeed(sword));

describe(".succeed()", function() {
	it("should increase enhancement by 1, maxed out at 20", function() {
        expect(enhancer.succeed(sword).enhancement).toBe(16);
        expect(enhancer.succeed(club).enhancement).toBe(20);
        
	});
});

