import React from 'react'
import TestRenderer from 'react-test-renderer'

describe('Header', () => {
    let Header

    beforeAll(() => {
        jest.doMock('react-router-dom')
        Header = jest.requireActual('../').default
    })

    afterAll(() => {
        jest.dontMock('react-router-dom')
    })

    it('header should render properly for `/` link, then the icon link should display as required', () => {
        const renderer = TestRenderer.create(<Header title={'Menu'} />)
        expect(renderer.toJSON()).toMatchSnapshot()
    })

    it('header should render properly for `/register-card` link, then the icon link should display as required', () => {
        const renderer = TestRenderer.create(<Header title={'register-card'} />)
        expect(renderer.toJSON()).toMatchSnapshot()
    })
})