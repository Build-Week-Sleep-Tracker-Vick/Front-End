import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavSection = styled.section`
    height:70px;
    display:flex;
    background-color:white;
    align-items:flex-end;
`;
const Navigation = styled.div`
    height: 50px;
    width:100%;
    background-color:#121212;
    color:silver;
    display:flex;
    justify-content:space-evenly;
    border:1px green solid;
    align-items:center;
    
`;
const NavDiv = styled.div`
    border:2px green solid;
    width:30%;


`




const NavBar = props =>{
    

    const LogOut = () => {
        const token = localStorage.getItem("token");
        if (token) {
            localStorage.removeItem('token')
        } else return console.error('no token');
        
    }

    return (
        <NavSection>
            <Navigation>
                <NavDiv>
                    <h1>Sleep tracker - {props.firstName} placeholder {props.lastName}</h1>
                </NavDiv>
                <NavDiv>
                    <Link className='loginLink' to='/login'>Log In</Link>
                    <Link className='signUpLink'to='/signup'>Sign up</Link>
                </NavDiv>
                <NavDiv>
                    <Link className='logOutLink' to='/login' onClick={LogOut}>Log Out</Link>  
                </NavDiv>
            </Navigation>
        </NavSection>

    )
}

export default NavBar