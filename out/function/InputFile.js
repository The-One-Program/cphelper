"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fs = require("fs");
async function x() {
    vscode.window.showInformationMessage('Input Generator File!');
    let file = await vscode.window.showOpenDialog();
    let source = file["0"]["path"];
    source = source.substring(3);
    let data = fs.readFileSync(source, "utf8");
    vscode.window.showInformationMessage("File Uploaded");
    return data;
}
exports.default = x;
//# sourceMappingURL=InputFile.js.map