export type Media = {url: string}
export type Upvote = {userId: string}

export default class Report {
    private constructor (
        readonly id: string,
        readonly title: string, 
        readonly description: string,
        readonly userId: string,
        readonly location: {station: string, district: string, referencePoint?: string},
        readonly postDate: Date,
        readonly media: Media[],
        private upvotes: Upvote[]
    ){}

    static create (id: string, title: string, description: string, userId: string, location: {station: string, district: string, referencePoint?: string}, media: Media[]){
        return new Report(id, title, description, userId, location, new Date(), media, [])
    }

    setUpvotes(upvotes: Upvote[]){
        this.upvotes = upvotes
    }

    getUpvotes (){
        return this.upvotes
    }

    addUpvote (upvote: Upvote){
        this.upvotes.push(upvote)
    }

    removeUpvote (userId: string){
        const index = this.upvotes.findIndex(upvote => upvote.userId === userId)
        this.upvotes.splice(index, 1)
    }
}