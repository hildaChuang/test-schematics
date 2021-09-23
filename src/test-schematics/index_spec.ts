import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('test-schematics', () => {
  const expectResult = async (fileName?: string) => {
    const fullFileName = `/${fileName || 'default'}`;
    const params = fileName ? {name: fileName} : {};
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner
      .runSchematicAsync('test-schematics', params, Tree.empty())
      .toPromise();

    expect(tree.files).toContain(fullFileName);
    expect(tree.readContent(fullFileName)).toEqual('hello');
  }

  it('沒給檔名，檔名為 default，內容為 "hello"', async () => {
    expectResult();
  });

  it('給檔名，檔名為 Hilda，內容為 "hello"', async () => {
    expectResult('Hilda');
  });
});
