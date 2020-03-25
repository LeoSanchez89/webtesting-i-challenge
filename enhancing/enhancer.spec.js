const enhancer = require("./enhancer.js");
// test away!

const sword = {
	name: "Magic Sword",
	durability: 80,
	enhancement: 12
};

const club = {
	name: "Big Billy",
	durability: 50,
	enhancement: 20
};

const staff = {
    name: "Staff of Conjuring",
    durability: 68,
    enhancement: 0
}

describe(".repair()", function() {
	it("should return the durability of item to 100", function() {
		expect(enhancer.repair(club).durability).toBe(100);
	});
});

describe(".succeed()", function() {
	it("should increase enhancement by 1, maxed out at 20", function() {
        expect(enhancer.succeed(sword).enhancement).toBe(13);
        expect(enhancer.succeed(club).enhancement).toBe(20);
        
	});
});

describe(".fail()", function () {
    it("should decrease durability by 5 if item enhancement is below 15, by 10 if enhancement is 15 or more, and the enhancemnet by 1 if it is over 16", function () {
        expect(enhancer.fail(sword).durability).toBe(75);
        expect(enhancer.fail(club).durability).toBe(90);
        expect(enhancer.fail(club).enhancement).toBe(18);
    })
});

describe(".get()", function () {
    it("should return the item name with the enhancement level in front of it", function () {
        expect(enhancer.get(sword).name).toBe("[+13] Magic Sword");
        expect(enhancer.get(staff).name).toBe("Staff of Conjuring");
    })
})