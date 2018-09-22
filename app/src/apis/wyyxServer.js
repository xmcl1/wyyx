import * as urls from '../commons/urls'
export class indexServices0 {
  static indexInfoByUserId0 (cb) {
    fetch(urls.LIMITTIMEAPI).then(response => {
      response.json().then(data => {
        cb(data)
      })
    })
  }
}
export class indexServices1 {
  static indexInfoByUserId1 (cb) {
    fetch(urls.NEWPROAPI).then(response => {
      response.json().then(data => {
        cb(data)
      })
    })
  }
}
