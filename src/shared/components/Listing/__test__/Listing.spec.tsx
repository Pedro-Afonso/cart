import { screen } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

import { renderWithProviders } from '@/providers'
import { data, api } from '@/mocks'

import { Listing } from '..'

const handlers = [
  rest.get(api, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data))
  })
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

describe('Listing', () => {
  it(`should render ${data.count} 'Card' components`, async () => {
    renderWithProviders(<Listing />)

    const cards = await screen.findAllByTestId('card-id')

    expect(cards).toHaveLength(data.count)
  })
})
