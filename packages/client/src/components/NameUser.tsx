import React from 'react'
import classes from '../style/profile.module.sass'

interface NameUserProps {
  title: string;
}

const NameUser: React.FC<NameUserProps> = ({ title }) => {
  return <div className={classes.name}>{title}</div>
}

export default NameUser
