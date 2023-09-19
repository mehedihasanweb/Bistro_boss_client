import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../hooks/useManu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {

    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
         
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"} />
            {/* mein covered */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Todays Offer"} />
            {/* offered menu items */}
            <MenuCategory items={offered} />
            {/* dessert menu items */}
            <MenuCategory
                items={desserts}
                title={"desserts"}
                coverImg={dessertImg}
            ></MenuCategory>
            {/* pizzas menu items */}
            <MenuCategory
                items={pizzas}
                title={"pizzas"}
                coverImg={pizzaImg}
            ></MenuCategory>
            {/* salads menu items */}
            <MenuCategory
                items={salads}
                title={"salads"}
                coverImg={saladImg}
            ></MenuCategory>
            {/* soups menu items */}
            <MenuCategory
                items={soups}
                title={"soups"}
                coverImg={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;