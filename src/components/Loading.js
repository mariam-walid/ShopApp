import React from 'react'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center" style={{height:'18rem'}}>
  <div className="spinner-border text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  )
}

export default Loading
