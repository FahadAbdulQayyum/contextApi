import React from 'react'

import SimpleSlider from './carousel';
import Menu from '../menu/menu';

const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                // flexDirection: 'column'
            }}
        >
            <div
                style={{
                    width: '25%',
                    color: 'red'
                }}
            >
                <Menu />
            </div>
            <div
                style={{
                    width: '70%',
                    borderRadius: '10px',
                    marginTop: '18px'
                }}
            >
                <SimpleSlider />
            </div>
        </div>
    )
}

export default Home


export async function getStaticProps() {
    console.log('helooooo')
    return {
        props: {
            'Name': "Fahad",
            c: console.log('helooooo')
        }
    }
}