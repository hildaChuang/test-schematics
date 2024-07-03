import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { strings } from "@angular-devkit/core";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function testSchematics(_options: Schema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    // 產生一個檔案名稱為使用者所輸入的 --name 參數的值，沒輸入則為 'hello' 的檔案
    // 檔案內容為 'world'
    // tree.create(_options.name || 'hello', 'world');
    // return tree;

    // 設定使用的範本位置
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplate = apply(sourceTemplates, [
      template({
        // 使用者輸入的參數 name 取代範本檔名的 '__name__'
        ..._options,
        // 必須引入「範本語法」才有作用
        ...strings,
      })
    ]);
    return mergeWith(sourceParametrizedTemplate);
  };
}

export interface Schema {
  name: string
}
