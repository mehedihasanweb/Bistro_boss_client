import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';




const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                // console.log(loggedUser);
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const saveUser = {name: data.name, email:data.email}

                        fetch('http://localhost:5000/users',{
                            method: 'POST',
                            headers: {
                                'content-type' : 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire(
                                        'Good job!',
                                        'User profile info updated successfully',
                                        'success'
                                    )
                                    navigate('/')
                                }
                            })


                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    };


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Please Sign Up</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-400'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoUrl && <span className='text-red-400'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-400'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 Characters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-500'>Password must be less then 20 Characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have one uppercase one lowercase, one number and one special characters</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' value="Sign UP" />
                            </div>
                        </form>
                        <p><small>Already Have An Account? <Link to='/login'>Login</Link></small></p>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;