import React from 'react'
import classes from './NameUser.module.scss'

interface NameUserProps {
  title: string
}

export const NameUser: React.FC<NameUserProps> = ({ title }) => {
  return <div className={classes.name}>{title}</div>
}
