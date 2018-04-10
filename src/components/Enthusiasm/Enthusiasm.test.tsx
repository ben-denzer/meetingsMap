import * as React from 'react';
import { shallow } from 'enzyme';
import Enthusiasm, { Props } from './Enthusiasm';

describe('Enthusiasm', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      name: 'Nobody',
      enthusiasmLevel: 2,
      onIncrement: jest.fn(),
      onDecrement: jest.fn(),
      onReset: jest.fn()
    };
  });
  it('should render without crashing', () => {
    shallow(<Enthusiasm {...props} />);
  });
  it('should call onDecrement on button click', () => {
    const wrapper = shallow(<Enthusiasm {...props} />);
    wrapper.find('#decrement').simulate('click');
    expect(props.onDecrement).toHaveBeenCalledTimes(1);
  });
  it('should call onIncrement on button click', () => {
    const wrapper = shallow(<Enthusiasm {...props} />);
    wrapper.find('#increment').simulate('click');
    expect(props.onIncrement).toHaveBeenCalledTimes(1);
  });
  it('should call onReset on button click', () => {
    const wrapper = shallow(<Enthusiasm {...props} />);
    wrapper.find('#reset').simulate('click');
    expect(props.onReset).toHaveBeenCalledTimes(1);
  });
  it('should match snapshot with no enthusiasmLevel', () => {
    const testProps = { ...props, enthusiasmLevel: undefined };
    const wrapper = shallow(<Enthusiasm {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with enthusiasmLevel', () => {
    const wrapper = shallow(<Enthusiasm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with invalid enthusiasmLevel', () => {
    const testProps = { ...props, enthusiasmLevel: -1 };
    const wrapper = shallow(<Enthusiasm {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
