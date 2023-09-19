import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { users } = useContext(AuthContext)
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure()
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', users?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${users.email}`)
            console.log('res from axios', response);
            return response.data;
        },
    })
    // const { refetch, data: cart = [] } = useQuery({
    //     queryKey: ['carts', users?.email],
    //     queryFn: async () => {
    //         const response = await fetch(`http://localhost:5000/carts?email=${users.email}`,{
    //             headers: {
    //                 authorization: `bearer ${token}`
    //             }
    //         })
    //         return response.json()
    //     },
    // })
    return [cart, refetch]
}
export default useCart;
