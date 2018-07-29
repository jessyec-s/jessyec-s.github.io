import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem';
import styled from 'styled-components';

const SkillWrap = styled.div`
    display:flex;
    justify-content: space-around;
    padding-top:4%;
    padding-bottom:4%;
    padding-right:2%;
    padding-left: 10%;
`;

const CategoryContent = styled.div`
    display: flex;
    justify-content: space-around;
    padding-left: 10px;
    flex-grow: 1;
`;

const SkillTitle = styled.div`
    color:#151718;
    letter-spacing: 0.1em;
    font-weight: 600;
    font-size: 20px;
`;

const SkillType = styled.div`
    color:#245F72;
    letter-spacing: 0.1em;
    font-weight: 600;
    font-size: 20px;
`;

class Skills extends Component {

  render() {
    const SkillFrontend =[{ item: 'jQuery' }, { item: 'HTML' },{ item: 'CSS' }];
    const SkillHighLevel =[{ item: 'Ruby' }, { item: 'Python' }];
    const SkillLowLevel =[{ item: 'C' }, { item: 'C++' },{ item: 'Verilog' }];
    const OtherLang =[{ item: 'MATLAB' }, { item: 'Git' }];
    const Design =[{ item: 'Photoshop' }, { item: 'Illustrator' },{ item: 'InDesign' }];
    const OtherTools =[{ item: 'Wordpress' }, { item: 'SolidWorks' },{ item: 'Microsoft Office' }];
    return (
    <Fragment>
        <SkillTitle>Skills</SkillTitle>
        <SkillWrap>
            <SkillType>Languages</SkillType>
            <CategoryContent>
                <SkillItem Title= {"Frontend"} SkillItems= {SkillFrontend}/>
                <SkillItem Title= {"High-level"} SkillItems= {SkillHighLevel}/>
                <SkillItem Title= {"Low-level"} SkillItems= {SkillLowLevel}/>
                <SkillItem Title= {"Other"} SkillItems= {OtherLang}/>
            </CategoryContent>
            <SkillType>Tools</SkillType>
            <CategoryContent>
                <SkillItem Title= {"Design"} SkillItems= {Design}/>
                <SkillItem Title= {"Other"} SkillItems= {OtherTools}/>
            </CategoryContent>
         </SkillWrap>
    </Fragment>
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