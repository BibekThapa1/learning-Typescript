"use strict";
// For class Interface is designed and all the contents in the interface is called in the constructor of the class
class Photo {
    constructor(camera, filter, burst) {
        this.camera = camera;
        this.filter = filter;
        this.burst = burst;
    }
}
class Video {
    constructor(camera, filter, burst) {
        this.camera = camera;
        this.filter = filter;
        this.burst = burst;
    }
    createVideo() { }
}
// When used abstract in front of the class we cannot create a new object
class takeePhoto {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
    }
}
class Instaagram extends takePhoto {
}
const bibek = new Instaagram("", true, 3);
