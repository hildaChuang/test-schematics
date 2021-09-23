import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
// 引入 strings ，所有的字串處理函式都在裡面
import { strings } from "@angular-devkit/core";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function testSchematics(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // 使用範本
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options, // 使用者所輸入的參數
        ...strings,  // 將這些函式加到規則裡，範本語法才能正常運作
      })
    ]);
    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}

export interface Schema {
  name: string
}
