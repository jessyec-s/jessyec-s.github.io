import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem';
import styled from 'styled-components';

const SkillWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top:4%;
    padding-bottom:4%;
    padding-right:10%;
    padding-left: 10%;
`;

const CategoryContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (max-width: 600px) {
        justify-content: space-between;
    }
    padding-left: 10px;
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

`;

const PhoneWrap = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
`;
const SkillType = styled.div`
    color:#245F72;
    letter-spacing: 0.1em;
    font-weight: 600;
    font-size: 20px;
    padding:5px 0 ;
`;

class Skills extends Component {

  render() {
    const SkillFrontend =[{ item: 'jQuery' }, { item: 'HTML' },{ item: 'CSS' }];
    const SkillHighLevel =[{ item: 'JavasScript' },{ item: 'Ruby' }, { item: 'Python' }];
    const SkillLowLevel =[{ item: ' C & C++' },{ item: 'SQL' },{ item: 'Verilog' }];
    const OtherLang =[{ item: 'Swift' },{ item: 'MATLAB' }, { item: 'Git' }];
    const Design =[{ item: 'Photoshop' }, { item: 'Illustrator' },{ item: 'InDesign' }];
    const Frameworks=[{ item: 'React' }, { item: 'Spring' },{ item: 'Node' }, { item: 'Wordpress' }];
    const OtherTools =[{ item: 'Postman' }, { item: 'Postico' }];

    const tablet = window.innerWidth < 600;

    return (
    <Fragment>
        <SkillTitle>Skills</SkillTitle>
        <SkillWrap>
            <SectionWrap>
                <SkillType>Languages</SkillType>
                 {!tablet &&
                 <CategoryContent>
                   <SkillItem Title= {"Frontend"} SkillItems= {SkillFrontend}/>
                    <SkillItem Title= {"High-level"} SkillItems= {SkillHighLevel}/>
                    <SkillItem Title= {"Low-level"} SkillItems= {SkillLowLevel}/>
                    <SkillItem Title= {"Other"} SkillItems= {OtherLang}/>
                </CategoryContent>
                }
                {tablet &&
                <CategoryContent>
                    <PhoneWrap>
                        <SkillItem Title= {"Frontend"} SkillItems= {SkillFrontend}/>
                        <SkillItem Title= {"High-level"} SkillItems= {SkillHighLevel}/>
                     </PhoneWrap>
                    <PhoneWrap>
                        <SkillItem Title= {"Low-level"} SkillItems= {SkillLowLevel}/>
                        <SkillItem Title= {"Other"} SkillItems= {OtherLang}/>
                    </PhoneWrap>
                </CategoryContent>
                }
            </SectionWrap>
            <SectionWrap>
                <SkillType>Tools</SkillType>
                {!tablet &&
                <CategoryContent>
                    <SkillItem Title= {"Design"} SkillItems= {Design}/>
                    <SkillItem Title= {"Frameworks"} SkillItems= {Frameworks}/>
                    <SkillItem Title= {"Other"} SkillItems= {OtherTools}/>
                </CategoryContent>
                }
                {tablet &&
                <CategoryContent>
                    <PhoneWrap>
                        <SkillItem Title= {"Design"} SkillItems= {Design}/>
                        <SkillItem Title= {"Frameworks"} SkillItems= {Frameworks}/>
                    </PhoneWrap>
                    <PhoneWrap>
                        <SkillItem Title= {"Other"} SkillItems= {OtherTools}/>
                    </PhoneWrap>
                </CategoryContent>
                }
            </SectionWrap>
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