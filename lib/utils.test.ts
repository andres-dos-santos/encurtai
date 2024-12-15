import { expect, test } from 'vitest'

import { cn } from './utils'

test('must return the class with the values ​​passed in the parameter', () => {
  expect(cn('mx-10')).toEqual('mx-10')
})
