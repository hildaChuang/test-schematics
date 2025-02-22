import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function testSchematics(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    // 產生一個檔案名稱為使用者所輸入的 --name 參數的值，沒輸入則為 'hello' 的檔案
    // 檔案內容為 'world'
    tree.create(_options.name || 'hello', 'world');
    return tree;

    // const sourceTemplate = url('./files');
    // const sourceParamsTemplate = apply(sourceTemplate, [
    //     template({
    //       ..._options,
    //       ...strings,
    //     })
    // ]);
    // return mergeWith(sourceParamsTemplate)(tree, _context);
  };
}

export interface Schema {
  name: string
}
