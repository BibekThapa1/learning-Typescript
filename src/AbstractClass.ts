// Abstract class acts like a blueprint for the program. We cannot create new object but can use as a blueprint for other class

abstract class TakePhoto {
  constructor(public cameraMode: string, public fitler: string) {}

  abstract getSepia(): void;
}

class Instagram extends TakePhoto {
  constructor(public cameraMode: string, public fitler: string) {
    super();
  }
}

const bibek = new Instagram("test", "test");

export {};
