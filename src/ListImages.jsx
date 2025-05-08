import React,{useState} from 'react'
import red from './assets/roses.jpg'
import pink from './assets/pinkrose.jpeg'
import may from './assets/mayflower.png'
import tulips from './assets/tulips.jpg'
import './App.css'

export default function ListImages()
{
    const [showlist,setImgs] =useState(false) 

    const Images=[red,pink,may,tulips];

    return (
        <div>
            <button onClick={()=>setImgs(!showlist)}>
                {showlist?'Images are displayed':'No images in the list'}
            </button>
            {showlist && (
                <ul className='row'>
                   {Images.map((item,index) =>
                    <li key={index} className='card image'><img src={item} alt=" " height="500px" width="500px" className='card-img-top'></img></li>)}
                </ul>
            )}
        </div>
    )
}