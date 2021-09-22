import {apply, mergeWith, Rule, SchematicContext, template, Tree, url} from '@angular-devkit/schematics';
import {strings} from "@angular-devkit/core";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function testSchematics(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('./files');
    const sourceParamsTemplate = apply(sourceTemplate, [
        template({
          ..._options,
          ...strings,
        })
    ]);
    return mergeWith(sourceParamsTemplate)(tree, _context);
  };
}

export interface Schema {
  name: string
}
