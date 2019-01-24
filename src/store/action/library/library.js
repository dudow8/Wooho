export const ADD_COMPONENT = '[Library] ADD_COMPONENT';

export const addComponent = (name, element, style, content) => (
    (dispatch) => {
        dispatch({
            type: ADD_COMPONENT,
            data: {name, element, style, content}
        });
    }
);
