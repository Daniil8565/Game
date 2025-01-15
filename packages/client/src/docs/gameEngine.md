# Содержание

- [UML-диаграмма общих взаимосвязей](#uml-диаграмма-общих-взаимосвязей)
- [Базовые классы](#базовые-классы)
  - [GameEngine](#gameengine)
  - [AbstractGameObject](#abstractgameobject)
  - [Расчёт столкновений](#расчёт-столкновений)
  - [Sound](#sound)
  - [Sprite](#sprite)
  - [Vector](#vector)
- [Классы игровых объектов](#классы-игровых-объектов)
  - [Player](#player)

# UML-диаграмма общих взаимосвязей

```classDiagram
    class GameEngine {
        - canvas: HTMLCanvasElement
        - context: CanvasRenderingContext2D
        - width: number
        - height: number
        - counter: number
        - animationFrameId: number | null
        - emerald_y: number
        - emerald_x: number
        - expectation: number
        - dop_count: number
        
        + componentDidMount()
        + componentWillUnmount()
        + createCanvas()
        + drawCanvas()
        + topMenu()
        + bottomMenu()
        + drawCircle()
        + drawDolar()
        + animation()
        + redraw()
        + onClick(e: MouseEvent)
    }

    class HumsterPage extends GameEngine {
        + render()
    }

    class Vector {
        - x: number
        - y: number
        
        + add(other: Vector): Vector
        + subtract(other: Vector): Vector
    }

    class Image {
        - width: number
        - height: number
        - src: string
        
        + onload(callback: () => void)
    }

    GameEngine --> Vector
    GameEngine --> Image
```

# Базовые классы

## GameEngine

Отвечает за общий цикл игры и управление объектами и звуками.

## AbstractGameObject

Абстрактный класс, представляющий общий функционал для всех игровых объектов (позиция, движение, отрисовка).

## Расчёт столкновений

Модуль, отвечающий за вычисление столкновений между объектами.

## Sound

Класс для работы со звуками.

## Sprite

Класс для работы со спрайтами.

## Vector

Класс, представляющий математический вектор для работы с позициями и скоростями.

# Классы игровых объектов

## Player
Хомяк, которого нужно тапать и развивать.



```mermaid
classDiagram
  direction RL

  class AbstractGameObject {
    <<abstract>>
    +position : Vector
    +velocity : Vector
    +width : number
    +height : number
    #debug : boolean
    -hasDelete: boolean

    +delete() void
    +init()* void
    +update(dt : number)* void
    #draw() void
    #debugDraw(color : string) void
  }

  class Vector {
    +x : number
    +y : number
  }

  class Player {
    -fireSound : Sound
    -killSound : Sound
    -idleSprite : Sprite
    -explosionSprite : Sprite

    +left() void
    +right() void
    +stop() void
    +fire() void
  }

  class Enemy {
    -fireSound : Sound
    -killSound : Sound
    -idleSprite : Sprite
    -explosionSprite : Sprite
    -dead : boolean

    +fire() void
  }

  class Swarm {
    -enemys : Enemy[0..*]
    +calcCollide() void
    +garbageCollector() void
  }

  class Projectile {
    -sprite : Sprite
  }

  class Sound {
    +name : string
    -buffer : AudioBuffer
    +play() void
  }

  class Sprite {
    +name : string
    +width : number
    +height : number
    +images : ImageBitmap[1..*]
    +draw() void
    +animate() void
    +animateOnce() boolean
  }

  class GameEngine {
    -objects: AbstractGameObject[0..*]

    +init() : Promise<boolean>
    +start() void
    +stop() void
    +addScore(score : number) void
    -gameLoop(nowTime : number) void
    -garbageCollector() void
  }

  GameEngine o-- "0..*" Swarm
  GameEngine o-- "1..2" Player
  GameEngine o-- "0..*" Projectile
  AbstractGameObject <|-- Enemy
  AbstractGameObject <|-- Player
  AbstractGameObject <|-- Swarm
  AbstractGameObject o-- Vector
  AbstractGameObject <|-- Projectile
  Swarm o-- "1..*" Enemy
  Enemy o-- Sprite
  Enemy o-- Sound
  Player o-- Sprite
  Player o-- Sound

```