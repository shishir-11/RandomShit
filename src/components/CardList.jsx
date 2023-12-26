import React from 'react'
import Card from './Card'

const content = [
    {
        id:1,
        image:"",
        content:"Siuuu"
    }
    ,
    {
        id:2,
        image:"",
        content:"ciao"
    }
]
export default function CardList() {
    
    var cardList = [];
    for (let index = 0; index < content.length; index++) {
        // const element = a[index];
        cardList.push(<Card key={content[index].id}/>)
    }

    return (
        cardList
  )
}
