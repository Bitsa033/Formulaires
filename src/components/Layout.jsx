import React from 'react';
import {NavLink } from 'react-router-dom';
import '../dist/css/bootstrap.min.css'
import '../dist/css/product.css'

const Layout = () => {
    return (
        <div>
            <nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                    <NavLink to='/' className='py-2 d-none d-md-inline-block' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                    </NavLink>
                    {/* <a class="py-2 d-none d-md-inline-block" href="#">Tour</a>
                    <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
                    <a class="py-2 d-none d-md-inline-block" href="#">Features</a>
                    <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
                    <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
                    <a class="py-2 d-none d-md-inline-block" href="#">Pricing</a>
                    <a class="py-2 d-none d-md-inline-block" href="#">Cart</a> */}
                    <NavLink to='/' className='py-2 d-none d-md-inline-block' >
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/about' className='py-2 d-none d-md-inline-block'>
                        <li>About</li>
                    </NavLink>
                    <NavLink to='/services' className='py-2 d-none d-md-inline-block'>
                        <li>Services</li>
                    </NavLink>
                    <NavLink to='/blogs' className='py-2 d-none d-md-inline-block'>
                        <li>Blogs</li>
                    </NavLink>
                    <NavLink to='/contact' className='py-2 d-none d-md-inline-block'>
                        <li>Contact</li>
                    </NavLink>
                    <NavLink to='/chat' className='py-2 d-none d-md-inline-block'>
                        <li>Chat</li>
                    </NavLink>
                    <NavLink to='/users' className='py-2 d-none d-md-inline-block'>
                        <li>Users</li>
                    </NavLink>
                    <NavLink to='/products' className='py-2 d-none d-md-inline-block'>
                        <li>Products</li>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Layout;