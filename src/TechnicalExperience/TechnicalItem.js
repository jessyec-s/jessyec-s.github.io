import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const JobWrap = styled.div`
    padding-left:10%;
    padding-right:10%;
    padding-bottom: 2%;
`;

const JobDetails = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-direction:column;
    }
`;

const Date = styled.div`
    @media (max-width: 600px) {
        font-size:14px;
    }
    font-size:16px;
}

`;

const Position = styled.div`

`;

const Company = styled.div`
    color:#245F72;
    font-weight: 700;
    font-size: 20px;
    text-decoration: none;

    :hover{
    	color:#9ccfe0;

    }
`;

const Resume = styled.div`
    padding-top: 2%;
    color:#3D9FBF;
    letter-spacing: 0.1em;
    font-weight: 800;
    font-size: 22px;
    text-decoration: none;

    :hover{
    	color:#9ccfe0;
        font-weight: 900;
    }
`;

class TechnicalItem extends Component {
  render() {
    return (
    <JobWrap>
        <JobDetails>
            {!this.props.Resume &&
            <Company onClick = { () =>
                window.location.href=this.props.Link
            }
            >{this.props.Company}
            </Company>
            }
            {!this.props.Resume && <Date>{this.props.Date}</Date>}
            {this.props.Resume &&
            <Resume onClick = { () =>
                window.location.href=this.props.Link
                }
            >{this.props.Company}
            </Resume>
            }
        </JobDetails>

        <Position>{this.props.Position}</Position>
    </JobWrap>
    );
  }
}

export default TechnicalItem;

TechnicalItem.defaultProps = {Resume: false};

TechnicalItem.propTypes = {
    Date: PropTypes.string.isRequired,
    Company: PropTypes.string.isRequired,
    Link: PropTypes.string.isRequired,
    Position: PropTypes.string.isRequired,
    Resume: PropTypes.bool.isRequired,

}