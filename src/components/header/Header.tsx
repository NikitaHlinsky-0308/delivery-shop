import React from 'react'
import './Header.scss'
import Button from '../button/Button'

const someAlert = () => {
    alert(123)
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="logo"><a href="#">navigation</a></h1>
                <ul className="navigation">
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Demo</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="cart">
                    <Button className="button--cart" onClick={someAlert}>
                        <a href="#"><span>123:rub</span></a>
                        <div className="button__delimiter"></div>
                        <div className="iconCatr"></div>
                        <span>3</span>
                    </Button>
                </div>
            </div>
        )
    }
}

export default Header