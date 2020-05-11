import React from 'react';
import App from '../App';
import Score from '../components/Score';
import { shallow, mount,render } from "enzyme";
import Card from '../components/Question';


function setup() {
  const props = {
    categorySelected:false,
    quizzes: [
  { id: 17, title: 'Science and Nature' },
  { id: 26, title: 'Celebrities' },
  { id: 21, title: 'Sports' },
  { id: 27, title: 'Animals' },
  { id: 20, title: 'Mythology' },
  { id: 9, title: 'General Knowledge' }
],
currentQuestion:10,
quizData:['dss']

      }

  const enzymeWrapper = mount(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}


 describe("App",() => {
 	test('shallow renders',() => {
 		const wrapper = shallow(<App />);
 		expect(wrapper).toMatchSnapshot();
 	});

 	it('renders props',() => {
 		const {enzymeWrapper} = setup();
 		expect(enzymeWrapper.find('h1').first().text()).toEqual('Pick a Category');
 		expect(enzymeWrapper.find(Score)).toHaveLength(1);

 	})
 })

