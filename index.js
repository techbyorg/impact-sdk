import fetch from 'cross-fetch'

import config from './config.js'

// FIXME: pass apiKey to server
export class Impact {
  constructor ({ apiKey }) {
    this.apiKey = apiKey
  }

  async incrementMetric (metricSlug, dimensionValues= {}, count = 1, { date, setTotal } = {}) {
    return request({
      query: `
        mutation DatapointIncrement(
          $metricSlug: String!
          $dimensionValues: JSONObject
          $count: Int!
          $date: Date
          $setTotal: Boolean
        ) {
          datapointIncrement(
            metricSlug: $metricSlug
            dimensionValues: $dimensionValues
            count: $count
            date: $date
            setTotal: $setTotal
          )
        }
      `,
      variables: {
        metricSlug, dimensionValues, count, date, setTotal
      }
    })
  }

  // for stuff like dau/wau/mau and retention
  async incrementUnique (metricSlug, hash, { date } = {}) {
    // new table for uniques
    return request({
      query: `
        mutation DatapointIncrementUnique(
          $metricSlug: String!
          $hash: String!
          $date: Date
        ) {
          datapointIncrementUnique(
            metricSlug: $metricSlug
            hash: $hash
            date: $date
          )
        }

      `,
      variables: {
        metricSlug, hash, date
      }
    })
  }
}

function request (body) {
  return fetch(config.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
}