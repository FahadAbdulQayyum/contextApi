import React from 'react'
import Style from './navbar.module.css'
import Logo from '../../public/logo.png'
import Image from 'next/image'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { FaSearch, FaSignInAlt, VscAccount, FaUserAlt, FaRegUser } from 'react-icons/fa';
import { SlGlobe } from "react-icons/sl";
import { CiUser } from 'react-icons/ci';
import { IoIosArrowDown } from "react-icons/io";
import { LiaOpencart } from "react-icons/lia";


// import { Alert } from '@coreui/react';
import { FaBeer } from "react-icons/fa";

// import Credentials from '../credentials/SignUp';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter()

    return (
        <div className={Style.navbar}>
            <div className={Style.navbarMargin}>
                <div
                    className={Style.upperNavbar}
                >
                    <ul
                        className={Style.upperNavbarUl}
                    >
                        <li>
                            <a>Become a Seller</a>
                        </li>
                        <li>
                            <a>Daraz Affiliate Program</a>
                        </li>
                        <li>
                            <a>Help & Support</a>
                        </li>
                        <li>
                            <a>Daraz Logistics Partner</a>
                        </li>
                    </ul>
                    <div>
                        <span
                            className={Style.logo}
                        >
                            {/* <image src="https://e1.pngegg.com/pngimages/536/365/png-clipart-f-type-logos-for-sale-black-and-red-f-logo.png" /> */}
                            {/* <Image src={Logo} width={500} height={500} /> */}
                            {/* <Image src={Logo} width={30} height={30} /> */}
                            <Image src={Logo} width={25} height={25} className={Style.smallLogo} />
                            {/* <Image src="../../public/logo.png" width={500} height={500} /> */}
                            <p>Save More on App</p>
                        </span>
                    </div>
                </div>
                <div
                    className={Style.lowerNavbar}
                >
                    <span className={Style.webLogo}>
                        <Image src={Logo} width={50} height={50} className={Style.LNImg} />
                        <h3>Fahad</h3>
                    </span>
                    <span
                        className={Style.inputSearch}
                    >
                        {/* <input placeholder="Search in Fahad's shopping" value={'Just wow'} /> */}
                        <input placeholder="Search in Fahad's shopping" />
                        <span
                            className={Style.searchLogo}
                        >
                            <FaSearch className={Style.logog} color='orange' />
                        </span>
                    </span>
                    <span className={Style.login}>
                        <span className={Style.signUpLogIn}>
                            <span
                                className={Style.sideLogo}
                            >
                                {/* <CiUser size={20} /> */}
                                <FaRegUser size={18} />
                                {/* <h4>Login</h4> */}
                                <Link href={'credentials/login'}><h4>Login</h4></Link>
                            </span>
                            &nbsp;|&nbsp;
                            <span>
                            </span>
                            {/* <h4 onClick={Credentials()}>Sign Up</h4> */}
                            {/* <button onClick={Credentials()}> */}
                            {/* <button onClick={Link('credentials/signup')}> */}
                            {/* <button onClick={() => router.push('/credentials/signup', { scroll: false })}> */}
                            {/* <button> */}
                            {/* <button onClick={() => <Link href={'credentials/signup'} />}>
                                <h4> Sign Up<h4 />
                            </button> */}
                            <Link href={'credentials/signup'}><h4>Sign Up</h4></Link>
                        </span>
                        <span
                            className={Style.sideLogo}
                        >
                            <SlGlobe />
                            <h4>EN</h4>
                            <IoIosArrowDown />
                        </span>
                        <span>
                            <LiaOpencart size={35} />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
