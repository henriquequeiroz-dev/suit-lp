'use client'

import Image from 'next/image'


import lookbook1Img from '../../../public/lookbook-1.png'
import lookbook2Img from '../../../public/lookbook-2.png'
import lookbook3Img from '../../../public/lookbook-3.png'
import lookbook4Img from '../../../public/lookbook-4.png'

import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'

import useEmblaCarousel from 'embla-carousel-react'


export function Lookbook() {

    const [emblaRef] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 4 }
        }
    })

    return (
        <section className="bg-gray-100 py-3">

            <div className="container mx-auto px-2 mb-2 text-blue-900">

                <div className="text-[10px] font-bold mb-2">
                    <p>ESTILO EM CADA OCASIÃO</p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-4xl font-bold">Lookbook</p>
                    </div>

                    <div className="flex gap-2 border-b py-1">
                        <p className="text-[10px] font-bold">VER TODA A COLEÇÃO</p>
                        <ArrowRightIcon />
                    </div>
                </div>
            </div>

            <div className="container px-2 mx-auto">
                
                <div ref={emblaRef} className="overflow-hidden">

                    <div className="flex gap-2">

                        <div className="relative h-100 overflow-hidden min-w-0 flex-[0_0_100%] min-[768px]:flex-[0_0_25%]">
                            <Image
                                src={lookbook1Img}
                                alt='Image lookbook1'
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                fill
                                priority
                            />
                            <p className="absolute text-white [-webkit-text-stroke:0.9px_black] text-[16px] font-black bottom-8 ml-3">TERNOS <br /> SOB MEDIDA</p>
                        </div>

                        <div className="relative h-100 overflow-hidden min-w-0 flex-[0_0_100%] min-[768px]:flex-[0_0_25%]">
                            <Image
                                src={lookbook2Img}
                                alt='Image lookbook2'
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                fill
                                priority
                            />
                            <p className="absolute text-white [-webkit-text-stroke:0.9px_black] text-[16px] font-black bottom-8 ml-3">SAPATOS <br /> DE ALTO PADRÃO</p>
                        </div>

                        <div className="relative h-100 overflow-hidden min-w-0 flex-[0_0_100%] min-[768px]:flex-[0_0_25%]">
                            <Image
                                src={lookbook3Img}
                                alt='Image lookbook3'
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                fill
                                priority
                            />
                            <p className="absolute text-white [-webkit-text-stroke:0.9px_black] text-[16px] font-black bottom-8 ml-3">ACESSÓRIOS <br /> QUE FAZEM A DIFERENÇA</p>
                        </div>

                        <div className="relative h-100 overflow-hidden min-w-0 flex-[0_0_100%] min-[768px]:flex-[0_0_25%]">
                            <Image
                                src={lookbook4Img}
                                alt='Image lookbook4'
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                fill
                                priority
                            />
                            <p className="absolute text-white [-webkit-text-stroke:0.9px_black] text-[16px] font-black bottom-8 ml-3">DETALHES <br /> QUE ELEVAM</p>
                        </div>

                    </div>

                </div>

                <div className="absolute flex ml-55 mt-1 border-b-3 text-blue-900 lg:hidden">
                    <p className="text-[11px] font-extrabold whitespace-nowrap">ROLE PARA A DIREITA</p>
                </div>

            </div>


        </section>
    )
}