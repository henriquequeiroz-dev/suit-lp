import Image from 'next/image';
import aboutImg from '../../../public/about.png'
import { UsersThreeIcon, ShirtFoldedIcon } from '@phosphor-icons/react/dist/ssr'

export function About() {
    return (
        <section className="bg-white py-8">

            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative items-center justify-center">

                    <div className="space-y-3 text-blue-900">

                        <p className="text-[10px]">TRADIÇÃO EM CADA DETALHE</p>

                        <p className="text-4xl font-bold">Sobre a Marca</p>

                        <p>
                            O Atelier Vittore nasce da união entre a tradição da alfaiataria
                            e um olhar contemporáneo sobre o estilo masculino. Há 15 anos
                            criamos temos sob medida para homens que valorizam presença,
                            qualidade e autenticidade. <br /> <br />

                            Mais que roupas, entregamos <span className="font-bold">confiança, elegância e histórias</span> que vestem bem em qualquer ocasião.
                        </p>

                        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center relative">
                            <div className="flex items-center justify-center border-2 px-5 py-2 gap-2">
                                <ShirtFoldedIcon size={50} />
                                <p><span className="font-bold text-xl">15 anos</span> de experiência</p>
                            </div>

                            <div className="flex items-center justify-center border-2 px-5 py-2 gap-2">
                                <UsersThreeIcon size={50} />
                                <p><span className="font-bold text-xl">500+</span> clientes satisfeitos</p>
                            </div>

                        </div>
                    </div>

                    <div className="relative">

                        <div className="relative w-full h-100 overflow-hidden">
                            <Image
                                src={aboutImg}
                                alt='Image alfataria'
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <span className="absolute right-4 lg:right-15 bottom-20">
                            <p className="text-white font-semibold items-center justify-center">"ELEGÂNCIA <br /> É UMA FORMA <br /> DE RESPEITO"</p>
                        </span>

                    </div>

                </div>
            </div>
        </section>
    )
}