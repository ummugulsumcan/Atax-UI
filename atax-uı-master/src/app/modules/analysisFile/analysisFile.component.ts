import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-analysis-file',
    templateUrl: './analysisFile.component.html',
    styleUrls: ['./analysisFile.component.css']
})

export class AnalysisFileComponent implements OnInit {
    source;
    @ViewChild('fileUpload') fileUploadEl: ElementRef;
    fName = '';
    contents: any[];
    name = '';
    myFiles: string [] = [];


    constructor() {}

    onFileChange(event) {

        for (let i = 0; i < event.target.files.length; i++) {
            this.myFiles.push(event.target.files[i]);
        }

    }
    onFileDelete(index) {
        this.myFiles.splice(index, 1);
    }

    public fileChanged(event?: Event): void {
        const files: FileList = this.fileUploadEl.nativeElement.files;
        console.log(`files: `, files);

        const file = files[0];
        if (file.name.endsWith('.xml')) {
            const reader = new FileReader();

            const loaded = (el) => {
                this.contents = [];
                const contents = el.target.result;
                console.log('onloaded', contents);
                this.contents = contents;
            };
            reader.onload = loaded;

            reader.readAsText(file, 'UTF-8');

            this.name = file.name;

        } else {
            this.contents = [];
            this.name = 'not xml file';
            console.log('file name :' + file.name);
        }
    }

    ngOnInit(): void {}

}
