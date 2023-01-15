import * as vscode from 'vscode';

import x from './function/InputFile';
let data1 = '' , data2 = '' , data3 = '';
let NEXT_TERM_ID = 1;
export function activate(context: vscode.ExtensionContext) {
    vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.sendTextNoNewLine', () => {
		if (ensureTerminalExists()) {
			selectTerminal().then(terminal => {
				if (terminal && data1!='' && data2 != '' && data3 != '' ) {

					terminal.sendText("bash tester.sh generator.cpp input.cpp brute.cpp", false);
                    
                    vscode.window.showInformationMessage("Operation Successful");
				}
                else vscode.window.showWarningMessage("Please Enter The Files");
                
			});
            
		}
	}));
    context.subscriptions.push(vscode.commands.registerCommand(
		'capybara.inputGenerator',
		async () => {
            x().then(data =>{
                terminal.sendText('touch 1.cpp');
                te
            });
         
        }
    ));
    context.subscriptions.push(vscode.commands.registerCommand(
		'capybara.inputFile1',
		async () => {
            data2 = await x();
        }
    ));
    context.subscriptions.push(vscode.commands.registerCommand(
		'capybara.inputFile2',
        async () => {
            data3 = await x();
        }
    ));
}
function selectTerminal(): Thenable<vscode.Terminal | undefined> {
	interface TerminalQuickPickItem extends vscode.QuickPickItem {
		terminal: vscode.Terminal;
	}
	const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
	const items: TerminalQuickPickItem[] = terminals.map(t => {
		return {
			label: `name: ${t.name}`,
			terminal: t
		};
	});
	return vscode.window.showQuickPick(items).then(item => {
		return item ? item.terminal : undefined;
	});
}

function ensureTerminalExists(): boolean {
	if ((<any>vscode.window).terminals.length === 0) {
		vscode.window.showErrorMessage('No active terminals');
		return false;
	}
	return true;
}
