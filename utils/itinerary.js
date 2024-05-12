export default class ItineraryHandler {
    constructor(getter, setter) {
        this.setter = setter
        this.getter = getter
    }

    addPerformanceToItinerary(performance) {
        this.setter(prevState => ({ ...prevState, performance }))
    }
}

