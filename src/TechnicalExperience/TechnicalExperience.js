import React, { Component } from 'react';
import styled from 'styled-components';
import TechnicalItem from './TechnicalItem';
import Resume from '../attachments/resume.pdf'

const Title = styled.div`
    color:#151718;
    letter-spacing: 0.1em;
    font-weight: 600;
    font-size: 20px;
`;

class TechnicalExperience extends Component {
  render() {
    return (
    <div>
        <Title>Technical Experience</Title>
        <div style = {{ paddingTop: '5%'}}>
            <TechnicalItem Date= {"Summer 2018"} Position= {"Software Intern"} Link = {"https://www.helpful.com/"} Company = {"Helpful"}/>
            <TechnicalItem Date= {"Summer 2017"} Position= {"Software Intern"} Link = {"https://squareup.com/ca"} Company = {"Square"}/>
            <TechnicalItem Date= {"June 2017 - 2018"} Position= {"Web Development Executive"} Link = {"http://stores.skule.ca"} Company = {"Engineering Stores"}/>
            <TechnicalItem Date= {"Summer 2015"} Position= {"Research Opportunity Program in Engineering"} Link = {"https://www.ryerson.ca/"} Company = {"Ryerson University"}/>
            <TechnicalItem Resume= {true} Link = {Resume} Company = {"View My Resume"}/>
        </div>
    </div>


    );
  }
}

export default TechnicalExperience;
