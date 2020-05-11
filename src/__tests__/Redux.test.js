import * as actions from '../store/ActionCreators'
import * as types from '../store/ActionTypes'
import reducer from '../store/Reducers'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


const initialState = {
  quizData: null,
  rightAnswers: 0,
  currentQuestion: 0,
  categorySelected: false
};
//Action tests
describe('actions', () => {
  it('should create an action setQuizQuestions', () => {
    const quizData = 'Quiz data docs'
    const expectedAction = {
      type: types.SET_QUIZ_QUESTIONS,
      quizData
    }
    expect(actions.setQuizQuestions(quizData)).toEqual(expectedAction)
  });

  it('should create an action incrementRightAnswers ', () => {
    const expectedAction = {
      type: types.INCREMENT_RIGHT_ANSWERS,
      
    }
    expect(actions.incrementRightAnswers()).toEqual(expectedAction)
  })

  it('should create an action updateCurrentQuestion ', () => {
    const expectedAction = {
      type: types.UPDATE_CURRENT_QUESTION,            
    }
    expect(actions.updateCurrentQuestion()).toEqual(expectedAction)
  });

  it('should create an action markCategorySelected ', () => {
    const expectedAction = {
      type: types.MARK_CATEGORY_SELECTED,  
    }
    expect(actions.markCategorySelected()).toEqual(expectedAction)
  })

})


 
//Reducer test
describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        quizData: null,
  rightAnswers: 0,
  currentQuestion: 0,
  categorySelected: false
      }
    )
  });
   it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        quizData: null,
  rightAnswers: 0,
  currentQuestion: 0,
  categorySelected: false
      }
    )
  });
     it('should handle SET_QUIZ_QUESTIONS', () => {
    expect(
      reducer([], {
        type: types.SET_QUIZ_QUESTIONS,
        quizData: 'Run the tests'
      })
    ).toEqual(
      {
        quizData: 'Run the tests',
       
      }
    )
  
});
      it('should handle updateCurrentQuestion', () => {
      	let state = {currentQuestion: 0 };
    expect(
      reducer(state, {
        type: types.UPDATE_CURRENT_QUESTION,
        currentQuestion:0
      })
    ).toEqual(
      {
        currentQuestion:1,
       
      }
    )
});
           it('should handle incrementRightAnswers', () => {
      	let state = {rightAnswers: 0 };
    expect(
      reducer(state, {
        type: types.INCREMENT_RIGHT_ANSWERS,
        
      })
    ).toEqual(
      {
        rightAnswers:1,
       
      }
    )
});
            it('should handle markCategorySelected', () => {
      	let state = {categorySelected: false };
    expect(
      reducer(state, {
        type: types.MARK_CATEGORY_SELECTED,
        
      })
    ).toEqual(
      {
        categorySelected:true,
       
      }
    )
});

 })
