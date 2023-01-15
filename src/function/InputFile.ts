import * as vscode from 'vscode';
import fs = require('fs');

export default async function x() {
    vscode.window.showInformationMessage('Input Generator File!');
    let file: any = await vscode.window.showOpenDialog();
    let source: string = file["0"]["path"];
    source = source.substring(3);

    let data: string = fs.readFileSync(source,"utf8");
    vscode.window.showInformationMessage("File Uploaded");
    return data;
 
 
}
