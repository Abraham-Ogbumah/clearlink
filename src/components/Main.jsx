import React from 'react'
import Shopify from "../assets/images/shopify.svg"
import Coinbase from "../assets/images/coinbase.svg"
import Dropbox from "../assets/images/dropbox.svg"
import Intercom from "../assets/images/intercom.svg"
import Marvel from "../assets/images/marvel.svg"
import Automatic from "../assets/images/automattic.svg"

const Main = () => {
  return (
    <main className='container'>
        <span>Join 1,500+ companies already video conferencing the ClearLink way</span>
        <div className='partners'>
            <img src={Shopify} alt='shopify' />
            <img src={Coinbase} alt='shopify' />
            <img src={Dropbox} alt='shopify' />
            <img src={Intercom} alt='shopify' />
            <img src={Marvel} alt='shopify' />
            <img src={Automatic} alt='shopify' />
        </div>
    </main>
  )
}

export default Main