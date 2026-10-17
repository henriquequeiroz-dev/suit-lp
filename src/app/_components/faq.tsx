'use client'

import Image from 'next/image'
import faqImg1 from '../../../public/faq.png'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronsUpDown } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

export function Faq() {

    const [isOpen, setIsOpen] = React.useState(false)

    return (

        <section className="py-8">

            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="relative">
                        <div className="relative w-full h-100 overflow-hidden">
                            <Image
                                src={faqImg1}
                                alt='Image faq1'
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>
                        <span className="absolute left-8 lg:left-15 bottom-70">
                            <p className="text-white font-semibold items-center justify-center">"DETALHES <br /> TRANSFORMA <br /> PRESENÇA"</p>
                        </span>                        
                    </div>

                    <div className="text-blue-900">

                        <div className="flex items-center justify-between mb-2">
                            <p className="text-[10px] font-bold">TIRE SUAS DUVIDAS</p>
                            <p className="text-[10px] font-bold">DO SEU JEITO. NO SEU TEMPO</p>
                        </div>

                        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex  flex-col gap-2">
                            <div className="flex items-center justify-between gap-4 px-4">
                                <h1 className="font-bold text-[18px] lg:text-4xl">Como Funciona</h1>
                                <CollapsibleTrigger
                                    render={<Button variant='ghost' size='icon-lg' className="size-8">
                                        <ChevronsUpDown
                                            className='border rounded'
                                        />
                                        <span className="sr-only">Alternar duvidas</span>
                                    </Button>}
                                />
                            </div>
                            <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
                                <span className="text-muted-foreground">Dúvidas Frequentes</span>

                            </div>
                            <CollapsibleContent className="flex flex-col gap-2">
                                <div className="rounded-md border px-4 py-2 text-sm">
                                    <p className="font-bold mb-1">Como é feita a medição?</p>
                                    <p className="text-muted-foreground">A medição pode ser feita em nosso atelier, com um de nossos consultores, ou de forma online, com orientação detalhada. Garantimos um processo precisso e confortável.</p>
                                </div>
                                <div className="rounded-md border px-4 py-2 text-sm">
                                    <p className="font-bold mb-1">Qual o prazo de entrega?</p>
                                    <p className="text-muted-foreground">O prazo médio de entrega é de 15 a 30 dias, dependendo do modelo, tecido escolhido e necessidade de ajustes. Durante o processo, você acompanha cada etapa do atendimento.</p>
                                </div>
                                <div className="rounded-md border px-4 py-2 text-sm">
                                    <p className="font-bold mb-1">Vocês trabalham com ajustes?</p>
                                    <p className="text-muted-foreground">Sim. Realizamos ajustes para garantir um caimento preciso e confortável.</p>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>

                    </div>

                </div>

            </div>
        </section>
    )
}