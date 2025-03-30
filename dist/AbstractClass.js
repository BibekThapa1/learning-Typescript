"use strict";
// Abstract class acts like a blueprint for the program. We cannot create new object but can use as a blueprint for other class
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, fitler) {
        this.cameraMode = cameraMode;
        this.fitler = fitler;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, fitler) {
        super();
        this.cameraMode = cameraMode;
        this.fitler = fitler;
    }
}
const bibek = new Instagram("test", "test");
