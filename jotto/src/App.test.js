import App from "./App";
import {mount} from "enzyme";
import {findByTestAttr, storeFactory} from "../test/testUtils";
import {Provider} from "react-redux";

//activate global mock
jest.mock('./actions');
import {getSecretWord as mockGetSecretWord} from "./actions";

const setup = () => {
    const store = storeFactory();
    return mount(<Provider store={store}><App /></Provider>)
};

test('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent).toHaveLength(1);
});

describe('get secret word', () => {
    beforeEach(() => {
       mockGetSecretWord.mockClear();
    });
    test('getSecretWord on app mount', () => {
        const wrapper = setup();
        expect(mockGetSecretWord).toBeCalledTimes(1);
    });
    test('getSecretWord does not run on app update', () => {
        const wrapper = setup();
        mockGetSecretWord.mockClear();
        wrapper.setProps();
        expect(mockGetSecretWord).toBeCalledTimes(0);
    });
});
