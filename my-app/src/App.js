import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Skills from './Skill/Skills';
import TechnicalExperience from './TechnicalExperience/TechnicalExperience';
import Projects from './Projects/Projects';
import {ImgOne} from './Images/back_ground_jessye.jpg';
import {ImgTwo} from './Images/back_ground_music.jpg';
import {ImgThree} from './Images/back_ground_painting.jpg';
import {ImgFour} from './Images/back_ground_winter.jpg';


const Intro = styled.div`
    display:block;
    font-size: 20px;
    padding-bottom:5px;
`;

const Wrap = styled.div`
    margin: 0px auto;
    max-width: 900px;
    padding: 0 5%;
`;

const Body = styled.div`
	font-family: 'Mukta Malar', sans-serif;
	position:relative;
	line-height: 1.5;
	color:#555e60;
	background-color: #d6ebf2;
	width:100%;
	margin:0;
	height: 100%;

`;

const Span = styled.div`
    font-size: 32px;
    color:#151718;
`;

const Title = styled.div`
    font-size: 32px;
    color:#151718;
`;

const CopyRight = styled.div`
    color:#245F72;
    padding-bottom: 3%;
`;

const VisibleImg = styled.img`
    position: relative;
    padding-top:170px;
    margin-bottom: 0%;
    margin-left:auto;
    margin-right: auto;
	width:55vw;
	border-radius: 50%;
`;


class App extends Component {
  render() {
    const images = [ImgOne, ImgTwo, ImgThree, ImgFour];
    return (
    <Body>
        <Wrap>
            {images &&
            images.map(img =>
            <VisibleImg src ={img} alt={img}/>)
            }
            <Intro style = {{ display: 'flex', alignItems: 'baseline' }}>
                <Span>Hello, my name is Jessye.</Span>
                <div style = {{ paddingLeft: '15px'}}> I love hiking, drawing and eating good food.</div>
            </Intro>
            <Intro>
                I am a quick learning gal with a unique mix of analytical and design skills.  I am always up for a challenge, whether it be in a computer lab or on a lake in Algonquin Park.
            </Intro>
            <Intro>
                Right now I am entering my third of Computer Engineering at the University of Toronto.
            </Intro>
            <Skills/>
            <TechnicalExperience/>
            <Projects/>
            <CopyRight>Designed and Developed by<br/>Jessye Coleman-Shapiro 2018</CopyRight>

        </Wrap>
    </Body>
    );
  }
}

export default App;
