import { HumsterController } from './HumsterController'
import { HumsterView } from './HumsterView'
import { humster_model } from './HumsterController'

jest.mock('./HumsterView', () => {
  return {
    HumsterView: jest.fn().mockImplementation(() => ({
      drawCanvas: jest.fn(),
    })),
  }
})

const createCanvasElement = () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const canvas = document.createElement('canvas')
    canvas.id = 'canvas'
    document.body.appendChild(canvas)
    return canvas
  }
  return null
}

describe('HumsterController', () => {
  let canvas: HTMLCanvasElement | null
  let humsterController: HumsterController
  let mockView: any

  beforeEach(() => {
    canvas = createCanvasElement()

    jest.clearAllMocks()

    humsterController = new HumsterController(800, 600)

    mockView = humsterController.view
  })

  afterEach(() => {
    if (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined' &&
      canvas
    ) {
      document.body.removeChild(canvas)
    }
  })

  it('инициализирует HumsterView с моделью', () => {
    expect(HumsterView).toHaveBeenCalledWith({
      emerald_y: 0,
      emerald_x: 0,
      expectation: 0,
      dop_count: 50,
      counter: 0,
      width: 800,
      height: 600,
      current_level: 1,
      current_meaning: 100,
      per: 1,
      per_hour: 643,
      transitional_meaning: 6500,
    })
  })

  it('увеличивает счётчик при клике', () => {
    const clickEvent = new MouseEvent('click', { clientX: 100, clientY: 100 })
    if (canvas) {
      canvas.dispatchEvent(clickEvent)
    }
    expect(mockView.drawCanvas).toHaveBeenCalled()
    expect(humsterController.view.drawCanvas).toHaveBeenCalled()
    expect(humster_model.counter).toBe(1)
    humster_model.counter = 0
  })
})
