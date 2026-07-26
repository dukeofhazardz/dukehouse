import React from 'react'

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="max-w-325 px-20 mx-auto">
        {children}
      </div>
    </div>
  )
}

export default ContentWrapper