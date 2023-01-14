"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const disposable = (vscode.commands.registerCommand('capybara.inputFile2', async () => {
    vscode.window.showInformationMessage('Input FILE-2');
    vscode.window.showOpenDialog();
}));
//# sourceMappingURL=file2.js.map