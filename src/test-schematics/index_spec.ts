import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('test-schematics', () => {
  const expectResult = async (fileName?: string) => {
    const fullFileName = `/${fileName || 'hello'}`;
    const params = fileName ? {name: fileName} : {};
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner.runSchematic('test-schematics', params, Tree.empty()).then();
    expect(tree.files).toContain(fullFileName);
    expect(tree.readContent(fullFileName)).toEqual('world');
  }

  it('沒有給檔名，則檔名為 "hello"，檔案內容為 "world"', async () => {
    expectResult();
  });

  it('有給檔名，則檔名為指定的 "test-file-name-given"，檔案內容為 "world"', async () => {
    expectResult('test-file-name-given');
  });
});
