import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Skills from './Skill/Skills';
import TechnicalExperience from './TechnicalExperience/TechnicalExperience';
import Projects from './Projects/Projects';
import ImgOne from './Images/back_ground_jessye.jpg';
import ImgTwo from './Images/back_ground_music.jpg';
import ImgThree from './Images/back_ground_painting.jpg';
import ImgFour from './Images/back_ground_winter.jpg';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-123667411-1');
ReactGA.pageview(window.location.pathname + window.location.search);


const Intro = styled.div`
    display: inline-block;
    font-size: 20px;
    padding-bottom:5px;
    
    @media (max-width: 600px) {
        padding-bottom:15px;
    }
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

const Span = styled.span`
    font-size: 32px;
    color:#151718;
`;

const CopyRight = styled.div`
    color:#245F72;
    padding-bottom: 3%;
`;

const VisibleImg = styled.img`
    position: relative;
    margin:auto;
    margin-right: auto;
	width:50vw;
	border-radius: 50%;
	padding: 30px;
	
    @media (max-width: 800px) {
        padding:30px 0;
        width:90vw;
    }
`;


class App extends Component {
    constructor() {
        super();
        this.state = {slideCount: 0, showNextImage: false}
    }
    componentDidMount(){

        this.nextSlide();

    }

    nextSlide = () => {
        console.log ("called")
        if (this.state.slideCount === 3) {
          this.setState({ slideCount: 0})
        } else {
          this.setState({ slideCount: this.state.slideCount + 1 })
        }

        setTimeout(this.nextSlide, 2000);
    }

  render() {
    const images = [ImgOne, ImgTwo, ImgThree, ImgFour];
    return (
    <Body>
        <Wrap>
            {images &&
            images.map((img, index) => <VisibleImg style = {{display: index === this.state.slideCount ? 'block' : 'none' }} src ={img} alt={img}/> )
            }
            <Intro>
                <Span>Hello, my name is Jessye. </Span>I love hiking, drawing and eating good food.
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
