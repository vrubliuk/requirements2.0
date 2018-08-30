import React from "react"
import "./RS.css"

const RS = ({id}) => {

  const handleClick = () => {
    alert(id)
  }

  return <div className="RS" onClick={handleClick}>RS</div>
}

export default RS;