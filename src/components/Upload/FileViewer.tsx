import { Box, IconButton } from "@mui/material";
import { useMemo, useState } from "react";
import { IconDeleteButton } from "../buttons/IconDeleteButton";
import Image from "next/image";
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
export interface FileInfo {
    sizeText?: string
}

export interface FileViewerInfo extends FileInfo {
    name: string
    size: number
    isPdf?: boolean
    url: string
    localUrl?: string
}

export interface FileViewerProps {
    disabled?: boolean,
    file?: File
    fileInfo?: FileViewerInfo
    onDelete?: () => void
}

export const FileViewer = ({ onDelete, file, fileInfo, disabled }: FileViewerProps) => {
    const [isLoad, setIsLoad] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const OpenModal = () => {
        setOpenModal(true);
    };

    const CloseModal = () => {
        setOpenModal(false);
    };
    const getLocalPdfUrl = async (file: FileViewerInfo) => {
        const response = await fetch(file.url);
        const resp = await response.arrayBuffer();
        const blob = new Blob([resp], { type: 'application/pdf' });
        const localUrl = URL.createObjectURL(blob);
        file.localUrl = localUrl;
        setPdfUrl(localUrl);
        setIsLoad(false);
    };

    const uploadFile = useMemo<FileViewerInfo | null>(() => {
        let uFile: FileViewerInfo | null = null;
        if (fileInfo) {
            uFile = { ...fileInfo };
            if (uFile.isPdf && !uFile.localUrl) {
                setIsLoad(true);
                getLocalPdfUrl(uFile);
            }
        } else if (file) {
            uFile = {
                name: file.name,
                size: file.size,
                url: URL.createObjectURL(file)
            };

            const fileExt = uFile.name.split('.').pop();
            uFile.isPdf = fileExt === "pdf";
        }

        if (uFile) {
            const fileSize = uFile.size.toString();
            uFile.sizeText = (fileSize.length < 7)
                ? `${Math.round(+fileSize / 1024).toFixed(2)}kb`
                : `${(Math.round(+fileSize / 1024) / 1000).toFixed(2)}Mb`

        }
        return uFile;
    }, [file, fileInfo]);

    const onHandleClick = () => {
        if (disabled) {
            OpenModal();
        }
    }
    const Content = () => {
        if (!uploadFile) {
            return null;
        }
        const onHandleDelete = () => onDelete?.();
        const fileContent = uploadFile.isPdf
            ? (
                !isLoad &&
                <embed
                    src={`${pdfUrl || uploadFile.url}#toolbar=0&navpanes=0&scrollbar=0`}
                    type="application/pdf"
                    width={"100%"}
                    height={"100%"}
                ></embed>
            )
            : (
                <img
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                    src={uploadFile.url}
                />
            );

        return (
            <>
                {!disabled && (
                    <div className="absolute right-0 p-1">
                        <IconDeleteButton onClick={onHandleDelete} />
                    </div>
                )}
                <div className="absolute bottom-0 p-1">
                    <Box sx={{ color: 'primary.main' }}>
                        <div className="px-2 text-lg">{uploadFile.name}</div>
                    </Box>
                    <div className="text-slate-500 px-2 text-xs pb-1">{uploadFile.sizeText}</div>
                </div>
                {fileContent}
            </>
        );
    };

    return (
        <>
            <div className="relative w-full p-1 h-96" onClick={onHandleClick}>
                {Content()}
            </div>

            <Modal
                open={openModal}
                onClose={CloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <div className="modal-style">
                        <IconButton
                            aria-label="close"
                            onClick={CloseModal}
                            sx={{
                                position: 'absolute',
                                fontSize: '30px',
                                top: 8,
                                right: 8,
                                color: 'black',
                                backgroundColor: 'white',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        {uploadFile && (
                            <img
                                width={700}
                                height={100}
                                alt={uploadFile.name}
                                className="object-contain p-1"
                                src={uploadFile.url}
                            />
                        )}
                    </div>
                </>
            </Modal >
        </>

    );
};