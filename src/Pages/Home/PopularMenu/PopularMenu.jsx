import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useManu';

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item=> item.category === 'popular')

    return (
        <div className='mt-12'>
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From Our Menu this"} />
            <div className='grid md:grid-cols-2 gap-4 mb-12'>
                {
                    popular.map(item => <MenuItem 
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;