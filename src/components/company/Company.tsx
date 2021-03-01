import { Component } from "react"
import React from 'react'
import './Company.scss'

type State = {}
type Props = {
    title?: string,
    description?: string,
    complete: boolean,
    className?: string,
    onClick: Function
}

export default class Company extends Component<Props, State> {
    render () {
        
        const { title, description, className, complete,  } = this.props
        // const value = text || children
        
        return (
                <li>
                    <label className={ className } >
                        <h1>{ title }</h1>
                        <p>{ description }</p>
                        <input type="checkbox" checked={ complete }/>
                    </label>
                </li>
                // return (
                //     <button className={disable ? `disable ${className}` : className} onClick={(e) => onClick(e)}>{value}</button>
                // )
        )
    }
}
