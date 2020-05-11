import React from 'react';
import Question from '../components/Question'
import Score from '../components/Score';
import Timer from '../components/Timer';
import { shallow, mount,render } from "enzyme";


function setup() {
  const props = {
    checkAnswerFn: jest.fn(),
    difficulty:'medium',
    question:'wag',
    duration:'10',
    wrongAnswers:['ds','dsd'],
    correctAnswer:['dds']
  }

  const enzymeWrapper = shallow(<Question {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

  describe('Question', () => {
    it('snapshot renders', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper).toMatchSnapshot()
    })
    it('should render self and subcomponents',() => {
       const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('article').hasClass('card')).toBe(true)
     expect(enzymeWrapper.find('span').text()).toBe('medium | ')
     expect(enzymeWrapper.find('p').text()).toBe('wag')
    })
  })
  


  describe('Score', () => {
  test("snapshot renders",() => {
     const wrapper = shallow(<Score />);
    expect(wrapper).toMatchSnapshot();
  })
})


   describe('Timer',() => {
  test("snapshot renders",() => {
    const wrapper = shallow(<Timer />);
    expect(wrapper).toMatchSnapshot();
  });
  it("shows right left time",() => {
  const wrapper = shallow(<Timer duration={6}/>);
  expect(wrapper.find('span').text()).toEqual('Time Left: 6')
  })
 })
 
