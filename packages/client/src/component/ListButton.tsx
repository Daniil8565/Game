import React from 'react'
import Button from './UI/Button/Button'
import classes from '../style/profile.module.sass'

interface ButtonData {
  text: string
  onClick: () => void
  customClass?: string
  style?: React.CSSProperties
}

interface ListButtonProps {
  buttonData: ButtonData[]
}

const ListButton: React.FC<ListButtonProps> = ({ buttonData }) => {
  return (
    <div className={classes.container__link}>
      {buttonData.map((data, index) => (
        <Button
          style={data.style}
          customClass={data.customClass}
          onClick={data.onClick}
          key={index}>
          {data.text}
        </Button>
      ))}
    </div>
  )
}

export default ListButton
