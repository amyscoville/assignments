export const tick = () => {
    return {
        type: 'TICK'
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

const mainReducer = (state = 0, action) => {
    switch(action.type) {
        case 'TICK':
            return state + 10;
        case 'RESET':
            return 0;
        default: 
            return state;
    }
}

export default mainReducer;