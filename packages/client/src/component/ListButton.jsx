import React from 'react'
import Button from './UI/Button/Button'

const ListButton = ({ buttonData }) => {
  return (
    <div className="container__link">
      {buttonData.map((data, index) => (
        <Button className={data.className} onClick={data.onClick} key={index}>
          {data.text}
        </Button>
      ))}
    </div>
  )
}

export default ListButton
