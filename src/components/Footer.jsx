export default function Footer() {
    return (
        <footer className="py-12 text-center px-4 bg-sky-primary border-t border-sky-secondary/30">
            <p className="font-light text-lg">
            SkyFit Pedreiras &#8208;<span className="font-bold"> O seu novo nível de treino começa aqui.</span>
            </p>
            <p className="mt-4 text-gray-400">
            Endereço da Unidade: <a href="https://goo.gl/maps/SEU_LINK_DO_MAPA_AQUI" target="_blank" rel="noopener noreferrer">Avenida Rio Branco, 841 - Centro</a>
            </p>
            <p className="mt-2 text-gray-400">
            Instagram: <a href="https://www.instagram.com/skyfitpedreiras" target="_blank" rel="noopener noreferrer">@skyfitpedreiras</a>
            </p>
            <p className="mt-2 text-gray-400">
            WhatsApp suporte: <a href="https://wa.me/5599984309339" target="_blank" rel="noopener noreferrer">(99) 98430-9339</a>
            </p>
            <p className="mt-5 text-gray-400 pt-5 font-light text-sm">&copy; {new Date().getFullYear()} SkyFit Unidade Pedreiras-MA. Todos os direitos reservados.</p>
        </footer>
    );
}