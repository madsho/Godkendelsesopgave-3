class image{
    constructor (imageId, author, fileType, date){
        this.imageId = imageId
        this.author = author
        this.fileType = fileType
        this.date = date
    }
}
var madsPic = new image ("123", "Mads Holmvang", ".jpeg", "20/10/2019")

var sofPic = new image ("456", "Sofie Laustsen", ".png", "23/08/2018")

exports.madsPic= [madsPic]
exports.sofPic = [sofPic]