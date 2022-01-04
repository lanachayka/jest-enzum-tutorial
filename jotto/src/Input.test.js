import Input from "./Input";
import {shallow} from "enzyme";
import { findByTestAttr} from "../test/testUtils";

const defaultProps = {};

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Input {...setupProps}/>);
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'input-component');
    expect(component.length).toBe(1);
});