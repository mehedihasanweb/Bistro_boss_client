import React from 'react';
import FoodCard from '../../../../components/SectionTitle/FoodCard/FoodCard';


// TODO: implement pagination here on this page
const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-8'>
            {
                items.map(items => <FoodCard
                    key={items._id}
                    item={items}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;