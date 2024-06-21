import {
  apply,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
// 引入 strings ，所有的字串處理函式都在裡面
import { strings } from "@angular-devkit/core";
import { parseName } from "@schematics/angular/utility/parse-name";
import { buildDefaultPath } from "@schematics/angular/utility/workspace";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function testSchematics(_options: TestSchematicsSchema): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    // 讀取 angular.json，如果沒有 angular.json 代表非 Angular 專案
    const workspaceConfigBuffer = tree.read('angular.json');
    if (!workspaceConfigBuffer) {
      throw new SchematicsException('Not an Angular CLI workspace');
    }

    // 解析出專案的正確路徑與檔名
    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    console.log('workspaceConfig:', workspaceConfig);
    // 取得專案名稱
    const projectName = _options.project || workspaceConfig.defaultProject;
    // 取得專案資訊
    const project = workspaceConfig.projects[projectName];
    // 建立專案預設路徑
    const defaultProjectPath = buildDefaultPath(project);
    const parsePath = parseName(defaultProjectPath, _options.name);
    const {name, path} = parsePath;

    // 使用範本
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options, // 使用者所輸入的參數
        ...strings,  // 將這些函式加到規則裡，範本語法才能正常運作
        name // 蓋過原本的 _options.name，避免使用錯誤的檔名
      }),
      move(path) // 將產生的檔案移至正確的目錄下
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}
