# Содержание

- [UML-диаграмма общих взаимосвязей](#uml-диаграмма-общих-взаимосвязей)
- [Базовые классы](#базовые-классы)
  - [GameLogic](#gameengine)
  - [CanvasBlock](#abstractgameobject)
- [Классы игровых объектов](#классы-игровых-объектов)
  - [Player](#player)

# UML-диаграмма общих взаимосвязей

```mermaid
classDiagram
  direction RL

  class GameLogic {
    <<abstract>>
    - counter
    - emerald_x
    - emerald_y
    - dop_count
   	- expectation

	+ init()
	+ update(dt)
	+ draw()
  }

  class CanvasBlock {
    - width
    - height
	- context

	+ createCanvas
	+ drawCanvas
	+ topMenu
	+ bottomMenu
	+ animation
  }

  class MathUtils {
    + getRandomInt
  }

  class EventManager {
    + addClickHandler
    + handleResize
    + handleUnload
  }

  class ImagesLoader {
    + loadImage
    + onLoad
  }


  GameLogic <|-- CanvasBlock
  CanvasBlock --|> MathUtils
  ImagesLoader <|--|> EventManager

```

# Базовые классы

## GameLogic

Отвечает за общий цикл игры и управление объектами и звуками.

## Player

Хомяк, которого нужно тапать и развивать.
