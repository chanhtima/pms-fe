export interface UploadFileProps {
  files?: File[];
  setFiles: (files: File[]) => void;
  multiple?: boolean;
  maxSize?: number;
}
