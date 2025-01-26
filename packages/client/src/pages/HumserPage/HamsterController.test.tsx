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

describe('HumsterController', () => {
  let humsterController: HumsterController
  let mockView: any

  beforeEach(() => {
    jest.clearAllMocks()

    humsterController = new HumsterController(800, 600)
    mockView = humsterController.view
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
    })
  })

  it('увеличивает счётчик при клике', () => {
    const clickEvent = new MouseEvent('click', { clientX: 100, clientY: 100 })
    window.dispatchEvent(clickEvent)

    expect(mockView.drawCanvas).toHaveBeenCalled()
    expect(humsterController.view.drawCanvas).toHaveBeenCalled()
    expect(humster_model.counter).toBe(1)
    humster_model.counter = 0
  })
})
