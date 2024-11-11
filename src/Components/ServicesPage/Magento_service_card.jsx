import React from 'react'
import { Container } from 'react-bootstrap'

const Magento_service_card = ({cardImg , cardHeading, cardPara}) => {
  return (
    <>
    <section className="magento_service_card_prop text-center">
     
    <div className="magento_service_card_img">
    <img src={cardImg} />
    </div>
    <div className="magento_service_card_img_heading mt-2">
    <h3>{cardHeading}</h3>
    </div>
    <div className="magento_service_card_img_para text-center mt-2">
    <p>{cardPara}</p>
    </div>
  
    </section>
    </>
  )
}

export default Magento_service_card