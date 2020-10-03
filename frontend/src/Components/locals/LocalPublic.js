import React from 'react'

const LocalPublic = (props) => {

  const { username, email } = props

  return (
    <>
      <h1>From your Local:</h1>
      <h3>{username}</h3>
      <h3>{email}</h3>
    </>
  )
}

export default LocalPublic