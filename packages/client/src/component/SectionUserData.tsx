import React from 'react'
import Label from './Label'
import Field from './Field'
import classes from '../style/profile.module.sass'

interface SectionUserDataProps {
  text: string
  description: string
}

const SectionUserData: React.FC<SectionUserDataProps> = ({
  text,
  description,
}) => {
  return (
    <div className={classes.section}>
      <Label text={text} />
      <Field description={description} />
    </div>
  )
}

export default SectionUserData
