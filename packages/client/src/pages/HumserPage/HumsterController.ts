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
  public view
  constructor(width: number, height: number) {
    humster_model.width = width
    humster_model.height = height
    this.view = new HumsterView(humster_model)
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
  }
}
