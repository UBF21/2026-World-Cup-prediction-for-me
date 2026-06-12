export interface OptaEntry {
  team: string
  probability: number
  isChampion?: boolean
}

export interface ValuationEntry {
  team: string
  value: string
}

export const champion = {
  team: 'España',
  probability: 16.1,
  final: {
    home: 'España',
    away: 'Francia',
    homeScore: 2,
    awayScore: 1,
    venue: 'MetLife Stadium',
    date: '19 jul',
  },
}

export const optaRanking: OptaEntry[] = [
  { team: 'España',       probability: 16.1, isChampion: true },
  { team: 'Francia',      probability: 13.0 },
  { team: 'Inglaterra',   probability: 11.2 },
  { team: 'Argentina',    probability: 10.4 },
  { team: 'Portugal',     probability: 7.0  },
  { team: 'Brasil',       probability: 6.6  },
  { team: 'Alemania',     probability: 5.1  },
  { team: 'Países Bajos', probability: 3.6  },
  { team: 'Noruega',      probability: 3.5  },
  { team: 'Bélgica',      probability: 2.4  },
]

export const transfermarktTop: ValuationEntry[] = [
  { team: 'Francia',      value: '€1.530M' },
  { team: 'Inglaterra',   value: '€1.310M' },
  { team: 'España',       value: '€1.260M' },
  { team: 'Portugal',     value: '€1.020M' },
  { team: 'Alemania',     value: '€998M'   },
  { team: 'Brasil',       value: '€912M'   },
]

export const fifaRanking: string[] = [
  'Argentina', 'España', 'Francia', 'Inglaterra',
  'Portugal', 'Brasil', 'Marruecos', 'Países Bajos',
  'Bélgica', 'Alemania',
]
