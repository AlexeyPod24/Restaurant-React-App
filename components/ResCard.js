import React from "react"
import { styled } from "styled-components"


export const ResCard = ({title}) => {
    return (
            <RestaurantCard>
                <ResImage src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s18pogvibjbumrnnabxr" />
                <ResTitle>{title}</ResTitle>
                <Cousines>India, Asian</Cousines>
                <StarRating>4.4 Stars</StarRating>
                <Eta>38mins</Eta>
            </RestaurantCard>
        
    )
}




export const RestaurantCard = styled.div`
width: 200px;
height: 300px;
background-color: #f0f0f0;
padding: .4em;
&:hover {
    border: 1px solid black;
    cursor: pointer;
}
`
export const ResImage = styled.img`
width: 100%;

`


export const ResTitle = styled.h2`
padding: .4em 0;
`

export const Cousines = styled.h4`
padding: .6em 0;
`
export const StarRating = styled.h4`
padding: .6em 0;
`
export const Eta = styled.h4`
padding: .6em 0;
`
