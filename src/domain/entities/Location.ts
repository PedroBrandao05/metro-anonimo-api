export default class Location {
     constructor (
        readonly id: string,
        readonly reportId: string,
        readonly district: string,
        readonly station: string,
        readonly referencePoint: string
    ){
        this.district = district.toLowerCase()
        this.station = station.toLowerCase()
    }
}