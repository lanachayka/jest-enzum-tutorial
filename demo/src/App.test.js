import { render, screen } from '@testing-library/react';
import App from './App';
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, {shallow} from 'enzyme';

Enzyme.configure({adapter: new EnzymeAdapter});


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders non-empty component without crashing with enzyme', () => {
   const wrapper = shallow(<App />);
   // console.log(wrapper.debug()); show HTML
   expect(wrapper.exists()).toBeTruthy();
});


