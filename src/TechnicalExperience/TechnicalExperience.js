import React, { Component } from 'react';
import TechnicalItem from './TechnicalItem';
import Resume from '../attachments/resume.pdf'
import { Title, ElementWrap, ContentWrap } from '../Shared';

class TechnicalExperience extends Component {
  render() {
    return (
    <ElementWrap>
        <Title>Experience</Title>
        <ContentWrap>
            <TechnicalItem Date= {"May 2021 - Present"} Position= {"Software Engineer"} Link = {"https://tophat.com/"} Company = {"Top Hat"}/>
            <TechnicalItem Date= {"May 2019 - Aug. 2020"} Position= {"Software Engineer"} Link = {"https://www.redhat.com/en"} Company = {"Red Hat"}/>
            <TechnicalItem Date= {"Summer 2018"} Position= {"Agile Engineer Intern"} Link = {"https://www.helpful.com/"} Company = {"Helpful"}/>
            <TechnicalItem Date= {"Summer 2017"} Position= {"Software Engineer Intern"} Link = {"https://squareup.com/ca"} Company = {"Square"}/>
            <TechnicalItem Resume= {true} Link = {Resume} Company = {"View My Resume"}/>
        </ContentWrap>
    </ElementWrap>


    );
  }
}

export default TechnicalExperience;
