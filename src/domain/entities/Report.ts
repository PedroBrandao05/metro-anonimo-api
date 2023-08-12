import ApplicationError from "../errors/ApplicationError"
import Location from "./Location"

export type Media = {url: string}

export default class Report {
    private constructor (
        readonly id: string,
        readonly title: string, 
        readonly description: string,
        readonly signature: string,
        readonly location: Location,
        readonly postDate: Date,
        readonly media: Media[],
        private upvotes: number
    ){}

    static create (id: string, title: string, description: string, signature: string, location: Location, postDate: string, media: Media[]){
        return new Report(id, title, description, signature, location, new Date(postDate), media, 0)
    }

    getUpvotes (){
        return this.upvotes
    }

    setUpvote (upvotes: number){
        if (upvotes < 0) throw new ApplicationError("Upvotes must be greater or equal to zero", 400)
        this.upvotes = upvotes
    }

    addUpvote (){
        this.upvotes += 1
    }

    removeUpvote (){
        if (this.upvotes === 0) throw new ApplicationError("Upvotes must be greater or equal to zero", 400)
        this.upvotes -= 1
    }
}