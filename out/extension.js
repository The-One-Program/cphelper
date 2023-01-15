"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const InputFile_1 = require("./function/InputFile");
let data1 = '', data2 = '', data3 = '';
let NEXT_TERM_ID = 1;
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.sendTextNoNewLine', () => {
        vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
        if (ensureTerminalExists()) {
            selectTerminal().then(terminal => {
                if (terminal && data1 != '' && data2 != '' && data3 != '') {
                    terminal.sendText("bash tester.sh '" + data1 + "' '" + data2 + "' '" + data3 + "'", false);
                    vscode.window.showInformationMessage("Operation Successful");
                }
                else
                    vscode.window.showWarningMessage("Please Enter The Files");
            });
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('capybara.inputGenerator', async () => {
        data1 = await (0, InputFile_1.default)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('capybara.inputFile1', async () => {
        data2 = await (0, InputFile_1.default)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('capybara.inputFile2', async () => {
        data3 = await (0, InputFile_1.default)();
    }));
}
exports.activate = activate;
function selectTerminal() {
    const terminals = vscode.window.terminals;
    const items = terminals.map(t => {
        return {
            label: `name: ${t.name}`,
            terminal: t
        };
    });
    return vscode.window.showQuickPick(items).then(item => {
        return item ? item.terminal : undefined;
    });
}
function ensureTerminalExists() {
    if (vscode.window.terminals.length === 0) {
        vscode.window.showErrorMessage('No active terminals');
        return false;
    }
    return true;
}
//# sourceMappingURL=extension.js.map