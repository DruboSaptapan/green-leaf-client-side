import services from './services.json'

const initialState = {
    service: services,
    cart: [],
    orders: [],
}

function serviceReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newState = { ...state, cart: [...state.service, action.payload] };
            return newState
        }
        case 'REMOVE_FROM_CART': {
            const newState = {...state, cart: state.filter((service) => service.id !== action.payload)}
            return newState
        }
        default:
            return state
    }
}

export default serviceReducer;


// import books from '../../fakeData/books.json'
// const initialState = {
//     discover: books,
//     readingList: [],
//     finishedList: []
// }

// function bookReducer(state = initialState, action) {
//     const [services, sets]
//     switch(action.type) {
//         case 'ADD_TO_READING_LIST': {
//             const newState = {...state, readingList: [...state.readingList, action.payload] }
//             return newState
//         }
//         case 'REMOVE_FROM_READING_LIST': {
//             const newState = {...state, readingList: state.readingList.filter((book) => book.id !== action.payload )}
             
//             return newState
//         }
//         default: 
//           return state
//     }
// }

// export default bookReducer;