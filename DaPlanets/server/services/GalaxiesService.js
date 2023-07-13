import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class GalaxiesService {
  async getGalaxyById(galaxyId) {
    const foundGalaxy = await dbContext.Galaxies.findById(galaxyId)
    if (!foundGalaxy) {
      throw new BadRequest('Invalid ID')
    }
    return foundGalaxy
  }
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxies.create(galaxyData)
    return galaxy
  }
  async getGalaxies() {
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }

}

export const galaxiesService = new GalaxiesService()