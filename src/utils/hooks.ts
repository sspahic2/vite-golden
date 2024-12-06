// src/hooks/useExtractImage.ts
import { useCallback } from 'react';

export const useExtractImage = () => {
    return useCallback((url: string) => {
        const parts = url.split('\\');
        return parts[parts.length - 1];
    }, []);
};
