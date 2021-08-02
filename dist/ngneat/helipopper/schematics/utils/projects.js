"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProject = exports.getWorkspace = exports.getWorkspacePath = void 0;
const schematics_1 = require("@angular-devkit/schematics");
function getWorkspacePath(host) {
    const possibleFiles = ['/angular.json', '/.angular.json', '/workspace.json'];
    const path = possibleFiles.filter(path => host.exists(path))[0];
    return path;
}
exports.getWorkspacePath = getWorkspacePath;
function getWorkspace(host) {
    const path = getWorkspacePath(host);
    const configBuffer = host.read(path);
    if (configBuffer === null) {
        throw new schematics_1.SchematicsException(`Could not find (${path})`);
    }
    const config = configBuffer.toString();
    return JSON.parse(config);
}
exports.getWorkspace = getWorkspace;
function getProject(host, projectName) {
    const workspace = getWorkspace(host);
    projectName = projectName || workspace.defaultProject;
    const project = workspace.projects[projectName];
    if (!project) {
        throw new schematics_1.SchematicsException(`Invalid project name: ${projectName}`);
    }
    return project;
}
exports.getProject = getProject;
//# sourceMappingURL=projects.js.map