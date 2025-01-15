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

+-----------------------------------+
|           HumsterPage             |
+-----------------------------------+
| -state: {width: number, height: number} |
| -animationFrameId: number | null  |
| -counter: number                   |
| +componentDidMount(): void         |
| +createCanvas(): void              |
| +render(): JSX.Element             |
+-----------------------------------+
               ▲
               |
+-----------------------------------+
|        CanvasManager              |
+-----------------------------------+
| -context: CanvasRenderingContext2D|
| -width: number                    |
| -height: number                   |
| -circle_x: number                 |
| -circle_y: number                 |
| -emerald_x: number                |
| -emerald_y: number                |
| -dop_count: number                |
| -expectation: number              |
| +drawCanvas(): void               |
| +drawCircle(): void               |
| +topMenu(): void                  |
| +bottomMenu(): void               |
| +drawDolar(x: number, y: number): void|
| +animation(): void                |
| +redraw(): void                   |
+-----------------------------------+
               ▲
               |
+-----------------------------------+
|        Utilities                  |
+-----------------------------------+
| +getRandomInt(max: number): number|
+-----------------------------------+


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



