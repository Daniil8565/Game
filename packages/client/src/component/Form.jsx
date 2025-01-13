import React from 'react'
import SectionForm from './SectionForm'
import Button from './UI/Button/Button'

const Form = ({ formValid, formData }) => {
  return (
    <form className="form" id="Form">
      {formData.map((sectionData, index) => (
        <SectionForm {...sectionData} key={index} />
      ))}
      <Button
        disabled={!formValid}
        className="link"
        style={{
          marginTop: '15px',
        }}>
        Сохранить
      </Button>
    </form>
  )
}

export default Form
