import { WhatsappLogoIcon, ArrowRightIcon, ArrowDownIcon } from '@phosphor-icons/react/dist/ssr'
import manSuitImg from '../../../public/hero.png'
import Image from 'next/image'

export function Hero() {
    return (
        <div>
            <section
                className="bg-[linear-gradient(to_right,#020F43_20%,#0340E9_50%,#4443B8_100%)]
                text-white relative overflow-hidden"
            >
                <div>
                    <Image
                        src={manSuitImg}
                        alt='Image man suit'
                        fill
                        sizes='100vw'
                        priority
                        className="object-cover opacity-50 lg:hidden min-h-px"
                    />
                </div>

                <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
                    <article className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                        <div className="space-y-6">

                            <div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">Ternos sob medida <br /> que contam sua história</h1>
                                <p className="lg:text-lg mt-4">Alfaiataria contemporânea para homens que valorizam <br />
                                    presença, estilo e precisão no detelhes.
                                </p>
                            </div>

                            <div className="mt-8 flex gap-2">
                                <a
                                    href="#"
                                    className="bg-white text-blue-900 text-[11px] px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2"
                                >
                                    Ver Coleção
                                    <ArrowRightIcon />
                                </a>
                                <a
                                    href="#"
                                    className="bg-transparent text-white text-[11px] border-2 border-white px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2"
                                >
                                    <WhatsappLogoIcon className="w-5 h-5" />
                                    WhatsApp
                                </a>
                            </div>

                            <div className="mt-20 flex gap-4">
                                <ArrowDownIcon className="w-6 h-6 mt-[-7]" />
                                <p className="text-white text-[10px] mb-4">ROLE PARA EXPLORAR</p>
                            </div>

                        </div>

                        <div className="mt-[-80] hidden lg:block min-h-130 relative">
                            <Image
                                src={manSuitImg}
                                alt='Image Suit'
                                className="object-contain"
                                fill
                                sizes='(max-width: 768px) 0vw, 50vw'
                            />
                        </div>

                    </article>

                </div>
            </section>
        </div>
    )
}