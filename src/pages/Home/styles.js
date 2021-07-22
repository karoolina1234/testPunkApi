import styled from "styled-components";

export const ListCard = styled.div `
    display: block;
  text-align:center;
  margin-top: 3%;
  
  form{
      width: 100%;
      display: block;
      margin: 0 auto;
     div{
         text-align: center;
     }
  }
`

export const Desc = styled.p `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 10px;
`

