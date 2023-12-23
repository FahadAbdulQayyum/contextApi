import React from 'react'

const IconsWithTitle = ({ icon: Icon, title }) => {
    return (
        <div>
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '5px 0'
                }}
            >
                <span
                    style={{
                        backgroundColor: '#00000015',
                        borderRadius: 50,
                        padding: 3
                        // margin: 10
                    }}
                >
                    <Icon color='grey' size="15" />
                    {/* <Icon color='grey' size="15" /> */}
                </span>
                <p
                    style={{
                        marginLeft: '5px',
                        color: 'grey'
                    }}
                >{title}</p>
            </span>
        </div>
    )
}

export default IconsWithTitle
