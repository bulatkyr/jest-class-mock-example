export default class SoundPlayer {
    music: string;

    constructor(music: string) {
        this.music = music;
    }

    play() {
        return 'Hello, ' + this.music;
    }
}
