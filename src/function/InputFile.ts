import * as vscode from 'vscode';
import fs = require('fs');

export default async function x() {
    vscode.window.showInformationMessage('Input Generator file!');
    let file: any = await vscode.window.showOpenDialog();
    let source: string = file["0"]["path"];
    source = source.substring(3);
    // fs.copyFile('src\output1.txt','src\output2.txt', (err) => {
        //     if (err) { console.log(err); throw err; }
        //     console.log('File was copied to destination');
        // });
        let data: string = fs.readFileSync(source, "utf8");
        vscode.workspace.openTextDocument()
        .then((newDocument) => {
            vscode.window.showTextDocument(newDocument)
            .then((newTextEditor: vscode.TextEditor) => {
                newTextEditor.edit((ed) => {
                    ed.insert(new vscode.Position(0, 0), data);
                })
            })

            console.log(newDocument.isUntitled);
            // console.log(newDocument.getText);
            // console.log(newDocument.uri);
            
        }
        
    )
    // console.log(data);
    
}
