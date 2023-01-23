import React from 'react'

const Title = ({content,addClass}) => {
  return (
    <div className={`${addClass} font-dancing font-bold text-black` }>{content}</div>
  )
}

export default Title