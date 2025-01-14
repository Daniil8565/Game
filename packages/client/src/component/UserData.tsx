import React from 'react'
import SectionUserData from './SectionUserData'

interface Section {
  text: string;
  description: string;
}

interface UserDataProps {
  dataUser?: Section[];
}

const UserData: React.FC<UserDataProps> = ({ dataUser = [] }) => {
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
