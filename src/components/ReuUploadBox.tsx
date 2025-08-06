import React, { useEffect, useRef, useState, DragEvent } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { FileUpload, RemoveCircle } from "@mui/icons-material";
import LazyImage from "./LazyImage";

type ReuUploadBoxProps = {
  name?: string;
  multiple?: boolean;
  value?: File[]; // External value passed down from Formik
  onChange?: (files: File[]) => void;
};

const ReuUploadBox: React.FC<ReuUploadBoxProps> = ({
  name = "upload",
  multiple = false,
  value = [],
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>(value);

  // Sync internal state with Formik's `value` prop (important for resets)
  useEffect(() => {
    setFiles(value);
  }, [value]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files ? Array.from(e.target.files) : [];
    let updatedFiles: File[];

    if (multiple) {
      updatedFiles = [...files, ...selected];
    } else {
      updatedFiles = selected.slice(0, 1);
    }

    setFiles(updatedFiles);
    onChange?.(updatedFiles); // Notify Formik of the change
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    let updatedFiles: File[];

    if (multiple) {
      updatedFiles = [...files, ...droppedFiles];
    } else {
      updatedFiles = droppedFiles.slice(0, 1);
    }

    setFiles(updatedFiles);
    onChange?.(updatedFiles); // Notify Formik of the change
  };

  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onChange?.(updated); // Notify Formik of the change
  };

  const preventDefaults = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={preventDefaults}
        onDragEnter={preventDefaults}
        onDragLeave={preventDefaults}
        sx={{
          width: "100%",
          border: "2px dashed #ccc",
          borderRadius: 2,
          padding: 3,
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <Typography variant="body2" gutterBottom>
          Drag and drop here
        </Typography>
        <Typography variant="body2">or</Typography>
        <Button variant="text" startIcon={<FileUpload />} sx={{ mt: 1 }}>
          Choose file
        </Button>

        <input
          type="file"
          hidden
          ref={inputRef}
          name={name}
          onChange={handleFileSelect}
          multiple={multiple}
        />
      </Box>

      {/* File preview */}
      {files.length > 0 && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 3 }}>
          {files.map((file, index) => {
            const isImage = file.type.startsWith("image/");
            const previewURL = URL.createObjectURL(file);
            return (
              <Box
                key={index}
                sx={{
                  width: 100,
                  height: 100,
                  border: "1px solid #ccc",
                  borderRadius: 2,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index); // Remove file from preview list
                  }}
                  sx={{
                    position: "absolute",
                    top: -5,
                    right: -5,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    zIndex: 2,
                  }}
                >
                  <RemoveCircle fontSize="small" color="error" />
                </IconButton>

                {isImage ? (
                  <LazyImage
                    src={previewURL}
                    alt={file.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  // <img
                  //   src={previewURL}
                  //   alt={file.name}
                  //   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  // />
                  <Typography
                    variant="caption"
                    sx={{
                      padding: 1,
                      textAlign: "center",
                      fontSize: "11px",
                      wordBreak: "break-all",
                    }}
                  >
                    {file.name}
                  </Typography>
                )}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default ReuUploadBox;
