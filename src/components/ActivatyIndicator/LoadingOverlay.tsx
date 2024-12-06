import ActivityIndicator from './ActivityIndicator';

export const LoadingOverlay = () => (
    <div className="flex items-center justify-center h-screen w-screen">
        <ActivityIndicator />
    </div>
);

export default LoadingOverlay;
