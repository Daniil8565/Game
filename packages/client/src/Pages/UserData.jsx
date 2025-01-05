import React, { useState } from 'react'
import '../style/profile.css'
import Profile from '../component/Profile'
import ChangeData from '../component/ChangeData'
import ChangePassword from '../component/ChangePassword'

const UserData = () => {
  const [activeContent, setActiveContent] = useState('content1')

  return (
    <>
      {activeContent === 'content1' && (
        <Profile setActiveContent={setActiveContent} />
      )}
      {activeContent === 'content2' && <ChangeData />}
      {activeContent === 'content3' && <ChangePassword />}
    </>
  )
}

export default UserData
