'use client'

import Image from 'next/image'
import testimoniesImg1 from '../../../public/testimonies-1.png'
import testimoniesImg2 from '../../../public/testimonies-2.png'
import testimoniesImg3 from '../../../public/testimonies-3.png'

import useEmblaCarousel from 'embla-carousel-react'

import { StarIcon } from '@phosphor-icons/react/dist/ssr'

export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    })

    return (

        <section className="bg-white py-3 mt-2">

            <div className="container mx-auto px-2 mb-3 text-blue-900">

                <div className="text-[10px] font-bold mb-2">
                    <p>HISTÓRIAS REAIS</p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-4xl font-bold">Depoimentos</p>
                    </div>
                </div>
            </div>

            <div className="container px-4 mx-auto">

                <div ref={emblaRef} className="overflow-hidden">

                    <div className="flex gap-2 relative">

                        <div className="flex relative overflow-hidden min-w-0 flex-[0_0_100%] min-[768px]:flex-[0_0_34%] gap-5 border border-gray-300 px-5 py-2 items-center justify-center">
                            <Image
                                src={testimoniesImg1}
                                alt='Image testimonies1'
                                className="object-cover rounded-full w-24 h-24"

                            />
                            <div className="">
                                <div className="flex gap-1 text-yellow-400 mb-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <StarIcon
                                            key={index}
                                            size={20}
                                            weight='fill'
                                        />
                                    ))}
                                </div>
                                <p className="mb-2">"Qualidade impecável e atendimento diferenciado. O terno ficou perfeito, superou minhas expectativas!"</p>
                                <p className="font-bold">Rafael Mendes</p>
                                <p className="mb-2 text-[12px] text-gray-500">Empresário</p>
                            </div>
                        </div>

                        <div className="flex relative overflow-hidden min-w-0 flex-[0_0_100%] min-[768px]:flex-[0_0_34%] gap-5 border border-gray-300 px-5 py-2 items-center justify-center">
                            <Image
                                src={testimoniesImg2}
                                alt='Image testimonies1'
                                className="object-cover rounded-full w-24 h-24"

                            />
                            <div className="">
                                <div className="flex gap-1 text-yellow-400 mb-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <StarIcon
                                            key={index}
                                            size={20}
                                            weight='fill'
                                        />
                                    ))}
                                </div>
                                <p className="mb-2">"Atendimento excepcional e um acabamento incrivel. Me senti ainda mais confiante no meu grande dia."</p>
                                <p className="font-bold">Lucas Ferreira</p>
                                <p className="mb-2 text-[12px] text-gray-500">Advogado</p>
                            </div>
                        </div>

                        <div className="flex relative overflow-hidden min-w-0 flex-[0_0_100%] min-[768px]:flex-[0_0_34%] gap-5 border border-gray-300 px-5 py-2 items-center justify-center">
                            <Image
                                src={testimoniesImg3}
                                alt='Image testimonies1'
                                className="object-cover rounded-full w-24 h-24"

                            />
                            <div className="">
                                <div className="flex gap-1 text-yellow-400 mb-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <StarIcon
                                            key={index}
                                            size={20}
                                            weight='fill'
                                        />
                                    ))}
                                </div>
                                <p className="mb-2">"Elegância, bom gosto e atenção aos detalhes. Hoje só uso ternos do Atelier Vittore"</p>
                                <p className="font-bold">Marcelo Ribeiro</p>
                                <p className="mb-2 text-[12px] text-gray-500">Médico</p>
                            </div>
                        </div>                        

                    </div>

                </div>
            </div>

            <div className="flex absolute ml-55 mt-1 border-b-2 text-blue-900 lg:hidden">
                    <p className="text-[11px] font-extrabold whitespace-nowrap">ROLE PARA A DIREITA</p>
                </div>

        </section>
    )
}