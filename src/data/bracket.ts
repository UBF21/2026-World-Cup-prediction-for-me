export type MatchStatus = 'pending' | 'correct' | 'wrong'

export interface BracketMatch {
  home: string
  away: string
  homeScore: number
  awayScore: number
  winnerIdx: 0 | 1
  note?: string
  status?: MatchStatus
}

export interface BracketHalf {
  r32: BracketMatch[]
  r16: BracketMatch[]
  qf:  BracketMatch[]
  sf:  BracketMatch[]
}

function m(home: string, away: string, hs: number, as_: number, win: 0|1, note?: string): BracketMatch {
  return { home, away, homeScore: hs, awayScore: as_, winnerIdx: win, note }
}

export const TOP: BracketHalf = {
  r32: [
    m('España',         'Argelia',        2, 1, 0),
    m('Colombia',       'Croacia',        2, 1, 0, 'Prórroga'),
    m('Inglaterra',     'RD Congo',       2, 0, 0),
    m('México',         'Ecuador',        1, 1, 0, 'Penales'),
    m('Bélgica',        'Austria',        3, 0, 0),
    m('Estados Unidos', 'Noruega',        2, 1, 0),
    m('Brasil',         'Japón',          2, 1, 0),
    m('Senegal',        'Costa de Marfil',1, 0, 0),
  ],
  r16: [
    m('España',     'Colombia',       2, 1, 0),
    m('Inglaterra', 'México',         2, 1, 0),
    m('Bélgica',    'Estados Unidos', 3, 1, 0),
    m('Brasil',     'Senegal',        2, 1, 0),
  ],
  qf: [
    m('España',     'Bélgica', 2, 1, 0),
    m('Inglaterra', 'Brasil',  1, 0, 0),
  ],
  sf: [
    m('España', 'Inglaterra', 2, 1, 0),
  ],
}

export const BOT: BracketHalf = {
  r32: [
    m('Francia',        'Suecia',         3, 1, 0),
    m('Alemania',       'Paraguay',       2, 1, 0),
    m('Países Bajos',   'Marruecos',      1, 0, 0),
    m('Suiza',          'Irán',           2, 0, 0),
    m('Argentina',      'Uruguay',        2, 1, 0),
    m('Turquía',        'Egipto',         2, 2, 0, 'Penales'),
    m('Portugal',       'Ghana',          2, 1, 0),
    m('Corea del Sur',  'Canadá',         1, 1, 0, 'Penales'),
  ],
  r16: [
    m('Francia',      'Alemania',       2, 1, 0),
    m('Países Bajos', 'Suiza',          2, 0, 0),
    m('Argentina',    'Turquía',        2, 1, 0),
    m('Portugal',     'Corea del Sur',  2, 0, 0),
  ],
  qf: [
    m('Francia',    'Países Bajos', 2, 1, 0),
    m('Argentina',  'Portugal',     2, 1, 0, 'Prórroga'),
  ],
  sf: [
    m('Francia', 'Argentina', 2, 1, 0),
  ],
}

export const finalMatch: BracketMatch = m('España', 'Francia', 2, 1, 0)
export const thirdMatch: BracketMatch = m('Argentina', 'Inglaterra', 2, 1, 0)

export interface RoundStat { label: string; total: number; correct: number; wrong: number }
export interface TrackerStats {
  total: number; correct: number; wrong: number; pending: number; accuracy: number
  rounds: RoundStat[]
}

// Camino de España en el bracket
export const espanaPath = [
  { round: 'Dieciseisavos', match: TOP.r32[0] },
  { round: 'Octavos',       match: TOP.r16[0] },
  { round: 'Cuartos',       match: TOP.qf[0]  },
  { round: 'Semifinal',     match: TOP.sf[0]  },
  { round: 'Final',         match: finalMatch  },
]

export function computeTrackerStats(): TrackerStats {
  const defs = [
    { label: 'Dieciseisavos', matches: [...TOP.r32, ...BOT.r32] },
    { label: 'Octavos',       matches: [...TOP.r16, ...BOT.r16] },
    { label: 'Cuartos',       matches: [...TOP.qf,  ...BOT.qf]  },
    { label: 'Semifinal',     matches: [...TOP.sf,  ...BOT.sf]  },
    { label: 'Final + 3º',    matches: [finalMatch, thirdMatch]  },
  ]
  const rounds: RoundStat[] = defs.map(d => ({
    label:   d.label,
    total:   d.matches.length,
    correct: d.matches.filter(m => m.status === 'correct').length,
    wrong:   d.matches.filter(m => m.status === 'wrong').length,
  }))
  const total   = rounds.reduce((s, r) => s + r.total, 0)
  const correct = rounds.reduce((s, r) => s + r.correct, 0)
  const wrong   = rounds.reduce((s, r) => s + r.wrong, 0)
  const played  = correct + wrong
  return { total, correct, wrong, pending: total - played, accuracy: played ? Math.round(correct / played * 100) : 0, rounds }
}
