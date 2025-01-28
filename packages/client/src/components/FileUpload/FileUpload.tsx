import React from 'react'
import { MdFileUpload } from 'react-icons/md'
import styles from './FileUpload.module.scss'

interface IFileUpload {
  onFileSelect: (file: File | null) => void
  accept?: string | string[]
  className?: string
  selectedFile?: File | null
}

const FileUpload: React.FC<IFileUpload> = ({
  onFileSelect,
  accept,
  className,
  selectedFile,
}) => {
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    if (file) {
      onFileSelect(file)
    }
    // setSelectedFile(null)
  }

  // если accept передан массивом, преобразуем в строку
  const acceptValue = Array.isArray(accept) ? accept.join(', ') : accept

  return (
    <div className={`${styles.uploadContainer} ${className}`}>
      <input
        type="file"
        id="file-upload"
        accept={acceptValue}
        className={styles.hiddenInput}
        onChange={handleFileSelect}
      />
      <label htmlFor="file-upload" className={styles.uploadIcon}>
        <MdFileUpload
          className={`${styles.fileUpload} ${
            selectedFile ? styles.fileSelected : ''
          }`}
        />
      </label>
    </div>
  )
}

export { FileUpload }
