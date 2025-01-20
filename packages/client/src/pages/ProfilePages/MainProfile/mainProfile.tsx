import React, { useState } from 'react'
import { Profile } from '@/pages/ProfilePages/Profile'
import { ChangeData } from '@/pages/ProfilePages/ChangeData'
import { ChangeDataForm } from '@/pages/ProfilePages/ChangePassword'

export const UserData: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>('content1')

  return (
    <>
      {activeContent === 'content1' && (
        <Profile setActiveContent={setActiveContent} />
      )}
      {activeContent === 'content2' && <ChangeData />}
      {activeContent === 'content3' && <ChangeDataForm />}
    </>
  )
}
