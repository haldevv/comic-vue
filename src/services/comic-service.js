import httpService from './http-service';
import { sanitizeUrl } from '@braintree/sanitize-url'

class ComicService {
    /**
     * Get a random comic
     * @returns
     */
    async getComic() {
      const comicId = await this.getComicId()

      const api = process.env.VUE_APP_URL_API
      const { data } = await httpService.get(`${api}/${comicId}/info.0.json`)

      return {
        image: {
          url: sanitizeUrl(data.img),
          alt: data.alt
        },
        title: data.title
      }
    }

    /**
     * Get the last comic and extract the comic id num as max and create a number random from 1 to max
     * @returns
     */
    async getComicId() {
      const api = process.env.VUE_APP_URL_API
      const response = await httpService.get(`${api}/info.0.json`)
      return Math.floor(Math.random() * (response.data.num - 1) + 1)
    }
}

const comic = new ComicService()
export default comic
