import React from 'react'
import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
  EmblaEventType,
} from 'embla-carousel'


function setupEmblaButtons(embla: EmblaCarouselType): void {
  // Setup buttons code here
}

const emblaNodes: HTMLElement[] = Array.from(
  document.querySelectorAll('.embla'),
)

emblaNodes.forEach((emblaNode) => {
  const embla = EmblaCarousel(emblaNode)
  setupEmblaButtons(embla)
})