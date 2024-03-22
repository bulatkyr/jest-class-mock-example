import  SoundPlayer from './sound-player';

export const consume = (input: string) => {
  const sp = new SoundPlayer(input);
  return sp.play();
};
