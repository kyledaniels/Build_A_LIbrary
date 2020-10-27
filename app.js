class Media {

    constructor(title){

        this._title=title;
        this._isCheckedOut=false;
        this._ratings=[];

    }

    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }

    set isCheckedOut(value){
        this._isCheckedOut= value;
    }

    toggleCheckOutStatus(){
       this.isCheckedOut=!this.isCheckedOut
    }

    getAverageRating(){
        let ratingSum = this.rating.reduce((accumulator,rating)=>{
            accumulator+rating
            return ratingSum/this.rating.length;
        })
    }

    addRating(rating){
        this.ratings.push(rating);
    }
}

class Book extends Media {
      constructor(author,title,pages){
          super(title)
          this._author=author;
          this._pages=pages;
      }
     
      get author(){
          return this._author;
      }

      get pages(){
          return this._pages;
      }
}