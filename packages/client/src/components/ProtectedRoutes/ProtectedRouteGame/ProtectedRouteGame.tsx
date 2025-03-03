import { FinalPage } from '@/pages/FinalPage'
import { HumsterPage } from '@/pages/HumserPage'
import { StartPage } from '@/pages/StartPage'
import { useState } from 'react'
import { GameMenu } from '../../GameMenu'
import { ProtectedRoute } from '../../ProtectedRoute'

export const ProtectedRouteGame: React.FC = () => {
  // TODO вынести в redux-store
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [gameCounter, setGameCounter] = useState<number>(0)
  return (
    <>
      <ProtectedRoute>
        <GameMenu>
          {isGameStarted ? (
            <HumsterPage
              setIsGameStarted={setIsGameStarted}
              setIsGameEnded={setIsGameEnded}
              setGameCounter={setGameCounter}
              isGameStarted={isGameStarted}
            />
          ) : !isGameEnded ? (
            <StartPage setIsGameStarted={setIsGameStarted} />
          ) : (
            <FinalPage
              gameCounter={gameCounter}
              setIsGameEnded={setIsGameEnded}
            />
          )}
        </GameMenu>
      </ProtectedRoute>
    </>
  )
}
