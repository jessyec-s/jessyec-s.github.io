import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '../Shared'

const JobWrap = styled.div`
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
    font-size:18px;
}

`;

const Position = styled.div`
    font-size: 18px;
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
            {!this.props.Resume && <Link href={this.props.Link}>{this.props.Company}</Link>}
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