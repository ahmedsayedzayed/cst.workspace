import { HttpClient, HttpEvent, HttpEventType } from "@angular/common/http";
import { FileUpload } from "primeng/fileupload";

export function uploadHandler(pfiledUpload:FileUpload, http: HttpClient) {
    pfiledUpload.uploading = true;
    pfiledUpload.msgs = [];
    let formData = new FormData();

    pfiledUpload.onBeforeUpload.emit({
        formData: formData
    });

    for (let i = 0; i < pfiledUpload.files.length; i++) {
        formData.append(pfiledUpload.name!, pfiledUpload.files[i], pfiledUpload.files[i].name);
    }

    return http
        .request(<string>pfiledUpload.method, pfiledUpload.url as string, {
            body: formData,
            headers: pfiledUpload.headers,
            reportProgress: true,
            observe: 'events',
            withCredentials: pfiledUpload.withCredentials
        })
        .subscribe(
            (event: HttpEvent<any>) => {
                switch (event.type) {
                    case HttpEventType.Sent:
                        pfiledUpload.onSend.emit({
                            originalEvent: event,
                            formData: formData
                        });
                        break;
                    case HttpEventType.Response:
                        pfiledUpload.uploading = false;
                        pfiledUpload.progress = 0;

                        if (event['status'] >= 200 && event['status'] < 300) {
                            if (pfiledUpload.fileLimit) {
                                pfiledUpload.uploadedFileCount += pfiledUpload.files.length;
                            }

                            pfiledUpload.onUpload.emit({ originalEvent: event, files: pfiledUpload.files });
                        } else {
                            pfiledUpload.onError.emit({ files: pfiledUpload.files });
                        }

                        pfiledUpload.clear();
                        break;
                    case HttpEventType.UploadProgress: {
                        if (event['loaded']) {
                            pfiledUpload.progress = Math.round((event['loaded'] * 100) / event['total']!);
                        }

                        pfiledUpload.onProgress.emit({ originalEvent: event, progress: pfiledUpload.progress });
                        break;
                    }
                }

                pfiledUpload.cd.markForCheck();
            },
            (error: ErrorEvent) => {
                pfiledUpload.uploading = false;
                pfiledUpload.onError.emit({ files: pfiledUpload.files, error: error });
            }
        );
}