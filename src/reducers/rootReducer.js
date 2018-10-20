const rootReducer = (state = initialState, action) => {
    console.log('in reducer : ', action)
    switch (action.type) {
        case 'DELETE_EVENT':
            let newDates = state.dates.filter(date => action.index != date.index)
            return {
                ...state,
                dates: newDates
            }
            break

        case 'EDIT_EVENT':
            let editedDates = state.dates.map(date => {
                if (date.index == action.index) {
                    date.name = action.newPayload.name
                }
                return date
            })
            return {
                ...state,
                dates: editedDates
            }
            break

    }
    return state
}

const initialState = {
    dates: [
        { index: '1', tasks: [] },
        { index: '2', tasks: [] },
        { index: '3', tasks: [] },
        { index: '4', tasks: [] },
        { index: '5', tasks: [] },
        { index: '6', tasks: [] },
        { index: '7', tasks: [] },
        { index: '8', tasks: [] },
        { index: '9', tasks: [] },
        { index: '10', tasks: [] },
        { index: '11', tasks: [] },
        { index: '12', tasks: [] },
        { index: '13', tasks: [] },
        { index: '14', tasks: [] },
        { index: '15', tasks: [] },
        { index: '16', tasks: [] },
        { index: '17', tasks: [] },
        { index: '18', tasks: [] },
        { index: '19', tasks: [] },
        { index: '20', tasks: [] },
        { index: '21', tasks: [] },
        { index: '22', tasks: [] },
        { index: '23', tasks: [] },
        { index: '24', tasks: [] },
        { index: '25', tasks: [] },
        { index: '26', tasks: [] },
        { index: '27', tasks: [] },
        { index: '28', tasks: [] },
        { index: '29', tasks: [] },
        { index: '30', tasks: [] }
    ],
    colors: JSON.parse(localStorage.getItem('colors'))
}
export default rootReducer;