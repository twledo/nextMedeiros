export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/+5542991629051"
            target="_blank"
            className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center gap-2"
            aria-label="Chamar no WhatsApp"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-6 w-6"
            />
            <span className="hidden sm:inline">WhatsApp</span>
        </a>
    );
}
