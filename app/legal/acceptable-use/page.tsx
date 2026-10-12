import AUContent from '@/components/acceptable-use/AUContent'
import AUCTA from '@/components/acceptable-use/AUCTA'
import AUHero from '@/components/acceptable-use/AUHero'
import AURelated from '@/components/acceptable-use/AURelated'
import AUSummary from '@/components/acceptable-use/AUSummary'
import React from 'react'

export default function page() {
  return (
    <main>
        <AUHero />
        <AUSummary />
        <AUContent />
        <AURelated />
        <AUCTA />
    </main>
  )
}
