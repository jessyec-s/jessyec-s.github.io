import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
    font-size: 18px;   
    font-weight: 700;
    text-decoration: none;
    padding-right: 5px;
    max-width: 100px;
`;


const ItemWrap = styled.div`
    display:flex;
    flex-direction: column;
    margin:0;
    align-items: left;
    flex-wrap: wrap;

`;

const Wrap = styled.div`
    display:flex;
    flex-direction: column;
    align-content: baseline;
    
    @media (max-width: 630px){
        width: 47%;
        margin-right: 5px;
        margin-bottom: 25px;
`;

const Item = styled.div`
    font-weight: 300;
    font-size: 18px;
`;

class SkillItem extends Component {
  render() {
    return (
    <Wrap>
        <Title>{this.props.Title}</Title>
        <ItemWrap>
        {this.props.SkillItems &&
            this.props.SkillItems.map(
            item => <Item>{item.item}</Item>
            )
        }
        </ItemWrap>
    </Wrap>
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