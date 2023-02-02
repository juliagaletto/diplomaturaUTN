import React from 'react';

const PromocionItem = (props) => {
    const { title, description, image} = props;
    return (
            <div className="promociones">
                
                <h6>{title}</h6>
                <img src={image}/>
                <div dangerouslySetInnerHTML={{ __html: description }}/>
                <hr />
            </div>
    );
}

export default PromocionItem;