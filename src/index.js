import fetch from 'cross-fetch'

import config from './config.js'

let localApiKey
export async function init ({ apiKey }) {
  localApiKey = apiKey
}

export async function incrementMetric (metricSlug, dimensionValues = {}, count = 1, { date, segmentSlugs, timeScale, isTotal, isSingleTimeScale } = {}) {
  return request({
    query: `
      mutation DatapointIncrement(
        $metricSlug: String!
        $dimensionValues: JSONObject
        $count: Int!
        $date: Date
        $segmentSlugs: [String]
        $timeScale: String
        $isTotal: Boolean
        $isSingleTimeScale: Boolean
      ) {
        datapointIncrement(
          metricSlug: $metricSlug
          dimensionValues: $dimensionValues
          count: $count
          date: $date
          segmentSlugs: $segmentSlugs
          timeScale: $timeScale
          isTotal: $isTotal
          isSingleTimeScale: $isSingleTimeScale
        )
      }
    `,
    variables: {
      metricSlug, dimensionValues, count, date, segmentSlugs, timeScale, isTotal, isSingleTimeScale
    }
  })
}

// for stuff like dau/wau/mau and retention
export async function incrementUnique (metricSlug, hash, { date, segmentSlugs } = {}) {
  // new table for uniques
  return request({
    query: `
      mutation DatapointIncrementUnique(
        $metricSlug: String!
        $segmentSlugs: [String]
        $hash: String!
        $date: Date
      ) {
        datapointIncrementUnique(
          metricSlug: $metricSlug
          segmentSlugs: $segmentSlugs
          hash: $hash
          date: $date
        )
      }

    `,
    variables: {
      metricSlug, segmentSlugs, hash, date
    }
  })
}

function request (body) {
  return fetch(config.API_URL, {
    method: 'POST',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${localApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
