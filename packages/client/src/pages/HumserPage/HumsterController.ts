import { HumsterView } from './HumsterView'
import { NavigateFunction } from 'react-router-dom'
export let humster_model = {
  emerald_y: 0,
  emerald_x: 0,
  expectation: 0,
  dop_count: 50,
  counter: 0,
  width: 0,
  height: 0,
  per: 2,
  per_hour: 643,
  current_level: 1,
  current_meaning: 100,
  transitional_meaning: 6500,
}

export class HumsterController {
  public view
  constructor(
    width: number,
    height: number,
    setIsGameStarted: (flag: boolean) => void,
    setIsGameEnded: (flag: boolean) => void,
    setGameCounter: (count: number) => void
  ) {
    humster_model.width = width
    humster_model.height = height
    this.view = new HumsterView(humster_model)

    const canvas = document.getElementById('canvas') as HTMLCanvasElement

    canvas.onclick = e => {
      const rect = canvas.getBoundingClientRect() // Получаем положение canvas на странице
      const x = e.clientX - rect.left // Координата X относительно canvas
      const y = e.clientY - rect.top // Координата Y относительно canvas

      // Проверка клика по кнопке завершения
      const buttonWidth = 150
      const buttonHeight = 50
      const buttonX = humster_model.width - buttonWidth - 20 // Позиция кнопки справа
      const buttonY = humster_model.height - buttonHeight - 20 // Позиция кнопки снизу

      if (
        x >= buttonX &&
        x <= buttonX + buttonWidth &&
        y >= buttonY &&
        y <= buttonY + buttonHeight
      ) {
        setIsGameStarted(false)
        setIsGameEnded(true)
        setGameCounter(humster_model.counter)
        return // Прерываем выполнение, чтобы не обрабатывать клик дальше
      }

      humster_model.counter = humster_model.counter + humster_model.per
      // дополнительрые 10 очков при попадании в изумруд
      if (
        Math.abs(humster_model.emerald_x + 40 - x) < 40 &&
        Math.abs(humster_model.emerald_y + 30 - y) < 60
      ) {
        humster_model.dop_count = humster_model.dop_count - 10
        humster_model.counter = humster_model.counter + 10
      }

      this.view.drawCanvas()
    }
  }
}
