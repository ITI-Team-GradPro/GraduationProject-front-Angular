export interface Place {
    id:number,
    placeId:number,
    name:string,
    rating:number,
    overAllRating:number ,
    description:string,
    price:number,
    imagesUrls:string[],
    imgsPlaces:string[]
}



export interface OwnerProfile {
  email: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  bio: string | null;
  address: string | null;
  imageUrl: string | null;
  ownedPlaces: OwnedPlace[];
}

export interface OwnedPlace {
  placeId: number;
  name: string;
  price: number;
  overAllRating: number;
  description: string;
  categoryId: number;
  images: string[];
}

  export interface PlaceDetails {
    placeId: number;
    name: string;
    price: number;
    overAllRating: number;
    location: string;
    description: string;
    peopleCapacity: number;
    confirmReq: boolean;
    imageUrls: string[];
    ownerDetailsDto: OwnerDetails;
    commentDetailsDto: CommentDetail[];
    categoryDetailsDto: CategoryDetail;
    reviewDetailsDto: ReviewDetail[];
  }
  
  interface OwnerDetails {
    id: string;
    firstName: string;
    lastName: string;
    bio: string;
    imageUrl: string;
  }
  
  interface CommentDetail {
    commentId: number;
    comment: string;
    commentDateTime: Date;
    userId: string;
    user: User;
  }
  
  interface User {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
    commentDateTime: string;
  }
  
  interface CategoryDetail {
    categoryName: string;
  }
  
  interface ReviewDetail {
    reviewId: number;
    review: string;
    rating: number;
    userId: string;
    user: User;
  }


  export interface Category {
    name: string;
  }