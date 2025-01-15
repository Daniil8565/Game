import React, { useState } from 'react'
import Profile from '../components/Profile'
import ChangeData from '../components/ChangeData'
import ChangePassword from '../components/ChangePassword'

const UserData: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>('content1')

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
