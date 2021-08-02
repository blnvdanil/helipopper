"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addImportsToModuleDeclaration = exports.addImportsToModuleFile = exports.applyChanges = exports.getModuleFile = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const typescript_1 = require("typescript");
const schematics_consts_1 = require("../schematics.consts");
const ast_utils_1 = require("../utils/ast-utils");
const change_1 = require("../utils/change");
const find_module_1 = require("../utils/find-module");
const projects_1 = require("../utils/projects");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const package_1 = require("../utils/package");
function getModuleFile(host, options) {
    const modulePath = options.module;
    if (!host.exists(modulePath)) {
        throw new schematics_1.SchematicsException(`File ${modulePath} does not exist.`);
    }
    const text = host.read(modulePath);
    if (text === null) {
        throw new schematics_1.SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString("utf-8");
    return typescript_1.createSourceFile(modulePath, sourceText, typescript_1.ScriptTarget.Latest, true);
}
exports.getModuleFile = getModuleFile;
function applyChanges(host, path, changes) {
    const recorder = host.beginUpdate(path);
    for (const change of changes) {
        if (change instanceof change_1.InsertChange) {
            recorder.insertLeft(change.pos, change.toAdd);
        }
    }
    host.commitUpdate(recorder);
    return host;
}
exports.applyChanges = applyChanges;
function addImportsToModuleFile(options, imports, file = schematics_consts_1.LIB_NAME) {
    return host => {
        const module = getModuleFile(host, options);
        const importChanges = ast_utils_1.insertImport(module, options.module, imports.join(", "), file);
        return applyChanges(host, options.module, [importChanges]);
    };
}
exports.addImportsToModuleFile = addImportsToModuleFile;
function addImportsToModuleDeclaration(options, imports) {
    return host => {
        const module = getModuleFile(host, options);
        const importChanges = imports.map(imp => ast_utils_1.addImportToModule(module, options.module, imp, schematics_consts_1.LIB_NAME)[0]);
        return applyChanges(host, options.module, importChanges);
    };
}
exports.addImportsToModuleDeclaration = addImportsToModuleDeclaration;
function addModuleToPackageJson() {
    return (host, context) => {
        package_1.addPackageToPackageJson(host, "dependencies", "@ngneat/overview", "^1.0.0");
        context.addTask(new tasks_1.NodePackageInstallTask());
        return host;
    };
}
function default_1(options) {
    return (host, context) => {
        const project = projects_1.getProject(host, options.project);
        const sourceRoot = (project && project.sourceRoot) || "src";
        options.module = find_module_1.findRootModule(host, options.module, sourceRoot);
        return schematics_1.chain([
            addModuleToPackageJson,
            addImportsToModuleFile(options, ["TippyModule"]),
            addImportsToModuleDeclaration(options, ["TippyModule.forRoot()"])
        ])(host, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map