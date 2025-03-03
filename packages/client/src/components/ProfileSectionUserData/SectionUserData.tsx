import React from 'react'
import { Label } from '@/components/ProfileLabel'
import { Field } from '@/components/ProfileField'
import classes from './SectionUserData.module.scss'

interface SectionUserDataProps {
  text: string
  description: string
}

export const SectionUserData: React.FC<SectionUserDataProps> = ({
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
