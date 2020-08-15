import React from 'react'
import './NavigationOption.css'

function NavigationOption({ text, Icon }) {
    return (
        <div className="navOption">
            <div>
                <Icon />
            </div>
            <h5 className="d-none d-sm-block my-auto">{text}</h5>
        </div>
    )
}

export default NavigationOption
