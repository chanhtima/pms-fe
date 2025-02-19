import React, { useEffect, useRef } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Bold, Code, Strikethrough, Subscript, Superscript, 
    Underline, Essentials, Italic, Mention, Paragraph, 
    Undo, Font, Image, ImageUpload, AutoLink, Link, Heading, 
    HtmlEmbed, HorizontalLine, List, Autoformat, ListProperties, 
    Indent, IndentBlock, Alignment, ImageResizeEditing, ImageResizeHandles ,
    ImageCaption 
} from 'ckeditor5';
import { EditorProps } from '@/src/models/editors.model';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';


class MyUploadAdapter {
    loader: any;
    reader: FileReader;

    constructor(loader: any) {
        this.loader = loader;
        this.reader = new FileReader();
    }

    upload() {
        return this.loader.file
            .then((file: File) => new Promise((resolve, reject) => {
                this.reader.onload = () => {
                    resolve({ default: this.reader.result as string });
                };
                this.reader.onerror = (error) => {
                    reject(error);
                };
                this.reader.readAsDataURL(file);
            }));
    }

    abort() {
        this.reader.abort();
    }
}

function MyCustomUploadAdapterPlugin(editor: any) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
        return new MyUploadAdapter(loader);
    };
}




export default function EditorCk({
    data = [],
    setData
}: EditorProps) {
    const editorRef = useRef<any>(null);
    const handleChange = (e: any, editor: any) => {
        const data = editor.getData()
        console.log(data);
        setData(data)
    }
    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.editor.setData(data);
        }
    }, [data]);
    return (
        <CKEditor
            editor={ClassicEditor}
            data={data}
            config={{
                fontSize: {
                    options: [
                        10, 12, 14, 16, 18, 20, 24, 28, 36
                    ]
                },
                toolbar: {
                    items: ['undo', 'redo', '|', 
                        'bold', 'italic', 'underline', 'strikethrough', 'code', 'subscript', 'superscript', '|'
                        , 'fontSize', 'fontColor', 'fontBackgroundColor', '|',
                         'imageUpload','link', 'htmlEmbed', 'horizontalLine', 'bulletedList', 'numberedList','|',
                          'outdent', 'indent', 'alignment','resizeImage'],
                },

                plugins: [Font, Bold, Code, Strikethrough, Subscript, Superscript, Underline,
                     Essentials, Italic, Mention, Paragraph, Undo, Image, ImageUpload,
                    Link, AutoLink, Heading, HtmlEmbed, HorizontalLine, List, Autoformat,
                     ListProperties, Indent, IndentBlock,  ImageResizeEditing, ImageResizeHandles,
                    Alignment,ImageCaption 
                ],

                extraPlugins: [MyCustomUploadAdapterPlugin],
                table: {
                    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
                },
                image: {
                    toolbar: ['imageUpload'],
                    upload: {
                        types: ['png', 'jpg', 'jpeg', 'gif'],

                    },
                    resizeOptions: [
                        {
                            name: 'resizeImage:original',
                            value: null,
                            label: 'Original'
                        },
                        {
                            name: 'resizeImage:custom',
                            label: 'Custom',
                            value: 'custom'
                        },
                        {
                            name: 'resizeImage:40',
                            value: '40',
                            label: '40%'
                        },
                        {
                            name: 'resizeImage:60',
                            value: '60',
                            label: '60%'
                        }
                    ]
                    
                },
                
                list: {
                    properties: {

                        styles: true,
                        startIndex: true,
                        reversed: true
                    }
                }

            }}
            onChange={handleChange}


        />
    )
}