import React from 'react'
import SectionUserData from './sectionUserData'

const UserData = ({ dataUser = [] }) => {
  return (
    <>
      {dataUser.map((section, index) => (
        <SectionUserData
          key={index}
          text={section.text}
          description={section.description}
        />
      ))}
    </>
  )
}

export default UserData
