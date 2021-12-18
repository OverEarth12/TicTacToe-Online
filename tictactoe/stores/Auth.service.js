import { makeAutoObservable } from 'mobx'

class Auth {
  profile = {
    displayName: "japanapi"
  }
  gameDetail = {
    host_name: "Bank"
  }

  constructor() {
    makeAutoObservable(this)
  }

  setProfile(payload) {
    this.profile = payload
  }

  setGameDetail(payload) {
    this.gameDetail = payload
  }

  get getProfile() {
    return this.profile
  }

  get getGameDetail() {
    return this.gameDetail
  }
}

const authentication = new Auth()

export { authentication }
