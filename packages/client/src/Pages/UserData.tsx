import React, { useState } from 'react'
import Profile from '../component/Profile'
import ChangeData from '../component/ChangeData'
import ChangePassword from '../component/ChangePassword'

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
