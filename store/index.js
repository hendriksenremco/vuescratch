export const state = () => ({
  readProgress: 0,
})

export const mutations = {
  setReadProgress(state, payload) {
    if (payload > 100) {
      payload = 100
    }
    if (payload < 0) {
      payload = 0
    }
    state.readProgress = payload
  },
}
