import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import Api  from '../../../Api'


const Header = ()=>{
    return(
        <div>
            <ul>
                <li>Gatos</li>
                <li>Gifs</li>
                <li>Faça um gato falar</li>
                <li>Gato por lebre</li>
            </ul>
            
        </div>
    )
}
export default Header;