'use strict'

const wepList = document.querySelector('.wep__list')
const newWeapon = document.createElement('div')

class Weapon {
  constructor(item) {
    this.name = item.market_hash_name;
    this.price = item.price;
  }
}

const getPrices = () => {
  const marketPrices = fetch('https://cors-anywhere.herokuapp.com/https://market.csgo.com/api/v2/prices/RUB.json');
  return marketPrices

    .then(data => data.json())
    .then(list => {

      let item = list.items
      for (let i = 20; i <= 100; i++) {
        let wep = new Weapon(item[i])
        newWeapon.innerHTML +=
        `<div class="item">
          <p class="weapon">Weapon: ${wep.name}</p>
          <p class="prise">Prise: ${wep.price} Uah</p>
        </div>`
        wepList.append(newWeapon)
      }
    })
}
getPrices()