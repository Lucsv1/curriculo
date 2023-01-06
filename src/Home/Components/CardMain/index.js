import styled from "styled-components";

export const Card_Base = styled.div`
border: solid 1px #38393b;
box-shadow: 1px 1px 1px 1px #0f0f0f;
border-top-left-radius: 10px ;
display: flex;
justify-content: space-around;
padding: 10px;
margin-bottom: 8px;
`
export const Card = styled.div`
display: flex;
justify-content: space-around;
img{
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: relative;
    right: 13%;
}
width: 80%;
position: relative;
left: 10%;

`
export const Text = styled.div`
h2{
    text-align: justify;
    margin-bottom: 4px;
}

p{
    text-align: start;
    font-size: 20px;
}

span{
        color: blue;
}
padding: 10px ;

`