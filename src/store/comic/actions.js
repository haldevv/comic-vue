import comicService from '../../services/comic-service'

const comicActions = {
  async getComic({ commit }) {
    try {
      const response = await comicService.getComic()
      commit('setComic', response)
    } catch (error) {
      // error handler
      console.error(error)
    }
  }
}

export {
  comicActions
}
