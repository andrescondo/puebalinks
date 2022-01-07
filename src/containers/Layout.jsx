import React from 'react'

const Layout = ({children}) => {
  return(
    <div className='Layout'>
      <div className='Layout-header'>
        <h2>Links </h2>
      </div>

      {children}

    </div>
  )
}

export default Layout