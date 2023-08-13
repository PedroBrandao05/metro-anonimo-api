export default class Location {
     constructor (
        readonly id: string,
        readonly district: string,
        readonly station: string,
    ){
        this.district = district.toLowerCase()
        this.station = station.toLowerCase()
    }
}