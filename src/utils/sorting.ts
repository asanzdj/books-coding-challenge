// TODO: Fix types

export const sortAscending = (arr: any[]) => (property: string): any[] => {
  return arr.slice().sort((a, b) => (a[property] < b[property] ? -1 : 1))
}


export const sortDescending = (arr: any[]) => (property: string): any[] =>
  arr.slice().sort((a, b) => (a[property] > b[property] ? -1 : 1))

export const sort = (arr: any[]) => (property: string, direction: 'ASC' | 'DESC'): any[] =>
  direction === 'ASC' ? sortAscending(arr)(property) : sortDescending(arr)(property)
