import Md5 from 'blueimp-md5'
import storage from 'simplestorage.js'
import superagent from 'superagent'
import nprogress from 'nprogress'
import { alert } from 'components/alarm'

nprogress.configure({
  minimum: 0.618,
  speed: 618
})
const xhrSet = new Set()
const appKey = 'c2674528e7fab0e856d9b4a563168f19'
const secret = '02a2025b903e585efff6b2fe73b15675'

export default function apiClient ({
  url,
  type = 'post',
  params = {},
  data = {}
}) {
  return new Promise((resolve, reject) => {
    if (xhrSet.has(url)) reject()
    xhrSet.add(url)
    nprogress.start()

    const request = superagent[type]('/v1/ghost/face/')
    request.query(params)
    request.send(formatParams(url, data))
    request.accept('application/json')
    request.end((err, response) => {
      xhrSet.delete(url)
      nprogress.done()

      if (err) {
        window.location.href = '#/login'
        alert(err.message)
        return reject({code: 1, message: err.message})
      }
      const body = response.body || response.text || {}
      const result = body.result || {}
      const { code = 1, message = '未知错误' } = result

      switch (+code) {
        case 0:
          resolve(result)
          break
        case 6004:
        case 5204:
          window.location.href = '#/login'
          alert(message)
          break
        default:
          alert(message)
          reject(result)
      }
    })
  })
}

function formatParams (api, params) {
  let req = storage.get('@auth') || {}
  let timestamp = Math.floor(new Date().getTime() / 1000)
  return {
    id: 1,
    method: api,
    params: params,
    request: api === 'userLogin' ? {} : req,
    system: {
      version: '1.0',
      jsonrpc: '2.0',
      key: req && req.token ? req.token.substr(0, 16) : appKey,
      time: timestamp,
      sign: Md5((req && req.token ? req.token.substr(0, 16) : appKey) +
        timestamp +
        (!req.user_id ? secret : req.user_id + req.token + req.token))
    }
  }
}
