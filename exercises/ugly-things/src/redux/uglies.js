const ugliesReducer = (prevUglies = [], action) => {
    switch (action.type) {
        case 'ADD_UGLY':
            return [...prevUglies, action.newUgly];
        default:
            return prevUglies;
    }
}

export const addUgly = (newUgly) => {
    return {
        type: 'ADD_UGLY',
        newUgly
    }
}

export default ugliesReducer;