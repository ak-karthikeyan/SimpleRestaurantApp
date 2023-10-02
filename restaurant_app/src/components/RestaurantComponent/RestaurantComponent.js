import { useState } from 'react';
import './RestaurantComponent.css'

export default function RestaurantComponent(props) {
    const [data, setData] = useState({ flag: false, appdata: null });

    async function getData() {
        let url = 'http://localhost:3002/data';

        let res = await fetch(url);
        let resData = await res.json();
        //console.log(resData);
        setData({ flag: true, appdata: resData })
    }
    return (
        <div className='home'>
            <h1 className='logo'>Balraj's Kitchen</h1>
            <h4>Why choose us?</h4>
            <div className='about'>Hotel highlights retro ambience, retro background - everything RETRO!!! along with well equiped modern tech and latest hygenic standards.</div>
            <button onClick={getData} className='menu-button'>View Menu</button>
            <div className='content-container'>
                {data.flag &&
                    <div className='content'>

                        <h2>Food Items</h2>
                        <ul>
                            {data.appdata[0].map((element) => {
                                if (element.dishType === 'Veg') {
                                    return <div className='list-item'><li key={element.dishName} className='item-veg'>{`${element.dishName} -- ${element.dishPrice}`}</li>
                                        <button>Buy now</button></div>
                                } else {
                                    return <div className='list-item'><li key={element.dishName} className='item-nonveg'>{`${element.dishName} -- ${element.dishPrice}`}</li>
                                        <button>Buy now</button></div>
                                }

                            })}
                        </ul>

                        <h2>Drinks</h2>
                        <ul>
                            {data.appdata[1].map((element) => {
                                if (element.dType === 'Mocktail') {
                                    return <div className='list-item'><li key={element.dName} className='drink-mocktail'>{`${element.dName} -- ${element.dPrice}`}</li>
                                        <button>Buy now</button></div>
                                } else {
                                    return <div className='list-item'><li key={element.dName} className='drink-cocktail'>{`${element.dName} -- ${element.dPrice}`}</li>
                                        <button>Buy now</button></div>
                                }

                            })}
                        </ul>

                    </div>
                }
            </div>
            <div className='footer'>Copyright 2022 - Red Chilli | Delhi</div>
        </div>

    );
}