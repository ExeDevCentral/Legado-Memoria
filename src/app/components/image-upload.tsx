import { useState, useCallback } from 'react';
import { Upload, X, FileImage } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageUploadProps {
  onImagesSelected: (files: File[]) => void;
}

export function ImageUpload({ onImagesSelected }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [previews, setPreviews] = useState<{ file: File; url: string }[]>([]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files).filter(file =>
      file.type.startsWith('image/')
    );
    if (files.length > 0) {
      const newPreviews = files.map(file => ({ file, url: URL.createObjectURL(file) }));
      setPreviews(prev => [...prev, ...newPreviews]);
      onImagesSelected(files);
    }
  }, [onImagesSelected]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length > 0) {
      const newPreviews = files.map(file => ({ file, url: URL.createObjectURL(file) }));
      setPreviews(prev => [...prev, ...newPreviews]);
      onImagesSelected(files);
    }
  }, [onImagesSelected]);

  const removeImage = useCallback((index: number) => {
    setPreviews(prev => {
      const newPreviews = [...prev];
      URL.revokeObjectURL(newPreviews[index].url);
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  }, []);

  return (
    <div className="w-full">
      <div
        className={`relative border-2 border-dashed rounded transition-all duration-300 ${
          dragActive
            ? 'border-[var(--vintage-gold)] bg-[var(--vintage-sepia)]/20 scale-[1.02]'
            : 'border-[var(--vintage-bronze)] bg-[var(--vintage-cream)]'
        } ${dragActive ? 'animate-pulse' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          id="file-upload"
        />
        <div className="p-12 flex flex-col items-center justify-center text-center">
          <motion.div
            animate={{ y: dragActive ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Upload className="w-16 h-16 mb-4 text-[var(--vintage-bronze)]" />
          </motion.div>
          <h3 className="mb-2 text-[var(--vintage-dark)]">
            Arrastra tus fotografías aquí
          </h3>
          <p className="text-[var(--vintage-metal)] mb-4">
            o haz clic para seleccionar archivos
          </p>
          <p className="text-sm text-[var(--vintage-metal)]">
            PNG, JPG, HEIC hasta 10MB cada una
          </p>
        </div>
      </div>

      {previews.length > 0 && (
        <div className="mt-8">
          <h4 className="mb-4 text-[var(--vintage-dark)]">
            Fotografías cargadas ({previews.length})
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {previews.map((preview, index) => (
                <motion.div
                  key={preview.url}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative group aspect-square bg-[var(--vintage-cream)] rounded overflow-hidden border border-[var(--vintage-bronze)] shadow-sm"
                >
                  <img
                    src={preview.url}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-[var(--vintage-dark)]/80 text-[var(--vintage-cream)] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[var(--vintage-dark)] cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--vintage-dark)]/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center text-[var(--vintage-cream)] text-xs">
                      <FileImage className="w-3 h-3 mr-1" />
                      {preview.file.name.substring(0, 15)}...
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
