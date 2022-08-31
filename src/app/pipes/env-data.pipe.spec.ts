import { EnvDataPipe } from './env-data.pipe';

describe('EnvDataPipe', () => {
  it('create an instance', () => {
    const pipe = new EnvDataPipe();
    expect(pipe).toBeTruthy();
  });
});
