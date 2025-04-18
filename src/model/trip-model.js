export default class TripModel {
  #points = [];
  #destinations = [];
  #offersByType = {};

  constructor(data) {
    this.#points = data.points;
    this.#destinations = data.destinations;
    this.#offersByType = data.offersByType;
  }

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offersByType() {
    return this.#offersByType;
  }

  getDestinationById(id) {
    return this.#destinations.find((dest) => dest.id === id) || null;
  }

  getOffersByType(type) {
    return this.#offersByType[type] || [];
  }
}
