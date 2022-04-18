import React, { useState } from "react";
import { Card } from "./card";
import "../../styles/cardGroup.css"


const CardGroup = () => {

    let characters = [
        { name: "Yoda", gender: "Male", hair: "grey", eyes: "Green", src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yoda-1568794702.jpeg?crop=0.502xw:1.00xh;0.321xw,0&resize=640:*" },
        { name: "Luke Skywalker", gender: "Male", hair: "Blonde", eyes: "Blue", src: "https://img.europapress.es/fotoweb/fotonoticia_20220207201450_1200.jpg" },
        { name: "Ahsoka Tano", gender: "Female", hair: "White-Purple", eyes: "Blue", src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2020/11/ahsoka-tano-star-wars-clone-wars-2146989.jpg?itok=-mcrg-Kz" }
    ]

    return (
        <div className="container d-flex justify-content-center">
            <ul className="cardGroupContainer">
                {characters.map((x, i) => <Card key={i} name={x.name} gender={x.gender} hair={x.hair} eyes={x.eyes} src={x.src} />)}
            </ul>
        </div>



    )
}

export default CardGroup;