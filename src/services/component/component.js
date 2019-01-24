import React from 'react';
import styled from 'styled-components';

const buildStageComponent = (component, library) => {
    if(!component)
        return null;
    const { element, style, content } = component;
    const Component = styled(element)([],
        ...Object.keys(style).map(prop => `${prop}: ${style[prop]};`)
    );
    const Render = () => (
        <Component>
            {content.map((child, key) => (
                <React.Fragment key={key}>
                    {child.type === 'component'
                        ? buildStageComponent(library[child.content], library)
                        : child.content
                    }
                </React.Fragment>
            ))}
        </Component>
    );
    return <Render />;
};

export {
    buildStageComponent
};
