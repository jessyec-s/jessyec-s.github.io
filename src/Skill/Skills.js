import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem';
import styled from 'styled-components';
import { Title, ContentWrap, ElementWrap } from '../Shared'

const SkillWrap = styled.div`
    display:flex;
    flex-direction: column;
    padding: 5% 0;
    
`;

const CategoryContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

class Skills extends Component {

  render() {
    const SkillFrontend =[{ item: 'Typescript' },{ item: 'JavasScript' }, { item: 'HTML' },{ item: 'CSS' }];
        const SkillBackend =[{ item: 'Python' },{ item: 'Java' },{ item: 'Elixir' }, {item: 'C'}, { item: 'C++' },{ item: 'SQL' },{ item: 'Go' }];
        const Other =[{ item: 'Datadog' },{ item: 'AWS' },{ item: 'Inngest' }, { item: 'Docker' },{ item: 'Jira' }, { item: 'Linux' }]
        const Frameworks=[{ item: 'NextJS' },{ item: 'React' },{ item: 'Django' }, { item: 'Spring' },{ item: 'Node' }, { item: 'FastAPI' }];
        const Tools =[{ item: 'Postman' }, { item: 'Git' }];

    const tablet = window.innerWidth <= 1050 && window.innerWidth >= 600;

    return (
    <SkillWrap>
        <ElementWrap>
            <Title>Skills</Title>
            <ContentWrap>
                 <CategoryContent>
                    <SkillItem Title= {"Frontend"} SkillItems= {SkillFrontend}/>
                    <SkillItem Title= {"Backend"} SkillItems= {SkillBackend}/>
                    <SkillItem Title= {"Frameworks"} SkillItems= {Frameworks}/>
                    <SkillItem Title= {"Tools"} SkillItems= {Tools}/>
                    <SkillItem Title= {"Other"} SkillItems= {Other}/>
                </CategoryContent>
            </ContentWrap>
        </ElementWrap>
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
//
// <SkillWrap>
//     <SectionWrap>
//         <Title>Languages</Title>
//         <CategoryContent>
//             <ItemPair>
//                 <SkillItem Title= {"Frontend"} SkillItems= {SkillFrontend}/>
//                 <SkillItem Title= {"High-level"} SkillItems= {SkillHighLevel}/>
//             </ItemPair>
//             <ItemPair>
//                 <SkillItem Title= {"Low-level"} SkillItems= {SkillLowLevel}/>
//                 <SkillItem Title= {"Other"} SkillItems= {OtherLang}/>
//             </ItemPair>
//         </CategoryContent>
//     </SectionWrap>
//     <SectionWrap style={{ paddingTop: tablet ? '10px' : '0px' }}>
//         <Title>Tools</Title>
//         <CategoryContent style={{ paddingLeft: tablet ? '95px' : '40px' }}>
//             <SkillItem Title= {"Design"} SkillItems= {Design}/>
//             <SkillItem Title= {"Frameworks"} SkillItems= {Frameworks}/>
//             <SkillItem Title= {"Other"} SkillItems= {OtherTools}/>
//         </CategoryContent>
//     </SectionWrap>
// </SkillWrap>