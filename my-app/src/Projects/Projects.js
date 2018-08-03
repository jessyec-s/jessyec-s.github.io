import React, { Component, Fragment } from 'react';
import styled from 'styled-components';


const OneProject = styled.div`

    margin:auto;
    padding: 3% 10%;

`;

const Title = styled.div`
    color:#151718;
    letter-spacing: 0.1em;
    font-weight: 600;
    font-size: 20px;
`;

const Link = styled.a`
	font-weight: 600;
    font-size: 18px;
	color: #3D9FBF;
	text-decoration: none;   
    :hover{
        color:#9ccfe0;
    }
`;
const ProjectTitle = styled.div`
	color:#245F72;
    font-weight: 700;
    font-size: 20px;
`;

const GitHub = styled.div`
    width: 100px;
	font-weight: 700;
	color:#3D9FBF;
	padding-top: 10px;

    :hover{
        color:#9ccfe0;
    }


`;
const Text = styled.div`
    display: inline-block;
`;

const TextWrap = styled.div`
    margin-top:2%;
	margin-bottom:2%;
`;


class Projects extends Component {
  render() {
    return (
    <div style = {{paddingTop:'7%'}}>
        <Title>Projects</Title>
        <div style = {{paddingTop:'2%', paddingBottom: '4%'}}>
            <OneProject>
                <ProjectTitle>Rollover Prevention Program</ProjectTitle>
                <TextWrap>
                    <Text>
                        I am a member of the <Link onClick={() => window.location.href="http://hpvdt.skule.ca/"}>Human Powered Vehicle Design Team </Link>
                        at the University of Toronto.  Along with another member of the Electronics sub team,
                        I created an Arduino (C) program that notifies a driver when their vehicle is in danger of rolling over.
                    </Text>
                    <Text> I have also worked on improving the accuracy of the team's <Link onClick={() => window.location.href="https://en.wikipedia.org/wiki/Rolling_resistance"}>rolling resistance</Link> test by implementing Hall effect sensors into the test apparatus, which produce more precise speed data.</Text>

                    <Text>Check out last year's speed bike, <Link onClick={() => window.location.href="http://hpvdt.skule.ca/"}>Tempest </Link> - I created the trike's paint design on Solidworks.
                    </Text>
                </TextWrap>
            </OneProject>
            <OneProject>
                <ProjectTitle>Circuit Solver</ProjectTitle>
                <TextWrap>
                    <Text>A C++ program that prompts a user to input information about their circuit (i.e resistance values and voltage sources) and then solves for all unkown values.  Features such as modifying or deleting inputted information exist.
                    </Text>
                    <GitHub onClick={() => window.location.href="https://github.com/jessyec-s/Circuit_Solver"}>GitHub</GitHub>
                </TextWrap>
            </OneProject>

            <OneProject>
                <ProjectTitle>Memory FPGAme</ProjectTitle>
                 <TextWrap>
                    <Text>A pattern recognition challenge ran on a FPGA board and written in Verilog.
                    You have two seconds to determine if the card currently displayed on the screen matches the one previously shown. Continue playing untill you make a wrong move.
                    </Text>
                    <GitHub onClick={() => window.location.href="https://github.com/jessyec-s/memory_FPGAme"}>GitHub</GitHub>
                  </TextWrap>
            </OneProject>
        </div>
    </div>


    );
  }
}

export default Projects;
