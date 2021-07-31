import React, { useState } from "react"
import Navbar from "../Navbar/Navbar";
import './User.css'
import Button from '../../Constants/Button'
import TansiqModal from "./TansiqModal";
import ResultModal from "./ResultModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { putUserChoices } from "../../Services/userServices";


function User() {
    const tansiqIcon = <FontAwesomeIcon icon={faChartBar} color="#f5ba13"/>
    const resultIcon = <FontAwesomeIcon icon={faGraduationCap} color="#f5ba13"/>
    const [isTansiqOpen, setIsTansiqOpen] = useState(false)
    const [isResultOpen, setIsResultOpen] = useState(false)    

    function toggleTansiqModal(){
        setIsTansiqOpen(!isTansiqOpen)
    }

    function toggleResultModal(){
        setIsResultOpen(!isResultOpen)
    }

    function confirmChange(order){
        setIsTansiqOpen(false)
        console.log(order);
        // put request
        (async () => {
            const response = await putUserChoices(order);
            console.log(response)
          })(); 
    }


    return( 
        <>
            <Navbar isLogged= {true} />
            <div className="user-body">
                <div className="layout-grid">
                    <Button
                        icon = {tansiqIcon}
                        text = " النتيجة"
                        onOpen = {toggleResultModal}
                    />
                    <Button
                        icon = {resultIcon}
                        text = "تسجيل الرغبات"
                        onOpen = {toggleTansiqModal}
                    />

                </div>
            </div>
            {isTansiqOpen && <TansiqModal onConfirm={confirmChange} onClose={toggleTansiqModal}/>}
            {isResultOpen && <ResultModal onClose={toggleResultModal}/>}
        </>
    );
}

export default User;