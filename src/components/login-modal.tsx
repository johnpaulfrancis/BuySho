export default function LoginModal(isOpen: boolean, onClose: () => void) {
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                {/* Modal box */}
                <div className="bg-white w-full max-w-md rounded shadow-lg p-6 relative">
                    {/* Close button */}
                    <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">✕</button>
                    <h2 className="text-xl font-semibold mb-4">Login</h2>
                    <form className="space-y-4">
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-fk-blue" />
                        <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-fk-blue" />
                        <button type="submit" className="w-full bg-fk-blue text-white py-2 rounded hover:bg-fk-blue-dark transition">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}