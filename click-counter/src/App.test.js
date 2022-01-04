import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, {shallow} from 'enzyme';
import App from './App';

// set up enzyme`s react adapter
Enzyme.configure({adapter: new EnzymeAdapter()});

//Factory function to crate a ShallowWrapper for the App component
const setup = () => shallow(<App />);

//Factory function to find by data-test attribute
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe('App component testing', () => {
  const wrapper = setup();
  test('renders without error', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
  });

  test('renders increment button', () => {
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });

  test('renders counter display', () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
  });

  test('counter display starts at 0', () => {
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe("0");
  });

  test('clicking button increments counter display', () => {
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
  });

  test('renders decrement button', () => {
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });

  test('error massage started with empty string', () => {
    const error = findByTestAttr(wrapper, 'error-message').text();
    expect(error.length).toBe(0);
  });

  test('clicking button decrements with 0 trow an error', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
    const error = findByTestAttr(wrapper, 'error-message').text();
    expect(error).toBe('Counter can not go bellow zero');
  });

  test('clicking button decrements counter display', () => {
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });

})

