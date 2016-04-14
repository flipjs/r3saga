import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { increment } from '../redux/modules/counter'

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export function * incrementAsync () {
  yield call(delay, 1000)
  yield put(increment(100))
}

export function * watchIncrementAsync () {
  yield * takeEvery('COUNTER_INCREMENT_ASYNC', incrementAsync)
}

