import './globals.css'

import { useState } from 'react'

import { Header } from '@/components/header'

import { ThemeProvider } from './components/theme/theme-provider'
import { Button } from './components/ui/button'
import { generatePack } from './lib/generate-pack'
import { Card } from './types'

export function App() {
  const [packs, setPacks] = useState<Card[][]>(() =>
    Array.from({ length: 6 }).map(() => generatePack()),
  )

  function handleClick() {
    const packs = Array.from({ length: 6 }).map(() => generatePack())
    setPacks(packs)
  }

  return (
    <ThemeProvider
      storageKey="lorcana-sealed-simulator-theme"
      defaultTheme="dark"
    >
      <div className="flex min-h-screen flex-col antialiased">
        <Header />

        <div className="flex flex-1 flex-col items-center justify-center">
          <Button onClick={handleClick}>Generate Pack</Button>
          <div className="grid grid-cols-8 gap-4">
            {packs.map((pack, index) => (
              <div key={index}>
                Pack {index + 1}
                {pack.map((card) => {
                  return (
                    <div key={card.name}>
                      <img src={card.image} alt={card.name} />
                      <span>{card.name}</span>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
