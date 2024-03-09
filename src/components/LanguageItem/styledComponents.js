import styled from 'styled-components'

export const ButtonsList = styled.li`
    list-style-type:none;
    margin-top:40px;
`
export const Button = styled.button`
    heigth:40px;
    width:100px;
    font-family:"Roboto";
    border:1px solid #db1c48;
    border-radius:15px;
    padding:10px;
    text-align:center;
    cursor:pointer;
    color: ${props => (props.active ? '#ffffff' : '#db1c48')}
    background-color: ${props => (props.active ? '#db1c48' : '#ffffff')}
`
