import { describe, expect, test } from '@jest/globals'
// eslint-disable-next-line no-unused-vars
import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

describe('Tests for trim', () => {
  it('The space should be trimmed', () => {
    expect(fullTrim('Good morning')).toBe('Goodmorning')
  })
  it('The space should be trimmed in russian lenguage', () => {
    expect(fullTrim('Доброе утро')).toBe('Доброеутро')
  })
  it('The space should be trimmed with simbols', () => {
    expect(fullTrim('qwerty 123 !@#')).toBe('qwerty123!@#')
  })
})

describe('Tests for total', () => {
  it('Positive: one product costs 100', () => {
    expect(getTotal([{ quantity: 1, name: 'dress', price: 100 }]))
      .toBe(100)
  })
  it('Positive: two product costs 200', () => {
    expect(getTotal([{ quantity: 2, name: 'dress', price: 100 }]))
      .toBe(200)
  })
  it('Positive: two different product costs 300', () => {
    expect(getTotal([{ quantity: 1, name: 'dress', price: 200 }, { quantity: 1, name: 'T-shirt', price: 100 }]))
      .toBe(300)
  })
})

describe('Parameterized test for name', () => {
  test.each`
  param | expected
  ${'Sveta'} | ${true}
  ${'Anna'} | ${true}
  ${'qwerty'} | ${false}
  ${123} | ${false}
  `('$param = $expected', ({ param, expected }) => {
    expect(nameIsValid(param)).toBe(expected)
  })
})
