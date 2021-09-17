import React, { useEffect , useState } from 'react';
import Api  from '../../../Api'


const Header = ()=>{
    const [cat,setCat] = useState('')


    useEffect(()=> {
        returnCat()
    },[])
    const returnCat = async ()=>{
        const response = await Api.getRandomCat();
        const data = await response
        setCat(data)
        console.log(data)

    }

    return(
        <div>
            <h1>Cats header</h1>
            <div>
                <img src='https://cataas.com/cat' alt='cat'/>
            </div>
        </div>
    )
}
export default Header;