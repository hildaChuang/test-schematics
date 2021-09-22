import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function testSchematics(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { name } = _options;
    const datetime = new Date();
    const now =
        datetime.getFullYear().toString() + '-'
        + (datetime.getMonth() + 1).toString() + '-'
        + datetime.getDate().toString() + '-'
        + datetime.getHours().toString() + '_'
        + datetime.getMinutes().toString() + '_'
        + datetime.getSeconds().toString();
    tree.create(`test-${now}.js`, `console.log('Hello ${name}');`);
    return tree;
  };
}

export interface Schema {
  name: string
}
