import React from 'react'
import classes from '../style/profile.module.sass'

interface LabelProps {
  text: string
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return <div className={classes.label}>{text}</div>
}

export default Label
