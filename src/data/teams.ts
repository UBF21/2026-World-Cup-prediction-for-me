export interface Team {
  name: string
  code: string
  color: string
  isoCode: string
}

export const teams: Record<string, Team> = {
  "México":       { name: "México",       code: "MEX", color: "#006847", isoCode: "mx" },
  "Sudáfrica":    { name: "Sudáfrica",    code: "RSA", color: "#007749", isoCode: "za" },
  "Corea del Sur":{ name: "Corea del Sur",code: "KOR", color: "#0F4FCD", isoCode: "kr" },
  "Chequia":      { name: "Chequia",      code: "CZE", color: "#D7141A", isoCode: "cz" },
  "Canadá":       { name: "Canadá",       code: "CAN", color: "#D52B1E", isoCode: "ca" },
  "Bosnia":       { name: "Bosnia",       code: "BIH", color: "#1B2C6B", isoCode: "ba" },
  "Catar":        { name: "Catar",        code: "QAT", color: "#7A1437", isoCode: "qa" },
  "Suiza":        { name: "Suiza",        code: "SUI", color: "#D8232A", isoCode: "ch" },
  "Brasil":       { name: "Brasil",       code: "BRA", color: "#F7DF10", isoCode: "br" },
  "Marruecos":    { name: "Marruecos",    code: "MAR", color: "#B0202E", isoCode: "ma" },
  "Haití":        { name: "Haití",        code: "HAI", color: "#1A2E8C", isoCode: "ht" },
  "Escocia":      { name: "Escocia",      code: "SCO", color: "#0E5BA6", isoCode: "gb-sct" },
  "Estados Unidos":{ name: "Estados Unidos",code: "USA", color: "#0A3161", isoCode: "us" },
  "Paraguay":     { name: "Paraguay",     code: "PAR", color: "#C8243C", isoCode: "py" },
  "Australia":    { name: "Australia",    code: "AUS", color: "#00843D", isoCode: "au" },
  "Turquía":      { name: "Turquía",      code: "TUR", color: "#E30A17", isoCode: "tr" },
  "Alemania":     { name: "Alemania",     code: "GER", color: "#2A2A2A", isoCode: "de" },
  "Curazao":      { name: "Curazao",      code: "CUW", color: "#00248F", isoCode: "cw" },
  "Costa de Marfil":{ name: "Costa de Marfil",code: "CIV", color: "#F77F00", isoCode: "ci" },
  "Ecuador":      { name: "Ecuador",      code: "ECU", color: "#FFCE00", isoCode: "ec" },
  "Países Bajos": { name: "Países Bajos", code: "NED", color: "#FF6C00", isoCode: "nl" },
  "Japón":        { name: "Japón",        code: "JPN", color: "#B0233D", isoCode: "jp" },
  "Suecia":       { name: "Suecia",       code: "SWE", color: "#1F6FB0", isoCode: "se" },
  "Túnez":        { name: "Túnez",        code: "TUN", color: "#D7000F", isoCode: "tn" },
  "Bélgica":      { name: "Bélgica",      code: "BEL", color: "#454545", isoCode: "be" },
  "Egipto":       { name: "Egipto",       code: "EGY", color: "#C81022", isoCode: "eg" },
  "Irán":         { name: "Irán",         code: "IRN", color: "#1E9A45", isoCode: "ir" },
  "Nueva Zelanda":{ name: "Nueva Zelanda",code: "NZL", color: "#10245B", isoCode: "nz" },
  "España":       { name: "España",       code: "ESP", color: "#C60B1E", isoCode: "es" },
  "Cabo Verde":   { name: "Cabo Verde",   code: "CPV", color: "#143A8C", isoCode: "cv" },
  "Arabia Saudita":{ name: "Arabia Saudita",code: "KSA", color: "#0A6C35", isoCode: "sa" },
  "Uruguay":      { name: "Uruguay",      code: "URU", color: "#4F9FD8", isoCode: "uy" },
  "Francia":      { name: "Francia",      code: "FRA", color: "#1356A2", isoCode: "fr" },
  "Senegal":      { name: "Senegal",      code: "SEN", color: "#0A8540", isoCode: "sn" },
  "Irak":         { name: "Irak",         code: "IRQ", color: "#0A7A3D", isoCode: "iq" },
  "Noruega":      { name: "Noruega",      code: "NOR", color: "#BA1A33", isoCode: "no" },
  "Argentina":    { name: "Argentina",    code: "ARG", color: "#75AADB", isoCode: "ar" },
  "Argelia":      { name: "Argelia",      code: "ALG", color: "#0A6233", isoCode: "dz" },
  "Austria":      { name: "Austria",      code: "AUT", color: "#ED2939", isoCode: "at" },
  "Jordania":     { name: "Jordania",     code: "JOR", color: "#2B2B33", isoCode: "jo" },
  "Portugal":     { name: "Portugal",     code: "POR", color: "#0A6A2A", isoCode: "pt" },
  "RD Congo":     { name: "RD Congo",     code: "COD", color: "#2B7FFF", isoCode: "cd" },
  "Uzbekistán":   { name: "Uzbekistán",   code: "UZB", color: "#1E9A3A", isoCode: "uz" },
  "Colombia":     { name: "Colombia",     code: "COL", color: "#FBD116", isoCode: "co" },
  "Inglaterra":   { name: "Inglaterra",   code: "ENG", color: "#13327A", isoCode: "gb-eng" },
  "Croacia":      { name: "Croacia",      code: "CRO", color: "#C81022", isoCode: "hr" },
  "Ghana":        { name: "Ghana",        code: "GHA", color: "#0A6B3F", isoCode: "gh" },
  "Panamá":       { name: "Panamá",       code: "PAN", color: "#0A5293", isoCode: "pa" },
}

export function getTeam(name: string): Team | undefined {
  return teams[name]
}

export function lum(hex: string): number {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255
}

export function txtColor(hex: string): string {
  return lum(hex) > 0.62 ? '#07111C' : '#ffffff'
}
