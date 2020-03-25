module.exports = {
  succeed,
  fail,
  repair,
  get,
};

let sword = {
  name: "Magic Sword",
  durability: 80,
  enhancement: 15
}

const club = {
  name: "Big Billy",
  durability: 50,
  enhancement: 20
}

function succeed(item) {
  if (item.enhancement === 20) {
    return item;
  } else {
    item.enhancement += 1;
  }
  return { ...item };
}

function fail(item) {

  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}

