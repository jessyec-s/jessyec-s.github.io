import React, { Component} from 'react';
import { ElementWrap, Title, Link, Text, ContentWrap} from '../Shared'

class Background extends Component {
    render() {
        return (
            <ElementWrap style={{ paddingTop: '20%' }}>
                <Title>Background</Title>
                <ContentWrap>
                    <Text>
                        I am a software engineer that most recently worked at <Link href="https://factoredquality.com/"> Factored Quality</Link> in New York.
                    </Text>
                    <Text>
                        I have strong analytical and design skills, enjoy tackling challenges of any form
                        and am always looking for opportunities to gain new experiences.
                        In my free time I enjoy making pottery, going camping and traveling.
                    </Text>
                </ContentWrap>
            </ElementWrap>
        );
    }
}

export default Background;