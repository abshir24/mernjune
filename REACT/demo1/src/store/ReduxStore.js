import { legacy_createStore as createStore } from 'redux'

const initialState = { names: ["Tom","Tim","Sally"], counter:2, numbers: [1,2,3] }

const counterReducer = (state = initialState, action) => {
    console.log("Action",action)

  switch(action.type){
    case 'PLUS':{
      return state + ( action.payload || 0 ) // 1 + 3
    }
    case 'MINUS':{
      return state - ( action.payload || 0 )
    }
    case 'ADDNUMBER':{
        return {...state, numbers: [...state.numbers, action.payload] } 
    }
    case 'ADDNAME':{
        return {...state, names: [...state.names, action.payload] } 
    }
    default: {
      return state
    }
  }
}

const store = createStore(counterReducer)

export default store;
