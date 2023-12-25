// import React, { useEffect, useState } from 'react';

// const GetData = () => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             const cartData = JSON.parse(localStorage.getItem('addToCart'));
//             setData(cartData);
//         }
//     }, []);

//     return data;
// };

// export default GetData;












const GetData = () => {

    if (typeof localStorage !== 'undefined') {
        return JSON.parse(localStorage.getItem('addToCart'))
    } else {
        // Handle the case where localStorage is not available
        return null; // Or an appropriate default value
    }
}

export default GetData









// // import React from "react"

// // const GetData = () => {
// //     // return JSON.parse(localStorage.getItem('addToCart'))
// //     let aa = localStorage.getItem('addToCart')
// //     return aa
// // }

// // export default GetData