import React from 'react';

const CatByTag = (props)=>{
    let tag = props.tag;

    return(
        <img src={`https://cataas.com/cat/${tag}`} alt={`${tag} cat`} />
    )
}

export default CatByTag;