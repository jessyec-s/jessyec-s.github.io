import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { Link } from './Shared';
import Skills from './Skill/Skills';
import TechnicalExperience from './TechnicalExperience/TechnicalExperience';
import Background from './Background'
import Projects from './Projects/Projects';
import ImgOne from './Images/back_ground_jessye.jpg';
import ImgTwo from './Images/back_ground_music.jpg';
import ImgThree from './Images/back_ground_painting.jpg';
import ImgFour from './Images/back_ground_winter.jpg';
import ImgOneSmall from './Images/back_ground_jessye_small.png';
import ImgTwoSmall from './Images/back_ground_music_small.png';
import ImgThreeSmall from './Images/back_ground_painting_small.png';
import ImgFourSmall from './Images/back_ground_winter_small.png';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-123667411-1');
ReactGA.pageview(window.location.pathname + window.location.search);


const Intro = styled.div`
    display: inline-block;
    font-size: 2.5rem;
    padding-bottom:5px;
    font-size: 32px;
    
    @media (max-width: 1024px){
        font-size: 2.25rem;
    }

    @media (max-width: 768px){
        font-size: 2rem;
    }
    @media (max-width: 650px){
        font-size: 1.75rem;
    }
`;

const Wrap = styled.div`
    margin: 0px auto;
    max-width: 1000px;
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
	font-size: 18px;

`;

const Span = styled.span`
    color:#151718;
`;

const CopyRight = styled.div`
    color:#245F72;
    padding-bottom: 3%;
`;

const Header = styled.div`
   height: 100vh;
   max-width: 1440px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`;

const VisibleImg = styled.img`
    position: relative;
    margin: 10px auto 0 auto;
	width:50vw;
	border-radius: 50%;
	padding: 30px;
	
	 @media (max-width: 1050px) {
        padding:30px 0;
        width:  70vw;
    }
	
    @media (max-width: 800px) {
        padding:30px 0;
        width:90vw;
    }
    
    @media (max-width: 650px){
        width: 30%;
        padding: 0;
    }
    
    @media (max-width: 500px){
        width: 40%;
        padding: 0;
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
    const imagesSmall = [ImgOneSmall, ImgTwoSmall, ImgThreeSmall, ImgFourSmall];

    const tablet = window.innerWidth <= 650;
    const rotator = tablet ? imagesSmall : images;

    return (
    <Body>
        <Wrap>
            <Header>
                {rotator &&
                rotator.map((img, index) => <VisibleImg style = {{display: index === this.state.slideCount ? 'block' : 'none' }} src ={img} alt={img}/> )
                }
                <div>
                    <Intro> Hello! </Intro>
                    <Intro>I'm <Span>Jessye Coleman-Shapiro, </Span>an engineering student, artist and outdoor enthusiast.</Intro>
                    <Intro style={{ fontSize: '20px', paddingBottom: '20px'}}>Get in touch 👉 <Link href="mailto:cjessye@gmail.com">cjessye@gmail.com</Link></Intro>
                </div>
            </Header>
            <div style={{ height: '30px'}}/>
            <Background/>
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

{/*<Intro>*/}
    {/*I am a quick learning gal with a unique mix of analytical and design skills.  I am always up for a challenge, whether it be in a computer lab or on a lake in Algonquin Park.*/}
{/*</Intro>*/}
{/*<Intro>*/}
{/*Right now I am entering my third of Computer Engineering at the University of Toronto.*/}
{/*</Intro>*/}
