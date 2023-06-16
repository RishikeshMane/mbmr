// import React, { useState } from 'react'
import './Button.css'

type buttonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children? : string

}

const Button = ( {className , ...props} : buttonProps) => {
    return (
    <button className={ `btn ${className}`} {...props} >
        {
           props.children 
        }
    </button>
  )
}

export default Button