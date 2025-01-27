import { getRandomInt } from '../../ utils/math_function'

interface HumsterModel {
  emerald_y: number
  emerald_x: number
  expectation: number
  dop_count: number
  counter: number
  width: number
  height: number
}

export class HumsterView {
  public animationFrameId: number | null = null
  private model: HumsterModel
  private circle_x: number
  private circle_y: number
  private circle_size: number
  public humster_img: HTMLImageElement
  public emerald_img: HTMLImageElement
  private context: CanvasRenderingContext2D

  constructor(humster_model: HumsterModel) {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D

    this.circle_x = humster_model.width / 2
    this.circle_y = humster_model.height / 2
    this.circle_size = Math.min(humster_model.width, humster_model.height - 100)
    this.model = humster_model
    this.humster_img = new Image()
    this.humster_img.src = '../src/image/humster.png'
    this.emerald_img = new Image()
    this.emerald_img.src = '../src/image/emerald.png'

    this.animation()
  }

  drawCanvas() {
    this.context.clearRect(0, 0, this.model.width, this.model.height)
    this.topMenu()
    this.drawCircle()
    this.context.drawImage(
      this.humster_img,
      this.circle_x - this.humster_img.width / 2,
      this.circle_y - this.humster_img.height / 2
    )
    this.bottomMenu()
    this.drawFinishButton()
  }

  topMenu() {
    this.context.fillStyle = '#32363c'
    this.context.fillRect(
      this.model.width * 0.055,
      20,
      this.model.width * 0.25,
      50
    )
    this.context.fillRect(
      this.model.width * 0.355,
      20,
      this.model.width * 0.25,
      50
    )
    this.context.fillRect(
      this.model.width * 0.655,
      20,
      this.model.width * 0.25,
      50
    )

    this.context.font = '50px Arial'
    this.context.fillStyle = '#ffffff'
    const counter_length = (this.model.counter + '').length * 10
    this.context.fillText(
      this.model.counter.toString(),
      this.model.width / 2 - counter_length,
      130
    )
    this.drawDolar(this.model.width / 2 - counter_length, 130)
  }

  drawDolar(x: number, y: number) {
    this.context.beginPath()
    this.context.fillStyle = '#f9e160'
    this.context.arc(x - 30, y - 15, 20, 0, 360)
    this.context.closePath()
    this.context.fill()

    this.context.beginPath()
    const radial_gradient = this.context.createRadialGradient(
      x - 30,
      y - 15,
      0,
      x - 30,
      y - 15,
      15
    )
    radial_gradient.addColorStop(0.5, '#fec51c')
    radial_gradient.addColorStop(1, '#fe891ca5')
    this.context.fillStyle = radial_gradient
    this.context.arc(x - 30, y - 15, 15, 0, 360)
    this.context.closePath()
    this.context.fill()

    this.context.font = '20px Arial'
    this.context.fillStyle = '#ffffff'
    this.context.fillText('$', x - 35, y - 8)
  }

  drawFinishButton() {
    const buttonWidth = 150
    const buttonHeight = 50
    const buttonX = this.model.width - buttonWidth - 20 // Позиция кнопки справа
    const buttonY = this.model.height - buttonHeight - 20 // Позиция кнопки снизу

    // Рисуем кнопку
    this.context.fillStyle = '#ff4444' // Красный цвет кнопки
    this.context.fillRect(buttonX, buttonY, buttonWidth, buttonHeight)

    // Текст на кнопке
    this.context.fillStyle = '#ffffff'
    this.context.font = '20px Arial'
    this.context.textAlign = 'center'
    this.context.fillText(
      'Завершить',
      buttonX + buttonWidth / 2,
      buttonY + buttonHeight / 2 + 8
    )
  }

  drawEmerald() {
    this.context.drawImage(
      this.emerald_img,
      this.model.emerald_x,
      this.model.emerald_y
    )
  }

  drawCircle() {
    // большой (внешний) круг
    this.context.beginPath()
    const large_circle_size =
      this.model.height > this.model.width
        ? this.circle_size * 0.4
        : this.circle_size * 0.3
    const gradient = this.context.createLinearGradient(
      0,
      this.circle_y - large_circle_size,
      0,
      this.circle_y + large_circle_size
    )
    gradient.addColorStop(0.2, '#5155DA')
    gradient.addColorStop(1, '#282D74')
    this.context.fillStyle = gradient
    this.context.arc(this.circle_x, this.circle_y, large_circle_size, 0, 360)
    this.context.closePath()
    this.context.fill()
    // маленький (внутренний) круг
    this.context.beginPath()
    const small_circle_size =
      this.model.height > this.model.width
        ? this.circle_size * 0.35
        : this.circle_size * 0.25
    const radial_gradient = this.context.createRadialGradient(
      this.circle_x,
      this.circle_y,
      0,
      this.circle_x,
      this.circle_y,
      small_circle_size
    )
    radial_gradient.addColorStop(0.6, '#35389e')
    radial_gradient.addColorStop(1, '#1c2848')
    this.context.fillStyle = radial_gradient
    this.context.arc(this.circle_x, this.circle_y, small_circle_size, 0, 360)
    this.context.closePath()
    this.context.fill()
  }

  bottomMenu() {
    this.context.font = '14px Arial'
    this.context.fillStyle = '#f7c243'
    this.context.fillText('⚡️', 40, this.model.height - 120)

    this.context.fillStyle = '#ffffff'
    this.context.fillText('6500/6500', 60, this.model.height - 120)
    this.context.fillText(
      'Boost',
      this.model.width - 110,
      this.model.height - 120
    )

    this.context.fillStyle = '#32363c'
    this.context.fillRect(
      this.model.width * 0.055,
      this.model.height - 100,
      this.model.width * 0.85,
      50
    )
  }

  animation = () => {
    this.animationFrameId = window.requestAnimationFrame(this.animation)
    // отсчет задержки между падением изумрудов
    if (this.model.expectation > 0) {
      this.model.expectation--
      return
    }
    // уничтожение изумруда при достижении низа экрана
    // или ичерпании дополнительных баллов;
    if (
      this.model.height === this.model.emerald_y ||
      this.model.dop_count === 0
    ) {
      this.drawCanvas()
      this.model.emerald_x = 0
      this.model.emerald_y = 0
      this.model.dop_count = 50
      this.model.expectation = getRandomInt(50) * 100
    }
    // перересовка конваса
    else this.redraw()
  }

  redraw() {
    // расчет координаты х изумруда при начале падения
    if (this.model.emerald_x === 0 && this.model.emerald_y === 0) {
      this.model.emerald_x = getRandomInt(this.model.width - 100)
    }
    this.model.emerald_y = this.model.emerald_y + 1
    this.drawCanvas()
    this.drawEmerald()
  }
}
