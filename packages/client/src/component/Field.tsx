import React from 'react'
import classes from '../style/profile.module.sass'

interface FieldProps {
  description: string // Указываем, что описание должно быть строкой
}

const Field: React.FC<FieldProps> = ({ description }) => {
  return <div className={classes.description}>{description}</div>
}

export default Field
