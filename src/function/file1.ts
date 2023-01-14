import * as vscode from 'vscode';
const disposable = vscode.commands.registerCommand(
    'capybara.inputGenerator',
    async () => {
        vscode.window.showInformationMessage('Input FILE-1'); 
        vscode.window.showOpenDialog();
    }
);