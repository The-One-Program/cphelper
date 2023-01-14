import * as vscode from 'vscode';

import x from './function/InputFile';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand(
        'capybara.hello',
        async () => {
            x();
        }
    ));
    context.subscriptions.push(vscode.commands.registerCommand(
		'capybara.inputGenerator',
		async () => {
            x();
        }
    ));
    context.subscriptions.push(vscode.commands.registerCommand(
		'capybara.inputFile1',
		async () => {
            x();
        }
    ));
    context.subscriptions.push(vscode.commands.registerCommand(
		'capybara.inputFile2',
        async () => {
            x();
        }
    ));
}
