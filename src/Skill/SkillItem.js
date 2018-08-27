import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: #3D9FBF;
    text-decoration: none;
    padding-right: 5px;
    min-width: 100px;
`;


const ItemWrap = styled.div`
    display:flex;
    flex-direction: row;
    margin:0;
    padding-left: 0;
    align-items: center;
    flex-wrap: wrap;

`;

const Wrap = styled.div`
    padding-top: 10px;
    display:flex;
    align-content: baseline;
`;

const Item = styled.div`
    font-weight: 300;
    font-size: 18px;
	padding: 0 5px;
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