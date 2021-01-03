
import {initStore} from "./store";


const configureStore = () => {
    const actions = {
        SET_SENT: (curState, prediction) => {
            curState.curruntSentiment = prediction
            return {curruntSentiment: curState.curruntSentiment};
        }
    }

    initStore(actions,{
        curruntSentiment: "bla"

    })
}

export default configureStore;