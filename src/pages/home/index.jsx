import React, { useState, useEffect } from 'react'
import Btn from '../../components/Btn'
import Header from '../../components/Header/index'
import Test from '../../components/header2'
import Cellphone from '../../components/Cellphone'
import './style.css'
import TimeLine from '../../components/TimeLine'
import Loading from '../../components/Loading'

export default function() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <main>
            <Header isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
                <Btn text="BtnSmall" borderColor={"#0c899f"} size="sm"/>
                <Btn text="BtnMedium" borderColor={"#0c9f1e"} size="md"/>
                <Btn text="BtnLarge" size="lg"/>
                <TimeLine steps={5} finished={4}/>
                <Loading></Loading>
            </div>
        </main>
        </>
    )
}