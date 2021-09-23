import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { strings } from "@angular-devkit/core";

const collectionPath = path.join(__dirname, '../collection.json');

describe('test-schematics', () => {
  it('成功產出檔案，檔名為"/hello-hilda-chuang.component.ts"', async () => {
    const name = 'hildaChuang';
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner
      .runSchematicAsync('test-schematics', {name: name}, Tree.empty())
      .toPromise();

    const dasherizeName = strings.dasherize(name);
    const fullFileName = `/hello-${dasherizeName}.component.ts`;
    expect(tree.files).toContain(fullFileName);
  });
});
