import './globals.css'

import { useMemo } from 'react'

import { Header } from '@/components/header'

import cardData from './assets/cards.json'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  const { cards } = cardData

  const displayCards = useMemo(() => {
    return Array.from({ length: 16 }).map(() => {
      const cardIndex = Math.floor(Math.random() * cards.length) + 1

      return cards[cardIndex]
    })
  }, [cards])

  return (
    <ThemeProvider
      storageKey="lorcana-sealed-simulator-theme"
      defaultTheme="dark"
    >
      <div className="flex min-h-screen flex-col antialiased">
        <Header />

        <div className="flex flex-1 items-center justify-center">
          <div className="grid grid-cols-8 gap-4">
            {displayCards.map((card) => (
              <div key={card.name}>
                <img src={card.image} />
                <span>{card.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
