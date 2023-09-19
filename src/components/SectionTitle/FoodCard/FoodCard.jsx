import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, price, image, recipe, _id } = item
    const { users } = useContext(AuthContext)
    const [,refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = (item) => {
        // console.log(item);
        if (users && users.email) {
            const orderItem = { menuItem: _id, name, image, price, email: users.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-72" />
            </figure>
            <p className='absolute right-0 mr-6 mt-4 px-4 bg-black text-white'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;