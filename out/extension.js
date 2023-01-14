"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const InputFile_1 = require("./function/InputFile");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('capybara.hello', async () => {
        (0, InputFile_1.default)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('capybara.inputGenerator', async () => {
        (0, InputFile_1.default)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('capybara.inputFile1', async () => {
        (0, InputFile_1.default)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('capybara.inputFile2', async () => {
        (0, InputFile_1.default)();
    }));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map