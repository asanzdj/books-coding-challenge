// TODO: Fix this test

import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { render, screen } from '../../textUtils'
import BookDetail from './BookDetail'

const mockBook = {
  id: 1,
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  summary: 'Many residents of Maycomb are racists and during the novel Atticus is asked to defend Tom Robinson, a black man wrongly accused of raping a white woman. Atticus takes on the case even though everyone knows he has little hope of winning.',
  stars: 5,
}

export const handlers = [
  rest.get(`/books/${mockBook.id}`, (req, res, ctx) => {
    return res(ctx.json(mockBook), ctx.delay(150))
  }),
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: mockBook.id,
  }),
  useRouteMatch: () => ({ url: `/books/${mockBook.id}` }),
}))

test('fetches a book after visiting the page', async () => {
  render(<BookDetail />)

  // after some time, the book should be received
  expect(await screen.findByText(mockBook.title)).toBeInTheDocument()
  expect(await screen.findByText(mockBook.author)).toBeInTheDocument()
  expect(await screen.findByText(mockBook.summary)).toBeInTheDocument()
})
