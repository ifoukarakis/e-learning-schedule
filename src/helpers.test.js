import dayjs from 'dayjs';
import {currentTimeslot, transpose, zip} from './helpers';

describe('transpose', () => {

  it('should work with empty arrays', () => {
    expect(transpose()).toEqual([])  
    expect(transpose([])).toEqual([])
  })

  it('should transpose single list with single item', () => {
    expect(transpose([[1]])).toEqual([[1]])
  })


  it('should transpose single list', () => {
    expect(transpose([[1, 2]])).toEqual([[1], [2]])
  })
  
  it('should transpose pair of lists', () => {
    expect(transpose([[1, 2], [3, 4]])).toEqual([[1, 3], [2, 4]])
  })

})

describe('zip', () => {
  it('should return undefined for empty or undefined values', () => {
    expect(zip()).toBeUndefined()
    expect(zip([])).toBeUndefined()
    expect(zip(undefined, [])).toBeUndefined()
    expect(zip([], [])).toEqual([])  
  })

  it('should merge items from arrays of equal size', () => {
    expect(zip([1, 2], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b']])
  })
  
  it('should merge items if lists are of unequal size', () => {
    expect(zip([1, 2, 3], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b'], [3, undefined]])

  })

  it('should respect size of first argument', () => {
    expect(zip([1, 2], ['a', 'b', 'c'])).toEqual([[1, 'a'], [2, 'b']])
  })
  
})

describe('currentTimeslot', () => {
  const timeslots = [
    ['14:10', '14:20'],
    ['14:30', '14:40'],
    ['15:30', '16:00'],
  ]

  it('should return undefined if not within any timeslot', () => {
    expect(currentTimeslot(dayjs(new Date(2020, 11, 16, 14, 0)) , timeslots)).toBeUndefined()
    expect(currentTimeslot(dayjs(new Date(2020, 11, 16, 14, 25)) , timeslots)).toBeUndefined()
    expect(currentTimeslot(dayjs(new Date(2020, 11, 16, 15, 0)) , timeslots)).toBeUndefined()
  })

  it('should return proper timeslot when within boundaries', () => {
    expect(currentTimeslot(dayjs(new Date(2020, 11, 16, 14, 11)) , timeslots)).toEqual(['14:10', '14:20'])
    expect(currentTimeslot(dayjs(new Date(2020, 11, 16, 14, 39)) , timeslots)).toEqual(['14:30', '14:40'])
  })
})
