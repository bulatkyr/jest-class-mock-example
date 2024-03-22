import SoundPlayer from './sound-player';
import {consume} from './sound-player-consumer';

// inspired by https://jestjs.io/docs/es6-class-mocks#calling-jestmock-with-the-module-factory-parameter
const mockPlay = jest.fn().mockReturnValue('random');
jest.mock('./sound-player', () => {
    return jest.fn().mockImplementation(() => {
        return {play: mockPlay};
    });
});

it('test with the class constructor mock', () => {
    const outputSound = consume('input sound');

    expect(outputSound).toBe('random');
    expect(mockPlay).toHaveBeenCalledTimes(1);
    expect(SoundPlayer).toHaveBeenCalledTimes(1);
});
