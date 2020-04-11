import React from 'react'
import "../css/bitcoin.css"
const bitcoinList = ({value}) => (
    <div className="BitcoinElement">
        <div className="BitcoinSymbol">
            {value["symbol"]}
        </div>
        <div className="BitcoinPrice">
            {value["15m"]}
        </div>
    </div>
)

export default bitcoinList