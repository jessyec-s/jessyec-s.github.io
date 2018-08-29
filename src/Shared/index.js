import React, { Component } from 'react';
import styled from 'styled-components';

export const Title = styled.div`

    color:#3D9FBF;
    letter-spacing: 0.1em;
    font-weight: 600;
    width: 200px;
    padding-right: 5%;
    flex-shrink: 0;
    text-align: right;
    @media (max-width: 768px) {
        text-align: left;
        width: auto;
    }
    
    
`;

export const Link = styled.a`
    color:#555e60; 
    font-weight: 700;
    text-decoration: none;

    :hover{
    	color:#9ccfe0;

    }
`;

export const Text = styled.div`
    display: inline-block;
    padding-bottom: 20px;
    font-size: 18px;
`;

export const ElementWrap = styled.div`
    display:flex;
    flex-direction: row;
    padding: 10% 0 5% 0;   
    @media (max-width: 768px) {
        flex-direction: column; 
    }
`;

export const ContentWrap = styled.div`
    max-width: 650px;
    flex-grow: 1;
    @media (max-width: 768px) {
        padding-top: 30px;
        padding-left: 50px;
    }
    
`;