import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { LibraryActions, StageActions } from '../../store/action';
import Stage from '../stage/stage';

const Studio = ({library, staged, addComponent, stageComponent}) => (
    <Wrapper>
        <Preview>
            <Stage
                component={staged}
                library={library}
            />
        </Preview>

        <Library>
            <LibraryToolBar>
                <button onClick={() => {
                    addComponent('Title', 'p', { color: 'green' }, [
                        {type: "text", content: 'Teste já implementado'}
                    ]);
                    addComponent('Container', 'div', { border: "1px solid black", padding: '10px' }, [
                        {type: "component", content: 'Title'}
                    ]);
                }}>
                    Adicionar
                </button>
            </LibraryToolBar>
            
            {Object.keys(library).map((component, key) => (
                <LibraryItem
                    key={key}
                    onClick={() => {
                        stageComponent(library[component])
                    }}>
                    {`<${component} />`}
                </LibraryItem>
            ))}
        </Library>
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    position: absolute;
    width: 100%;
`;
const Preview = styled.div`
    align-content: center;
    background: #666;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
    padding: 50px;
`;
const Library = styled.div`
    background: #f4f4f4;
    border-right: 1px solid gray;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
`;
const LibraryToolBar = styled.div`
    border-bottom: 1px solid #dddddd;
`;
const LibraryItem = styled.div`
    align-content: center;
    border-bottom: 1px solid gray;
    display: flex;
    height: 20px;
    justify-content: center;
    width: 100%;
`;

export default connect(
    state => ({
        library: state.libraryState,
        staged: state.stageState.staged
    }), {
        addComponent: LibraryActions.addComponent,
        stageComponent: StageActions.stageComponent
    }
)(Studio);
