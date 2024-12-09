import React from 'react'
import male from "../assets/man.png"
import female from "../assets/woman.png"

export const FemaleAvatar = () => {
  return (
    <div>
        <img src={female} alt="" width="50px"/>
    </div>
  )
}
export const MaleAvatar = () => {
  return (
    <div>
        <img src={male} alt="" width="50px"/>
    </div>
  )
}
