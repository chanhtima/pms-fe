'use client'

import { FileViewerInfo, FileViewerProps } from "@/components/Upload/FileViewer";
import { useTranslations } from "next-intl";
import ArticleIcon from '@mui/icons-material/Article';
import { Box } from "@mui/material";
import { IconDeleteButton } from "@/components/buttons/IconDeleteButton";


export const UploadDocListItem = ({ onDelete, file, fileInfo, disabled }: FileViewerProps) => {
    const getUploadFile = () => {
        let uFile: FileViewerInfo | null = null;
        if (fileInfo) {
            uFile = { ...fileInfo };
        } else if (file) {
            uFile = {
                name: file.name,
                size: file.size,
                url: ''
            };
        }

        if (uFile) {
            const fileSize = uFile.size.toString();
            uFile.sizeText = (fileSize.length < 7)
                ? `${Math.round(+fileSize / 1024).toFixed(2)}kb`
                : `${(Math.round(+fileSize / 1024) / 1000).toFixed(2)}Mb`

        }
        return uFile;
    }

    const uploadFile = getUploadFile();

    return (
        uploadFile
            ? <div className="border-2 rounded-md hover:bg-slate-100 mb-2">
                <div className="flex flex-row p-2">
                    <div className="grow">
                        <div className="flex flex-row">
                            <div className="flex items-center">
                                <ArticleIcon />
                            </div>
                            <div className="grow pl-3">
                                <Box sx={{ color: 'primary.main' }}>
                                    <div className="text-base font-semibold">{uploadFile.name}</div>
                                </Box>
                                <div className="text-sm text-slate-500">
                                    {uploadFile.sizeText}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center flex">
                        {!disabled && <IconDeleteButton onClick={onDelete} />}
                    </div>
                </div>
            </div>
            : null
    )
}
