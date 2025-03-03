import React from 'react'
import classes from './Label.module.scss'

interface LabelProps {
  text: string
}

export const Label: React.FC<LabelProps> = ({ text }) => {
  return <div className={classes.label}>{text}</div>
}
