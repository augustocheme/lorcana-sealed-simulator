export enum Color {
  Amber = 'Amber',
  Amethyst = 'Amethyst',
  Emerald = 'Emerald',
  Ruby = 'Ruby',
  Sapphire = 'Sapphire',
  Steel = 'Steel',
}

export enum Rarity {
  Common = 'Common',
  Legendary = 'Legendary',
  Rare = 'Rare',
  SuperRare = 'Super Rare',
  Uncommon = 'Uncommon',
}

export enum SetID {
  Ink = 'INK',
  Rof = 'ROF',
  Tfc = 'TFC',
}

export enum SetName {
  IntoTheInklands = 'Into the Inklands',
  RiseOfTheFloodborn = 'Rise of the Floodborn',
  TheFirstChapter = 'The First Chapter',
}

export enum Type {
  Action = 'Action',
  ActionSong = 'Action - Song',
  Character = 'Character',
  Item = 'Item',
  Location = 'Location',
}

export interface Card {
  artist: string
  set_name: SetName
  set_number: number
  color: Color
  image: string
  cost: number
  inkable: boolean
  name: string
  type: Type
  rarity: Rarity
  flavor_text?: string
  card_number: number
  body_text?: string
  set_id: SetID
  classifications?: string
  lore?: number
  willpower?: number
  strength?: number
  move_cost?: number
  abilities?: string
  card_variants?: string
}

export interface Cards {
  cards: Card[]
}
