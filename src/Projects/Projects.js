import React, { Component } from 'react';
import styled from 'styled-components';
import { ElementWrap, Text, Title, Link, ContentWrap } from '../Shared';
import MapTutorial from '../Images/map_tutorial.gif';


const OneProject = styled.div`
    margin:auto;
`;

const ProjectTitle = styled.div`
    font-weight: 700;
    font-size: 20px;
`;

const GitHub = styled.div`
    width: 100px;
	font-weight: 700;
	color:#3D9FBF;
	padding-top: 10px;
	font-size: 18px;

    :hover{
        color:#9ccfe0;
    }

`;

const TextWrap = styled.div`
    margin-top:2%;
	margin-bottom:2%;
`;


class Projects extends Component {
  render() {
    return (
    <ElementWrap>
        <Title>Projects</Title>
        <ContentWrap style = {{ paddingBottom: '4%'}}>
            <OneProject style = {{ paddingTop: '0px'}}>
                <ProjectTitle>Rollover Prevention Program</ProjectTitle>
                <TextWrap>
                    <Text>
                        I am a member of the <Link onClick={() => window.location.href="http://hpvdt.skule.ca/"}>Human Powered Vehicle Design Team </Link>
                        at the University of Toronto.  Along with another member of the Electronics sub team,
                        I created an Arduino (C) program that notifies a driver when their vehicle is in danger of rolling over.
                        Rollover status and warnings are displayed to a driver through an android app, configured like a dashboard.
                    </Text>
                    <Text>
                        I have also worked on improving the accuracy of the team's
                        <Link onClick={() => window.location.href="https://en.wikipedia.org/wiki/Rolling_resistance"}> rolling resistance </Link>
                        test by implementing Hall effect sensors into the test apparatus, which produce more precise speed data.
                    </Text>

                    <Text>
                        Check out last year's speed bike, <Link onClick={() => window.location.href="http://hpvdt.skule.ca/"}>Tempest </Link> - I created the trike's paint design on Solidworks.
                    </Text>
                    <GitHub onClick={() => window.location.href="https://github.com/jessyec-s/hpvdt_andriod_app"}>GitHub</GitHub>

                </TextWrap>
            </OneProject>
            <OneProject>
                <ProjectTitle>GIS Map</ProjectTitle>
                <TextWrap>
                    <Text>
                        With two other students I created a GIS map application for my term project.  I imported and stored OSM data inorder to visualize cities and gather key information such as the location of one way streets and
                        major street designations.
                    </Text>
                    <Text>
                        EasyGL software was used to create an intuitive user interface. Key features rendered included a
                        search panel for identifying intersections of interest, route highlighting and detailed directions between locations.
                    </Text>
                    <Text>
                    <img style={{ width: "100%", borderRadius: '1%' }} src={MapTutorial} alt="gif"/>
                    </Text>
                </TextWrap>
            </OneProject>
        </ContentWrap>
    </ElementWrap>


    );
  }
}

export default Projects;
