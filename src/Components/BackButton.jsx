import React from 'react'
import { MdKeyboardBackspace } from "react-icons/md";
import {
  Link
} from "react-router-dom";


export const BackButton = ({backPage}) => {
    let link = `/#${backPage}`;

    return (
        <div>
            <div className="back-wrapper"><Link to={link} >< MdKeyboardBackspace size={60} /></Link></div>
        </div>
    )
}
