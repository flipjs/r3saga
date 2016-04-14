import assert from 'assert'
import { call, put } from 'redux-saga/effects'
import { incrementAsync, delay } from '../../src/sagas/incrementAsync'
import { increment } from '../../src/redux/modules/counter'

describe('incrementAsync', function () {
  const gen = incrementAsync()

  it('should call delay(1000)', function () {
    assert.deepEqual(
      gen.next().value,
      call(delay, 1000)
    )
  })

  it('should dispatch action increment(100)', function () {
    assert.deepEqual(
      gen.next().value,
      put(increment(100))
    )
  })

  it('should be done at this point', function () {
    assert.deepEqual(
      gen.next(),
      {done: true, value: undefined}
    )
  })
})
