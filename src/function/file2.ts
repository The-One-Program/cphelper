import * as vscode from 'vscode';

const disposable =(vscode.commands.registerCommand(
    'capybara.inputFile2',
    async () => {
        vscode.window.showInformationMessage('Input FILE-2'); 
        vscode.window.showOpenDialog();
    }
));