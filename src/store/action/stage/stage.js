export const STAGE_COMPONENT = '[Stage] STAGE_COMPONENT';

export const stageComponent = (component) => (
    (dispatch) => {
        dispatch({
            type: STAGE_COMPONENT,
            component
        })
    }
);
