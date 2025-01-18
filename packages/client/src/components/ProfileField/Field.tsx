import React from 'react'
import classes from './Field.module.scss'

interface FieldProps {
  description: string // Указываем, что описание должно быть строкой
}

export const Field: React.FC<FieldProps> = ({ description }) => {
  return <div className={classes.description}>{description}</div>
}
