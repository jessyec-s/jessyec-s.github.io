import React, { Component} from 'react';
import { ElementWrap, Title, Link, Text, ContentWrap} from '../Shared'

class Background extends Component {
    render() {
        return (
            <ElementWrap style={{ paddingTop: '20%' }}>
                <Title>Background</Title>
                <ContentWrap>
                    <Text>I am currently entering my third year of Computer Engineering at the University of Toronto.
                    Over the last two summers I completed two amazing internships at
                    <Link href="https://squareup.com/ca"> Square</Link> and<Link href="https://www.helpful.com"> Helpful </Link>
                    where I developed a wide range of technical and collaborative skills.
                    </Text>
                    <Text>
                    Having majored in Visual Arts at the Etobicoke School of the Arts high school,
                    I carry a unique mix of analytical and design skills. I enjoy tackling challenges of any form
                    and am always looking for opportunities to gain new experiences.
                    </Text>
                </ContentWrap>
            </ElementWrap>
        );
    }
}

export default Background;