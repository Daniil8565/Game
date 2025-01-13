import React from 'react'
import Label from './Label'
import Field from './Field'

const SectionUserData = ({ text, description }) => {
  return (
    <div className="section">
      <Label text={text} />
      <Field description={description} />
    </div>
  )
}

export default SectionUserData
