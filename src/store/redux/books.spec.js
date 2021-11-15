import reducer, { setSort, initialState } from './books'

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

test('should overwrite the sorting config', () => {
  const previousState = {
    ...initialState,
  }
  expect(reducer(previousState, setSort({ category: 'title', direction: 'DESC' }))).toEqual(
    {
      ...previousState,
      sorting: {
        category: 'title',
        direction: 'DESC',
      },
    })
})
