import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item  text-white bg-fixed pt-6 my-20'>
            <SectionTitle subHeading={"check it out"} heading={"Featured Item"}></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-28'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At odit voluptatum ratione maiores eos esse similique qui. Distinctio itaque quos velit dicta, iusto consequatur eaque tempora ut nisi excepturi praesentium magnam quis sint, impedit voluptas quo rerum. Id, explicabo assumenda.</p>
                    <button className='btn btn-outline border-0 border-b-4'>ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;