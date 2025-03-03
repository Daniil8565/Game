import React from 'react'
import { Button } from '@/components/ProfileButton'
import classes from './ListButton.module.scss'

interface ButtonData {
  text: string
  onClick?: () => void
  customClass?: string
  style?: React.CSSProperties
}

interface ListButtonProps {
  buttonData: ButtonData[]
}

export const ListButton: React.FC<ListButtonProps> = ({ buttonData }) => {
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
