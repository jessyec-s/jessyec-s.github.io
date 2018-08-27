import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem';
import styled from 'styled-components';

const SkillWrap = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5% 0;
    flex-wrap: wrap;
    
`;

const CategoryContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding-left: 40px;
    @media (max-width: 600px) {
        justify-content: space-between;
    }
    flex-grow: 1;
`;

const SkillTitle = styled.div`
    color:#151718;
    letter-spacing: 0.1em;
    font-weight: 600;
    font-size: 20px;
    padding-top: 7%;
`;

const SectionWrap = styled.div`
    display: flex;
    @media (max-width: 600px) {
        padding-bottom: 20px;
        flex-direction: column;
    }
`;

const PhoneWrap = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
`;
const SkillType = styled.div`
    color:#151718;
    letter-spacing: 0.1em;
    font-weight: 600;
    font-size: 20px;
    padding:5px 0 ;
`;

class Skills extends Component {

  render() {
    const SkillFrontend =[{ item: 'jQuery' }, { item: 'HTML' },{ item: 'CSS' }];
    const SkillHighLevel =[{ item: 'JavasScript' },{ item: 'Ruby' }, { item: 'Python' }];
    const SkillLowLevel =[{item: 'C'}, { item: 'C++' },{ item: 'SQL' },{ item: 'Go' },{ item: 'Assembly' },{ item: 'Verilog' }];
    const OtherLang =[{ item: 'Swift' },{ item: 'MATLAB' }, { item: 'Git' }];
    const Design =[{ item: 'Photoshop' }, { item: 'Illustrator' },{ item: 'InDesign' }];
    const Frameworks=[{ item: 'React' }, { item: 'Spring' },{ item: 'Node' }, { item: 'Wordpress' }];
    const OtherTools =[{ item: 'Postman' }, { item: 'Postico' }];

    const tablet = window.innerWidth <= 1050 && window.innerWidth >= 600;

    return (
    <SkillWrap>
        <SectionWrap>
            <SkillType>Languages</SkillType>
             <CategoryContent>
               <SkillItem Title= {"Frontend"} SkillItems= {SkillFrontend}/>
                <SkillItem Title= {"High-level"} SkillItems= {SkillHighLevel}/>
                <SkillItem Title= {"Low-level"} SkillItems= {SkillLowLevel}/>
                <SkillItem Title= {"Other"} SkillItems= {OtherLang}/>
            </CategoryContent>
        </SectionWrap>
        <SectionWrap style={{ paddingTop: tablet ? '10px' : '0px' }}>
            <SkillType>Tools</SkillType>
            <CategoryContent style={{ paddingLeft: tablet ? '95px' : '40px' }}>
                <SkillItem Title= {"Design"} SkillItems= {Design}/>
                <SkillItem Title= {"Frameworks"} SkillItems= {Frameworks}/>
                <SkillItem Title= {"Other"} SkillItems= {OtherTools}/>
            </CategoryContent>
        </SectionWrap>
    </SkillWrap>
    );
  }
}

export default Skills;

Skills.propTypes = {
    Title: PropTypes.string,
    SkillItems: PropTypes.shape({
        item: PropTypes.string,
    }),
}