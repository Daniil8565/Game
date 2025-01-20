import React, { ImgHTMLAttributes } from 'react'
import classes from './Avatar.module.scss'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Avatar: React.FC<AvatarProps> = props => {
  return <img className={classes.avatarProfile} {...props} />
}
