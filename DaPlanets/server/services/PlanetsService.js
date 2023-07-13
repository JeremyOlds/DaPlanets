import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"
import { galaxiesService } from "./GalaxiesService.js"


class PlanetsService {
  async getPlanets() {
    const planets = await dbContext.Planets.find()
    return planets
  }
  async getPlanetsByGalaxyId(galaxyId) {
    const planets = await dbContext.Planets.find({ galaxyId: galaxyId })
    return planets
  }
  async createPlanet(planetData) {
    await galaxiesService.getGalaxyById(planetData.galaxyId)
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }

}


export const planetsService = new PlanetsService()