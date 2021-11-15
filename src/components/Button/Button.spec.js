import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Button from './Button'

describe('Button component', () => {
  it('simulates click events', () => {
    const mockCallBack = sinon.spy()
    const wrapper = shallow((<Button onClick={mockCallBack}>Ok!</Button>))

    wrapper.find('button').simulate('click')
    expect(mockCallBack).toHaveProperty('callCount', 1)
  })

  it('renders a html button', () => {
    const wrapper = shallow(<Button>Ok!</Button>)

    expect(wrapper.type()).toEqual('button')
  })

  it('renders children right', () => {
    const wrapper = shallow(<Button>Ok!</Button>)

    expect(wrapper.children().length).toBe(1)
  })

  it('renders with button type by default', () => {
    const wrapper = shallow(<Button>Ok!</Button>)

    expect(wrapper.prop('type')).toEqual('button')
  })

  it('renders with submit type when is specified', () => {
    const wrapper = shallow(<Button type="submit">Ok!</Button>)

    expect(wrapper.prop('type')).toEqual('submit')
  })
})
