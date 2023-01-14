"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const disposable = vscode.commands.registerCommand('capybara.inputGenerator', async () => {
    vscode.window.showInformationMessage('Input FILE-1');
    vscode.window.showOpenDialog();
});
//# sourceMappingURL=file1.js.map