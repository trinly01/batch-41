<template>
  <div>
    <h4>Hello Batch 41</h4>
    <h4 class="blue-color backg-black">Hello Batch 42</h4>
    <input type="text" placeholder="What needs to be done?">
    <ul>
      <li>asdasdasdasd</li>
      <li>qwe</li>
      <li>zxc</li>
      <li>ghj</li>
      <li>asdasdasdasd</li>
    </ul>
  </div>
</template>

<style>
h4 {
  color: pink;
}
.blue-color {
  color:aqua;
}
.backg-black {
  background-color:black;
}
</style>

<script setup>
const pi = 3.14
let noun = 'pogi'
noun = 'gwapo'

const favoriteFood = ['Pizza', 'Burger', 'Cake', 'Fries', 'Salad']

const human = {
  name: 'Jovan',
  age: 18,
  favoriteFood
}

function foodsWithLetterA (foods) {
  const foodlist = []
  for (const food of foods) {
    if (food.includes('a')) {
      foodlist.push(food)
    }
  }
  return foodlist
}

console.log('pi:', pi)
console.log('name:', noun + ' ni Trinmar')
console.log('your favorite foods are:', favoriteFood)
console.log('Human ba to?', human)

const newFavorite = foodsWithLetterA(favoriteFood)
console.log('new Favorite foods', newFavorite)
console.log('index 4', favoriteFood[4])
</script>
