import React from 'react';
import styled from 'styled-components';
import { ComponentService } from '../../services';

const Stage = ({component, library}) => {
    return (
        <Wrapper>
            {component
                ? ComponentService.buildStageComponent(component, library)
                : '<Selecione um componente />'
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
    align-items: center;
    background: #ffffff;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`;

export default Stage;
