import React from 'react'
import "./crypto.css"

const price_color = (value) => {
    return (
        <div className="CryptoPrice">
            € {value["current_price"]}
        </div>
    )
}

const CryptoList = ({ value }) => (
    <div className="CryptoElement">
        <div className="CryptoHead">
            <div className="CryptoImage">
                <img src={value["image"]} alt="Logo" />
            </div>
            <div className="CryptoName">
                {value["name"]}
            </div>
        </div>
        <div className="CryptoDivider" />
        {price_color(value)}
        
        {/* <div className="CryptoPrice">
            {value["current_price"]}
        </div> */}
    </div>
)

export default CryptoList