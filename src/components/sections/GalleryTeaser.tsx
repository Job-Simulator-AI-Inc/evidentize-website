import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'
import Button from '@/components/ui/Button'

const TILES = [
  {
    kind: 'Photo',
    label: 'Inside a simulation',
    src: 'photo-1531482615713-2afd69097998',
    alt: 'Candidate focused at a laptop completing an assessment scenario',
  },
  {
    kind: 'Video',
    label: 'Platform walkthrough',
    src: 'photo-1460925895917-afdab827c52f',
    alt: 'Analytics dashboard displayed on a laptop screen',
  },
  {
    kind: 'Photo',
    label: 'Partner showcase',
    src: 'photo-1573497019940-1c28c88b4f3e',
    alt: 'Professional from a partner organisation',
  },
  {
    kind: 'Event',
    label: 'Learning & Development',
    src: 'photo-1540575467063-178a50c2df87',
    alt: 'Networking event with professionals in a conference setting',
  },
]

export default function GalleryTeaser() {
  return (
    <section className="gallery-teaser-section section-pad">
      <div className="wrap">
        <RevealWrapper>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <SectionHead
              eyebrow="Gallery"
              heading="See it in motion."
              lead="Photos, walkthroughs and moments from events — the platform and the people building on it."
            />
            <Button href="/gallery" variant="ghost" arrow>
              View all
            </Button>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={120}>
          <div className="gallery-grid">
            {TILES.map((tile, i) => (
              <Link
                key={tile.label}
                href="/gallery"
                className="gallery-tile"
                aria-label={`${tile.kind}: ${tile.label}`}
              >
                <Image
                  src={`https://images.unsplash.com/${tile.src}?auto=format&fit=crop&w=600&q=80`}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  priority={i < 2}
                />
                <div className="gallery-tile-inner">
                  <span className="gallery-tile-kind">{tile.kind}</span>
                  <span className="gallery-tile-label">{tile.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
