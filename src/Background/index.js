import React, { Component} from 'react';
import { ElementWrap, Title, Link, Text, ContentWrap} from '../Shared'

class Background extends Component {
    render() {
        return (
            <ElementWrap style={{ paddingTop: '20%' }}>
                <Title>Background</Title>
                <ContentWrap>
                    <Text>
                        I am currently working as a software developer at <Link href="https://tophat.com/"> Top Hat</Link> in Toronto.
                    </Text>
                    <Text>
                        Having gone to the University of Toronto for Computer Engineering, I have strong
                        analytical and design skills.  I enjoy tackling challenges of any form
                        and am always looking for opportunities to gain new experiences.
                        In my free time I enjoy making pottery, going camping and traveling.
                    </Text>
                </ContentWrap>
            </ElementWrap>
        );
    }
}

export default Background;