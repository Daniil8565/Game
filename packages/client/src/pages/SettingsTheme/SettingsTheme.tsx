import style from './SettingsTheme.module.scss'
import { useContext } from 'react'
import { GameMenu } from '@/components/GameMenu'
import { ThemeContext } from '@/theme/ThemeContext'
import { changeUserTheme, getThems } from '@/slices/themeAPI'

// TODO убрать themes при подключении ручек
import { themes } from '@/theme/ThemeContext'

export const SettingsTheme: React.FC = () => {
  const all_themes = getThems()
  const chooseTheme = (theme_name: string) => {
    //TODO заменить themes на all_themes после подключения ручек
    setTheme(themes[theme_name])
    changeUserTheme(theme_name)
  }
  const { setTheme } = useContext(ThemeContext)
  const groupList = Object.keys(themes).map(name => {
    return (
      <div
        onClick={() => chooseTheme(name)}
        className={style['theme-blok']}
        key={name}
        style={{
          background: themes[name].color.background,
          border: `3px solid ${themes[name].color.border} `,
        }}>
        <div
          style={{ color: themes[name].color.text }}
          className={style['name']}>
          {name}
        </div>
        <div
          style={{ background: themes[name].color.large_circle_top }}
          className={style['large-circle']}>
          <div
            style={{ background: themes[name].color.small_circle_bottom }}
            className={style['small-circle']}>
            <img src={themes[name].humster} />
          </div>
        </div>
      </div>
    )
  })

  return (
    <GameMenu>
      <div className={style['settings']}>
        <div className={style['settings__flex']}>{groupList}</div>
      </div>
    </GameMenu>
  )
}
