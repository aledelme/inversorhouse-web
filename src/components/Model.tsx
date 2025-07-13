export function Modal({ children, onClose }: { children: React.ReactNode, onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 min-w-sm max-w-2/3 relative">
                <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>✕</button>
                {children}
            </div>
        </div>
    );
}