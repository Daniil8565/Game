import React from 'react'
import Label from './Label'
import MyInput from './UI/Input/MyInput'
import ErrorMessage from './ErrorMessage'
import Handler from '../utils/HandlerForm/Handler'

const SectionForm = ({
  text,
  className,
  type,
  id,
  name,
  value,
  DataDirty,
  DataError,
  setData,
  setDataError,
  setDataDirty,
}) => {
  const blurHandler = e => {
    setDataDirty(true)
  }
  return (
    <div className="form__content">
      <Label text={text} />
      <div className="input__span">
        {DataDirty && DataError && <ErrorMessage message={DataError} />}
        <MyInput
          className={className}
          type={type}
          id={id}
          name={name}
          onBlur={e => blurHandler(e)}
          onChange={e => Handler(e, setData, setDataError)}
          value={value}
        />
      </div>
    </div>
  )
}

export default SectionForm
