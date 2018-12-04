import { DataEntitiesModule } from './data-entities.module';

describe('DataEntitiesModule', () => {
  let dataEntitiesModule: DataEntitiesModule;

  beforeEach(() => {
    dataEntitiesModule = new DataEntitiesModule();
  });

  it('should create an instance', () => {
    expect(dataEntitiesModule).toBeTruthy();
  });
});
