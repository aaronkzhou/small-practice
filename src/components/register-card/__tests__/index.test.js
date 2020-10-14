import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react';

describe('RegisterCard', () => {
    let RegisterCard = jest.requireActual('../').default
    const setTitle = jest.fn()
    const mockedLog = () => { }
    beforeEach(() => (console.log = mockedLog))

    it('should display register card errors while input invalid information', async () => {
        const { container } = render(<RegisterCard setTitle={setTitle} />)
        const creditCard = container.querySelector('input[name="credit_card"]')
        const cvc = container.querySelector('input[name="cvc"]')
        const expiryDate = container.querySelector('input[name="expiry_date"]')
        const submit = container.querySelector('button[type="submit"]')

        await wait(() => {
            fireEvent.change(creditCard, {
                target: {
                    value: 'invalidCard'
                }
            })
        })

        await wait(() => {
            fireEvent.change(cvc, {
                target: {
                    value: 'invalidcvc'
                }
            })
        })

        await wait(() => {
            fireEvent.change(expiryDate, {
                target: {
                    value: 'expiryDate'
                }
            })
        })

        await wait(() => {
            fireEvent.click(submit)
        })

        const ccError = container.querySelector('#cc-error').innerHTML
        const cvcError = container.querySelector('#cvc-error').innerHTML
        const expiryError = container.querySelector('#expiry-error').innerHTML
        expect(ccError).toBe('Invalid Credit card')
        expect(cvcError).toBe('Invalid CVC')
        expect(expiryError).toBe('Invalid Expiry date')
    })

    it('should show credit card error if input a invalid card number', async () => {
        console.log = jest.fn();
        const { container } = render(<RegisterCard setTitle={setTitle} />)
        const creditCard = container.querySelector('input[name="credit_card"]')
        const cvc = container.querySelector('input[name="cvc"]')
        const expiryDate = container.querySelector('input[name="expiry_date"]')
        const submit = container.querySelector('button[type="submit"]')

        await wait(() => {
            fireEvent.change(creditCard, {
                target: {
                    value: '4111111111111111'
                }
            })
        })

        await wait(() => {
            fireEvent.change(cvc, {
                target: {
                    value: '123'
                }
            })
        })

        await wait(() => {
            fireEvent.change(expiryDate, {
                target: {
                    value: '0222'
                }
            })
        })

        await wait(() => {
            fireEvent.click(submit)
        })

        expect(console.log).toHaveBeenCalledWith("values:", { "credit_card": "4111111111111111", "cvc": "123", "expiry_date": "0222" });
    })
})