import React from 'react'
import SectionForm from './SectionForm'
import Button from './UI/Button/Button'
import classes from '../style/profile.module.sass'

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

const Form: React.FC<FormProps> = ({ formValid, formData }) => {
  return (
    <form className={classes.form} id="Form">
      {formData.map((sectionData, index) => (
        <SectionForm {...sectionData} key={index} />
      ))}
      <Button
        disabled={!formValid}
        className={classes.link}
        style={{
          marginTop: '15px',
        }}>
        Сохранить
      </Button>
    </form>
  )
}

export default Form
