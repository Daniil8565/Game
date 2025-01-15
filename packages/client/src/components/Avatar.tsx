import React, { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Avatar: React.FC<AvatarProps> = props => {
  return <img {...props} />
}

export default Avatar
