import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function testSchematics(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // 使用範本
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options, // 使用者所輸入的參數
      })
    ]);
    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}

export interface Schema {
  name: string
}
