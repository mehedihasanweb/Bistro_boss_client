import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item
    // console.log(item);
    return (
        <div className='flex gap-x-4 items-center'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[110px] h-[100px]' src={image} alt="" /> 
            <div>
                <h3 className='text-2xl'>{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;