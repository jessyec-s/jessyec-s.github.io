import React, { Component} from 'react';
import { ElementWrap, Title, Link, Text, ContentWrap} from '../Shared'

class Background extends Component {
    render() {
        return (
            <ElementWrap style={{ paddingTop: '20%' }}>
                <Title>Background</Title>
                <ContentWrap>
                    <Text>I am currently entering my fourth year of Computer Engineering at the University of Toronto.
                    I spent my last 16 months working on the OpenJDK team at
                    <Link href="https://www.redhat.com/en"> Red Hat</Link> in Toronto.
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