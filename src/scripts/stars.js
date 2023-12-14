class Star {
    constructor (data) {
        this.name = data.name
        this.spectralClass = data.spectral_class
        this.apparentMagnitude = data.apparent_magnitude
        this.absoluteMagnitude = data.absolute_magnitude
        this.constellation = data.constellation
        this.distance = data.distance_light_year
    }
}