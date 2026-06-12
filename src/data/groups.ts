export interface GroupTableRow {
  team: string
  played: number
  won: number
  drawn: number
  lost: number
  gf: number
  gc: number
  points: number
}

export interface GroupMatch {
  home: string
  away: string
  homeScore: number
  awayScore: number
  played?: boolean
}

export interface Group {
  id: string
  tag: string
  table: GroupTableRow[]
  matches: GroupMatch[]
}

function row(team: string, pj: number, g: number, e: number, p: number, gf: number, gc: number, pts: number): GroupTableRow {
  return { team, played: pj, won: g, drawn: e, lost: p, gf, gc, points: pts }
}

function match(home: string, away: string, hs: number, as_: number, played?: boolean): GroupMatch {
  return { home, away, homeScore: hs, awayScore: as_, played }
}

export const groups: Group[] = [
  {
    id: 'A', tag: 'Anfitrión: México',
    table: [
      row('México',        3,3,0,0,6,2,9),
      row('Corea del Sur', 3,1,1,1,4,4,4),
      row('Chequia',       3,0,2,1,3,4,2),
      row('Sudáfrica',     3,0,1,2,2,5,1),
    ],
    matches: [
      match('México',       'Sudáfrica',     2,0,true),
      match('Corea del Sur','Chequia',        1,1),
      match('México',       'Corea del Sur', 2,1),
      match('Chequia',      'Sudáfrica',     1,1),
      match('Chequia',      'México',        1,2),
      match('Corea del Sur','Sudáfrica',     2,1),
    ],
  },
  {
    id: 'B', tag: 'Anfitrión: Canadá',
    table: [
      row('Suiza',  3,2,1,0,4,1,7),
      row('Canadá', 3,1,2,0,4,2,5),
      row('Bosnia', 3,1,1,1,3,2,4),
      row('Catar',  3,0,0,3,0,6,0),
    ],
    matches: [
      match('Canadá','Bosnia',2,0),
      match('Catar', 'Suiza', 0,2),
      match('Suiza', 'Bosnia',1,0),
      match('Canadá','Catar', 2,0),
      match('Suiza', 'Canadá',1,1),
      match('Bosnia','Catar', 2,0),
    ],
  },
  {
    id: 'C', tag: 'Brasil manda',
    table: [
      row('Brasil',   3,3,0,0,7,3,9),
      row('Marruecos',3,2,0,1,5,2,6),
      row('Escocia',  3,1,0,2,3,5,3),
      row('Haití',    3,0,0,3,2,7,0),
    ],
    matches: [
      match('Brasil',   'Marruecos',2,1),
      match('Escocia',  'Haití',    2,1),
      match('Marruecos','Escocia',  2,0),
      match('Brasil',   'Haití',    3,1),
      match('Brasil',   'Escocia',  2,1),
      match('Marruecos','Haití',    2,0),
    ],
  },
  {
    id: 'D', tag: 'Anfitrión: EE.UU.',
    table: [
      row('Estados Unidos',3,3,0,0,6,3,9),
      row('Turquía',       3,1,1,1,4,4,4),
      row('Paraguay',      3,0,2,1,3,4,2),
      row('Australia',     3,0,1,2,3,5,1),
    ],
    matches: [
      match('Estados Unidos','Paraguay',2,1),
      match('Australia',     'Turquía', 1,2),
      match('Estados Unidos','Australia',2,1),
      match('Turquía',       'Paraguay',1,1),
      match('Turquía',       'Estados Unidos',1,2),
      match('Paraguay',      'Australia',1,1),
    ],
  },
  {
    id: 'E', tag: 'Alemania favorita',
    table: [
      row('Alemania',         3,2,1,0,6,2,7),
      row('Ecuador',          3,1,2,0,3,2,5),
      row('Costa de Marfil',  3,1,1,1,4,3,4),
      row('Curazao',          3,0,0,3,0,6,0),
    ],
    matches: [
      match('Alemania',        'Curazao',         3,0),
      match('Costa de Marfil', 'Ecuador',         1,1),
      match('Alemania',        'Costa de Marfil', 2,1),
      match('Ecuador',         'Curazao',         1,0),
      match('Ecuador',         'Alemania',        1,1),
      match('Costa de Marfil', 'Curazao',         2,0),
    ],
  },
  {
    id: 'F', tag: 'Grupo parejo',
    table: [
      row('Países Bajos',3,3,0,0,7,1,9),
      row('Japón',       3,1,1,1,3,3,4),
      row('Suecia',      3,1,1,1,3,4,4),
      row('Túnez',       3,0,0,3,1,6,0),
    ],
    matches: [
      match('Países Bajos','Japón',  2,1),
      match('Suecia',      'Túnez',  2,1),
      match('Países Bajos','Suecia', 2,0),
      match('Japón',       'Túnez',  1,0),
      match('Túnez',       'Países Bajos',0,3),
      match('Japón',       'Suecia', 1,1),
    ],
  },
  {
    id: 'G', tag: 'Bélgica + Salah',
    table: [
      row('Bélgica',       3,3,0,0,9,2,9),
      row('Egipto',        3,1,1,1,5,5,4),
      row('Irán',          3,1,1,1,4,4,4),
      row('Nueva Zelanda', 3,0,0,3,1,8,0),
    ],
    matches: [
      match('Bélgica', 'Egipto',        3,1),
      match('Irán',    'Nueva Zelanda', 2,0),
      match('Bélgica', 'Irán',          2,0),
      match('Egipto',  'Nueva Zelanda', 2,0),
      match('Egipto',  'Irán',          2,2),
      match('Bélgica', 'Nueva Zelanda', 4,1),
    ],
  },
  {
    id: 'H', tag: 'España manda',
    table: [
      row('España',        3,3,0,0,8,1,9),
      row('Uruguay',       3,2,0,1,5,2,6),
      row('Cabo Verde',    3,0,1,2,1,6,1),
      row('Arabia Saudita',3,0,1,2,1,6,1),
    ],
    matches: [
      match('España',        'Cabo Verde',    3,0),
      match('Arabia Saudita','Uruguay',       0,2),
      match('España',        'Uruguay',       2,1),
      match('Arabia Saudita','Cabo Verde',    1,1),
      match('España',        'Arabia Saudita',3,0),
      match('Uruguay',       'Cabo Verde',    2,0),
    ],
  },
  {
    id: 'I', tag: 'Grupo de la muerte',
    table: [
      row('Francia', 3,3,0,0,7,2,9),
      row('Noruega', 3,1,1,1,4,4,4),
      row('Senegal', 3,1,1,1,3,3,4),
      row('Irak',    3,0,0,3,0,6,0),
    ],
    matches: [
      match('Francia','Senegal',2,1),
      match('Irak',   'Noruega',0,2),
      match('Francia','Noruega',2,1),
      match('Senegal','Irak',   1,0),
      match('Noruega','Senegal',1,1),
      match('Irak',   'Francia',0,3),
    ],
  },
  {
    id: 'J', tag: 'Argentina campeona',
    table: [
      row('Argentina',3,3,0,0,6,0,9),
      row('Austria',  3,1,1,1,3,4,4),
      row('Argelia',  3,1,1,1,3,4,4),
      row('Jordania', 3,0,0,3,2,6,0),
    ],
    matches: [
      match('Argentina','Argelia', 2,0),
      match('Austria',  'Jordania',2,1),
      match('Argentina','Austria', 2,0),
      match('Argelia',  'Jordania',2,1),
      match('Jordania', 'Argentina',0,2),
      match('Austria',  'Argelia', 1,1),
    ],
  },
  {
    id: 'K', tag: 'Duelo Colombia-Portugal',
    table: [
      row('Colombia',  3,2,1,0,5,2,7),
      row('Portugal',  3,2,1,0,5,2,7),
      row('RD Congo',  3,1,0,2,2,4,3),
      row('Uzbekistán',3,0,0,3,2,5,0),
    ],
    matches: [
      match('Portugal',  'RD Congo',  2,0),
      match('Uzbekistán','Colombia',  1,2),
      match('Portugal',  'Uzbekistán',2,1),
      match('Colombia',  'RD Congo',  2,0),
      match('Uzbekistán','RD Congo',  0,2),
      match('Colombia',  'Portugal',  1,1),
    ],
  },
  {
    id: 'L', tag: 'Inglaterra manda',
    table: [
      row('Inglaterra',3,3,0,0,7,0,9),
      row('Croacia',   3,1,1,1,3,4,4),
      row('Ghana',     3,1,1,1,2,4,4),
      row('Panamá',    3,0,0,3,1,5,0),
    ],
    matches: [
      match('Inglaterra','Croacia',2,0),
      match('Ghana',     'Panamá', 1,0),
      match('Inglaterra','Ghana',  3,0),
      match('Croacia',   'Panamá', 2,1),
      match('Panamá',    'Inglaterra',0,2),
      match('Croacia',   'Ghana',  1,1),
    ],
  },
]
