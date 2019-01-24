import { STAGE_COMPONENT } from '../../action/stage/stage';

const stageReducer = (state = {}, action) => {
    switch(action.type) {
        case STAGE_COMPONENT:
            return {
                staged: action.component
            };
        
        default:
            return state;
    }
}

export default stageReducer;
