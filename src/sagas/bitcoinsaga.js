/**
 * @module Sagas/GitHub
 * @desc GitHub
 */

import { call, put, takeLatest, debounce } from 'redux-saga/effects';
import { request } from '../modules/client';

/**
 * Get Repos
 *
 * @param {Object} action
 *
 */
export function* getBitcoin({ }) {
  try {
    console.log("HELLO")
    const response = yield call(
      request,
      `https://blockchain.info/ticker`,
    );
    console.log(response)
    yield put({
      type: "BITCOIN_GET_SUCCESS",
      payload: response,
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: "BITCOIN_GET_FAILURE",
      payload: err,
    });
  }
}

/**
 * GitHub Sagas
 */
export const bitcoinsaga =
  [debounce(1000, "BITCOIN_GET", getBitcoin)]
