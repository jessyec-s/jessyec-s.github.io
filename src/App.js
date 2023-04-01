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
import PointingUpEmoji from './Images/pointing_up.png';
import RightPointerEmoji from './Images/right_pointer.png';
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
    
    @media (max-width: 450px){
        font-size: 1.3rem;
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
    padding-bottom: 3%;
    font-weight: 700;
`;

const PersonalLinks = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 80px 20px 80px;
    align-items: center;
    	
	 @media (max-width: 650px) {
        flex-direction: column;
    }
`;

const FooterLink = styled.a`
    margin: 0 15px;
    color:#3D9FBF; 
    text-decoration: none;

    :hover{
    	color:#9ccfe0;

    }
`;
const TopButton = styled.button`
    
    transition: all .2s ease-in-out;
    background: 0 0;
    border: none;
    outline: 0;
    position: fixed;
    bottom: 25px;
    right: 10px;
    cursor: pointer;
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
        this.state = {slideCount: 0,
            showNextImage: false,
            scrollTop: 0,
            shouldScroll: false,
            introScreen: null,
        }
    }
    componentWillMount(){
        this.nextSlide();

    }

    nextSlide = () => {
        if (this.state.slideCount === 3) {
          this.setState({ slideCount: 0})
        } else {
          this.setState({ slideCount: this.state.slideCount + 1 })
        }

        setTimeout(this.nextSlide, 2000);
    }

    handleScrollTop = () => {
        if (this.state.scrollTop == 0 ){
            this.setState({ shouldScroll: false});
        } else if (this.state.shouldScroll) {
            const newScrollPosition = window.scrollY- 100;

            this.setState({scrollTop: newScrollPosition >= 0 ? newScrollPosition : 0 });
            window.scrollTo(0, this.state.scrollTop);

            setTimeout(this.handleScrollTop, 1);
        }
    }

    scrollTop = () => {
        this.setState(
            { shouldScroll: true , scrollTop: window.scrollY} , () => this.handleScrollTop()
        )
    }

    isInViewport() {
        if (!this.state.introScreen) return false;
        const top = this.state.introScreen.getBoundingClientRect().top;
        return (top > 0);
    }


    render() {
    const images = [ImgOne, ImgTwo, ImgThree, ImgFour];
    const imagesSmall = [ImgOneSmall, ImgTwoSmall, ImgThreeSmall, ImgFourSmall];

    const tablet = window.innerWidth <= 650;
    const phone = window.innerWidth <= 450;
    const rotator = tablet ? imagesSmall : images;

    return (
    <Body>
        <Wrap>
            <Header>
                {rotator &&
                rotator.map((img, index) => <VisibleImg style = {{display: index === this.state.slideCount ? 'block' : 'none' }} src ={img} alt={img}/> )
                }
                <div ref={(el) => this.state.introScreen? null: this.setState({introScreen:  el})}>
                    <Intro> Hello! </Intro>
                    <Intro>I'm <Span>Jessye Coleman-Shapiro, </Span>a software engineer, artist and outdoor enthusiast.</Intro>
                    <Intro style={{ fontSize: phone ? '16px': '20px', paddingBottom: '20px', display: 'flex'}}>Get in touch
                        <img style={{ width: phone ? '20px':'30px', height: phone ? '20px':'30px', padding: '0 10px'}} src={RightPointerEmoji} alt=""/>
                        <Link href="mailto:cjessye@gmail.com">cjessye@gmail.com</Link>
                    </Intro>
                </div>
            </Header>
            <Background/>
            <Skills/>
            <TechnicalExperience/>
            <Projects/>
        </Wrap>
        <Footer>
            <CopyRight>Designed and Developed by<br/>Jessye Coleman-Shapiro 2018</CopyRight>
            <PersonalLinks>
                <FooterLink href="mailto:cjessye@gmail.com">Email</FooterLink>
                <FooterLink href="https://github.com/jessyec-s">GitHub</FooterLink>
                <FooterLink href="https://www.linkedin.com/in/jessye-coleman-shapiro-476b3113b/">LinkedIn</FooterLink>
            </PersonalLinks>
        </Footer>
        {!this.isInViewport() &&
            <TopButton
                onClick={() => this.scrollTop()}
            >
                <img style={{width: '30px'}} src={PointingUpEmoji} alt=""/>
            </TopButton>
        }
    </Body>
    );
  }
}

export default App;

