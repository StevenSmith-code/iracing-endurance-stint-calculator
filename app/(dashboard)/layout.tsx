import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <div>
            <h1>Dashboard</h1>
        </div>
        {children}
    </div>
  )
}

export default layout