import React, { useEffect, useState } from 'react'
import Card from './Card'
import frog_img from './Frog_on_palm_frond.jpg';
import dog from './4.jpg'
import { CSSTransition } from 'react-transition-group';
import cat from './3.jpg'
const content = [
    {
        id:1,
        image:frog_img,
        content:"Siuuu"
    }
    ,
    {
        id:2,
        image:dog,
        content:"ciao"
    }
    ,
    {
        id:3,
        image:cat,
        content:"Cat"
    }
]

export default function CardList(props) {
    const [cardList,setCardList] = useState(content);
    const [displayedList,setDisplayedList]= useState(cardList.map(item=> <Card key={item.id} image={item.image} id={item.id} whenClicked={scrollCards} />));
    const adder = props.ContentAdder ;
    function scrollCards(id){
        const element = content[content.findIndex(card => card.id === id)]
        // console.log(element);
        const newList = content.filter(card => card.id !== id)
        // newList.push(element);
        setDisplayedList(newList.map(item=> <Card key={item.id} image={item.image} id={item.id} whenClicked={scrollCards}/>));
        props.ContentAdder(element.content)
    }
    
    console.log(adder);
    return (
        displayedList
  )
}
