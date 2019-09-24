// time 10:06

const lista = ['a', 'b', 'c'];
const listb = [1, 2, 3];

function zipList(list1, list2) {
  const list3 = [];
  for (let i = 0; i < list1.length; i++) {
    list3.push(list1[i], list2[i]);
  }
  return list3;
}

console.log(zipList(lista, listb));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(lista, listb));
