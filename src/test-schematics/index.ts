import {Rule, SchematicContext,Tree} from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function testSchematics(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create(_options.name || 'default', 'hello');
    return tree;
  };
}

export interface Schema {
  name: string
}
