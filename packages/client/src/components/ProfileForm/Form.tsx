import React from 'react'
import { SectionForm } from '@/components/ProfileSectionForm'
import { Button } from '@/components/ProfileButton'

import classes from './Form.module.scss'
import buttonClasses from '../ProfileButton/Button.module.scss'

interface SectionData {
  text: string
  type: string
  id: string
  name: string
  value: string
  DataDirty: boolean
  DataError: string | null
  setData: React.Dispatch<React.SetStateAction<string>>
  setDataError: React.Dispatch<React.SetStateAction<string>>
  setDataDirty: React.Dispatch<React.SetStateAction<boolean>>
}

interface FormProps {
  formValid: boolean
  formData: SectionData[]
}

export const Form: React.FC<FormProps> = ({ formValid, formData }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Отключает поведение по умолчанию
    console.log('Форма отправлена') // Добавьте ваше поведение здесь
  }
  return (
    <form className={classes.form} id="Form" onSubmit={handleSubmit}>
      {formData.map((sectionData, index) => (
        <SectionForm {...sectionData} key={index} />
      ))}
      <Button
        type="submit" // Устанавливаем тип кнопки как submit
        disabled={!formValid}
        className={buttonClasses.link}
        style={{
          marginTop: '15px',
        }}>
        Сохранить
      </Button>
    </form>
  )
}
