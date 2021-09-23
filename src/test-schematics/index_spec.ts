import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('test-schematics', () => {
  it('not set file name', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner
      .runSchematicAsync('test-schematics', {}, Tree.empty())
      .toPromise();

    expect(tree.files).toContain('/default');
  });

  it('set file name', async () => {
    const fileName = 'Hilda';
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner
      .runSchematicAsync(
        'test-schematics',
        { name: fileName },
        Tree.empty()
      )
      .toPromise();

    expect(tree.files).toContain(`/${fileName}`);
  });

  it('not set file name - content is hello', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner
      .runSchematicAsync('test-schematics', {}, Tree.empty())
      .toPromise();

    expect(tree.readContent('/default')).toEqual('hello');
  });

  it('set file name -  content is hello', async () => {
    const fileName = 'Hilda';
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner
      .runSchematicAsync(
        'test-schematics',
        { name: fileName },
        Tree.empty()
      )
      .toPromise();

    expect(tree.readContent(`/${fileName}`)).toEqual('hello');
  });
});
