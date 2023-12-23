import React from 'react'
import { FaSearch, FaSignInAlt, VscAccount, FaUserAlt, FaRegUser } from 'react-icons/fa';
import { GiEmptyWoodBucket, GiHealthCapsule } from "react-icons/gi";
import { PiShirtFoldedThin, PiDressThin, PiCarLight, PiDevicesThin } from "react-icons/pi";
import { LiaBabySolid } from "react-icons/lia";
import IconsWithTitle from '../iconsWithTitle/iconsWithTitle';
import { MdCable } from "react-icons/md";

const Menu = () => {
    return (
        <div
            style={{
                background: '#F6F1EE',
                margin: '20px',
                padding: '10px',
                boxShadow: '0px 0px 5px 1px lightgrey',
                borderRadius: '5px',

                marginLeft: 90

            }}
        >
            <IconsWithTitle icon={GiEmptyWoodBucket} title={"Grocery & Pets"} />
            <IconsWithTitle icon={GiHealthCapsule} title={"Health &  Beauty"} />
            <IconsWithTitle icon={PiShirtFoldedThin} title={"Men's Fashion"} />
            <IconsWithTitle icon={PiDressThin} title={"Women's Fashion"} />
            <IconsWithTitle icon={LiaBabySolid} title={"Baby & Mother"} />
            <IconsWithTitle icon={PiCarLight} title={"Home & LifeStyle"} />
            <IconsWithTitle icon={PiDevicesThin} title={"Electronic Device"} />
            <IconsWithTitle icon={MdCable} title={"Electronic Accessories"} />

            <IconsWithTitle icon={PiShirtFoldedThin} title={"Men's Fashion"} />
            <IconsWithTitle icon={PiDressThin} title={"Women's Fashion"} />
            <IconsWithTitle icon={LiaBabySolid} title={"Baby & Mother"} />
            <IconsWithTitle icon={PiCarLight} title={"Home & LifeStyle"} />
            <IconsWithTitle icon={PiDevicesThin} title={"Electronic Device"} />
            <IconsWithTitle icon={MdCable} title={"Electronic Accessories"} />
        </div>
    )
    // return (
    //     <div
    //         style={{
    //             background: '#F6F1EE',
    //             // marginInline: '20px',
    //             // paddingInline: '10px',

    //             margin: '20px',
    //             padding: '10px',

    //             boxShadow: '0px 0px 5px 1px lightgrey',
    //             borderRadius: '5px'

    //         }}
    //     >
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //         <span
    //             style={{
    //                 display: 'flex',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <FaSearch color='grey' />
    //             <p
    //                 style={{
    //                     marginLeft: '5px',
    //                     color: 'grey'
    //                 }}
    //             >Search</p>
    //         </span>
    //     </div >
    // )
}

export default Menu
