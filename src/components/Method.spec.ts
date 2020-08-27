import { mount } from '@vue/test-utils';

import Method from './Method.vue';

describe('Method.vue', () => {
  it('render', () => {
    const wrapper = mount(Method);

    expect(wrapper.html()).toMatchSnapshot();
  });
  it('button', () => {
    const wrapper = mount(Method);

    const normalButton = wrapper.find('button#normalButton');
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation();
    normalButton.trigger('click');

    expect(mockAlert).toBeCalledWith('clicked');

    const complexButton = wrapper.find('button#complexButton');
    const mockLog = jest.spyOn(console, 'log').mockImplementation();
    complexButton.trigger('click');
    expect(mockLog).toBeCalled();
  });
});
