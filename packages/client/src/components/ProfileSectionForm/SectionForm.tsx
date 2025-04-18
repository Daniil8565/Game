import React from 'react'
import { Label } from '@/components/ProfileLabel'
import { MyInput } from '@/components/ProfileInput'
import { ErrorMessage } from '@/components/ProfileErrorMessage'
import Handler from '../../utils/HandlerForm/Handler'
import classes from './SectionFrom.module.scss'

interface SectionFormProps {
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

export const SectionForm: React.FC<SectionFormProps> = ({
  text,
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
  const blurHandler = () => {
    setDataDirty(true)
  }

  return (
    <div className={classes.form__content}>
      <Label text={text} />
      <div className={classes.input__span}>
        {DataDirty && DataError && <ErrorMessage message={DataError} />}
        <MyInput
          type={type}
          id={id}
          name={name}
          onBlur={blurHandler}
          onChange={e => Handler({ event: e, setData, setDataError })}
          value={value}
        />
      </div>
    </div>
  )
}
