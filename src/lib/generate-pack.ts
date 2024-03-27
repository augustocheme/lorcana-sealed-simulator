import { Card, Rarity, SetID } from '@/types'

import cardData from '../assets/cards.json'

const COMMON_NUMBER = 6
const UNCOMMON_NUMBER = 3
const RARE_NUMBER = 2
// const FOIL_NUMBER = 1

function getRandomRare() {
  const rand = Math.round(Math.random() * 10) + 1

  let rarityPicked = Rarity.Rare

  if (rand > 9) {
    rarityPicked = Rarity.Legendary
  } else if (rand > 6) {
    rarityPicked = Rarity.SuperRare
  }

  return rarityPicked
}

function getRandomCard(rarity: Rarity): Card {
  const cards = cardData.cards as Card[]

  const cardPool = cards.filter(
    (card) => card.set_id === SetID.Rotf && card.rarity === rarity,
  )

  const randomPick = Math.floor(Math.random() * cardPool.length)

  return cardPool[randomPick]
}

export function generatePack(): Array<Card> {
  const pack = new Set<Card>()

  for (let c = 0; c < COMMON_NUMBER; c++) {
    let card = getRandomCard(Rarity.Common)

    while (pack.has(card)) {
      card = getRandomCard(Rarity.Common)
    }

    pack.add(card)
  }

  for (let c = 0; c < UNCOMMON_NUMBER; c++) {
    let card = getRandomCard(Rarity.Uncommon)

    while (pack.has(card)) {
      card = getRandomCard(Rarity.Uncommon)
    }

    pack.add(card)
  }

  for (let c = 0; c < RARE_NUMBER; c++) {
    const rarity = getRandomRare()

    let card = getRandomCard(rarity)

    while (pack.has(card)) {
      card = getRandomCard(rarity)
    }

    pack.add(card)
  }

  console.log('pack', pack)
  return Array.from(pack)
}
