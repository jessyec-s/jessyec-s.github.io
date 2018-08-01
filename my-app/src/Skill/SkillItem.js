import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: #3D9FBF;
    text-decoration: none;
`;


const ItemWrap = styled.div`
    display:flex;
    flex-direction: column;
    margin:0;
    padding-top:1rem;
    padding-bottom: 1rem;
    padding-left: 0;

`;

const Item = styled.div`
    font-weight: 300;
    font-size: 16px;
	margin-top: 3px;
	margin-bottom:3px;
`;

class SkillItem extends Component {
  render() {
    return (
    <div style= {{paddingTop: '5px'}}>
        <Title>{this.props.Title}</Title>
        <ItemWrap>
        {this.props.SkillItems && this.props.SkillItems &&
            this.props.SkillItems.map(
            item => <Item>{item.item}</Item>
            )
        }
        </ItemWrap>
    </div>
    );
  }
}

export default SkillItem;

SkillItem.propTypes = {
    Title: PropTypes.string,
    SkillItems: PropTypes.shape({
        item: PropTypes.string,
    }),
}