// For class Interface is designed and all the contents in the interface is called in the constructor of the class

// interface TakePhoto {
//   cameraMode: string;
//   filter: string;
//   burst: number;
// }

// class Instagram implements TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number
//   ) {}
// }

// interface Story {
//   crateStory(): void;
// }

// class Youtube implements TakePhoto, Story {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number
//   ) {}

//   crateStory(): void {
//       console.log("Hello this is a create story function");

//   }
// }

// lets make a interface and implements it in the class

interface TakePhoto {
  camera: string;
  filter: string;
  burst: number;
}

class Photo implements TakePhoto {
  constructor(
    public camera: string,
    public filter: string,
    public burst: number
  ) {}
}

interface TakeVideo {
  createVideo(): void;
}

class Video implements TakePhoto, TakeVideo {
  constructor(
    public camera: string,
    public filter: string,
    public burst: number
  ) {}
  createVideo(): void {}
}


// When used abstract in front of the class we cannot create a new object

abstract class takeePhoto {
  constructor(
    public cameraMode: string,
    public filter: boolean,
    public burst: number
  ) {}

  getSepia():void{
    
  }
}

class Instaagram extends takePhoto {}

const bibek = new Instaagram("", true, 3);
