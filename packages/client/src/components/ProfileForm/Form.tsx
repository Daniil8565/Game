import React from 'react'
import { SectionForm } from '@/components/ProfileSectionForm'
import { Button } from '@/components/ProfileButton'
import classes from './Form.module.scss'
import buttonClasses from '../ProfileButton/Button.module.scss'
import UserEditData from '@/services/UserEditData'

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
  function Change(data: Record<string, string>) {
    console.log('----', data)
    formData.forEach(item => {
      if (item.id == 'email') {
        console.log(item, data['email'])
        item.setData(data['email'])
      }
    })
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    const formValues: { [key: string]: string } = {}

    formData.forEach(objData => {
      formValues[objData.name] = objData.value
    })
    UserEditData(formValues, Change)
  }
  return (
    <form className={classes.form} id="Form">
      {formData.map((sectionData, index) => (
        <SectionForm {...sectionData} key={index} />
      ))}
      <Button
        type="submit" // Устанавливаем тип кнопки как submit
        disabled={!formValid}
        className={buttonClasses.link}
        onClick={handleClick}
        style={{
          marginTop: '15px',
        }}>
        Сохранить
      </Button>
    </form>
  )
}
