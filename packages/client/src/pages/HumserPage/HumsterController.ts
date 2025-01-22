import { getRandomInt } from '../../ utils/math_function'
import { HumsterView } from './HumsterView'
let humster_model = {
  emerald_y: 0,
  emerald_x: 0,
  expectation: 0,
  dop_count: 50,
  counter: 0,
  width: 0,
  height: 0,
}

export class HumsterController {
  private view
  public animationFrameId: number | null = null
  constructor(width: number, height: number) {
    humster_model.width = width
    humster_model.height = height
    this.view = new HumsterView(humster_model)
    this.view.drawCanvas()
    window.onclick = e => {
      const x = e.x
      const y = e.y
      humster_model.counter++
      // дополнительрые 10 очков при попадании в изумруд
      if (
        Math.abs(humster_model.emerald_x + 40 - x) < 40 &&
        Math.abs(
          humster_model.emerald_y + (window.innerHeight - height) + 30 - y
        ) < 60
      ) {
        humster_model.dop_count = humster_model.dop_count - 10
        humster_model.counter = humster_model.counter + 10
      }
      this.view.drawCanvas()
    }
    this.animation()
  }

  animation = () => {
    this.animationFrameId = window.requestAnimationFrame(this.animation)
    // отсчет задержки между падением изумрудов
    if (humster_model.expectation > 0) {
      humster_model.expectation--
      return
    }
    // уничтожение изумруда при достижении низа экрана
    // или ичерпании дополнительных баллов;
    if (
      humster_model.height === humster_model.emerald_y ||
      humster_model.dop_count === 0
    ) {
      this.view.drawCanvas()
      humster_model.emerald_x = 0
      humster_model.emerald_y = 0
      humster_model.dop_count = 50
      humster_model.expectation = getRandomInt(50) * 100
    }
    // перересовка конваса
    else this.redraw()
  }

  redraw() {
    // расчет координаты х изумруда при начале падения
    if (humster_model.emerald_x === 0 && humster_model.emerald_y === 0) {
      humster_model.emerald_x = getRandomInt(humster_model.width - 100)
    }
    humster_model.emerald_y = humster_model.emerald_y + 1
    this.view.drawCanvas()
    this.view.drawEmerald()
  }
}
