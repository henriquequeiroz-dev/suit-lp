import { WhatsappLogoIcon, ArrowRightIcon, FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr'
import ctaImg1 from '../../../public/hero.png'
import logoFooter from '../../../public/logo.png'
import Image from 'next/image'

export function Footer() {
    return (
        <section>
            <div className="bg-[linear-gradient(to_right,#020F43_20%,#0340E9_50%,#4443B8_100%)]
                text-white relative overflow-hidden">

                <div className="container mx-auto relative mb-3 mt-6 md:pb-0">

                    <article className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        <div className="text-center lg:text-left">
                            <p className="text-[10px] font-bold mb-2">SEU PRÓXIMO CAPÍTULO COMEÇA AQUI</p>
                            <p className="mb-2 text-2xl">Agende seu atendimento e descubra a elegância sob medida.</p>
                            <p className="text-[12px] font-bold mb-2">Nosso time está pronto para te ajudar a encontrar o terno ideal.</p>
                        </div>

                        <div className="flex mt-15 mb-15 gap-2 justify-center lg:justify-start">
                            <a
                                href="#"
                                className="bg-white text-blue-900 text-[15px] px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2"
                            >
                                <WhatsappLogoIcon className="w-5 h-5" />
                                WhatsApp
                            </a>

                            <a
                                href="#"
                                className="bg-transparent text-white text-[15px] border-2 border-white px-5 rounded-md font-semibold flex items-center justify-center gap-2"
                            >
                                Ver Coleção
                                <ArrowRightIcon />
                            </a>
                        </div>

                        <div className="h-20 mt-[-200]">
                            <Image
                                src={ctaImg1}
                                alt='Image cta1'
                                className="object-contain hidden lg:block"
                            />
                        </div>

                    </article>

                </div>

            </div>

            <div className="container mx-auto relative mb-3 mt-3 md:pb-0 text-blue-900">
                <article className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-60">

                  <div className="flex overflow-hidden items-center justify-center">
                    <Image 
                        src={logoFooter}
                        alt='Image logo'
                        width={200}
                    />
                </div>

                <nav className="flex flex-col sm:flex-row text-[15px] font-bold items-center justify-center gap-5 whitespace-nowrap">
                    <a href="#">Início</a>
                    <a href="#">Sobre</a>
                    <a href="#">Lookbook</a>
                    <a href="#">Depoimentos</a>
                    <a href="#">Como Funciona</a>
                    <a href="#">Contato</a>
                </nav>

                <div className="flex items-center justify-center gap-3">
                    <a href="#"><InstagramLogoIcon weight='bold' className="w-8 h-8"/></a>
                    <a href="#"><FacebookLogoIcon weight='bold' className="w-8 h-8"/></a>
                    <a href="#"><WhatsappLogoIcon weight='bold' className="w-8 h-8"/></a>
                    <a href="#"><YoutubeLogoIcon weight='bold' className="w-8 h-8"/></a>
                </div>

                </article>

                <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
                    <p className="text-[10px] font-bold">© 2026. Todos dos direitos reservados</p>
                    <p className="text-[10px] font-bold">HOMENS EXTRAORDINÁRIOS VESTEM GRANDES HISTÓRIAS</p>
                </div>
            </div>

        </section>


    )
}