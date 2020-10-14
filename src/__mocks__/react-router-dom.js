import React from 'react'

const Link = jest.fn(({ children, to }) => {
    return (
        <react-router-dom-link to={to}>{children}</react-router-dom-link>
    )
})
const Router = jest.fn(props => <react-router-dom-router {...props} />)

module.exports.Link = Link
module.exports.Router = Router
