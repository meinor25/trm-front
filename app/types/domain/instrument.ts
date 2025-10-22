export const ALLOWED_INSTRUMENTS = {
  GUITAR: 'guitar',
  BASS: 'bass',
  VOCALS: 'vocals',
  DRUMS: 'drums',
  KEYS: 'keys',
} as const

// --------------------------------------------------------------------------------
// AllowedInstruments
// -----------------
// Este tipo se deriva automáticamente de los valores del objeto ALLOWED_INSTRUMENTS.
// Conceptos aplicados:
// 1️⃣ `as const` → convierte los valores en literales inmutables y readonly.
// 2️⃣ `typeof ALLOWED_INSTRUMENTS` → obtiene el tipo del objeto.
// 3️⃣ `keyof typeof ALLOWED_INSTRUMENTS` → obtiene todas las claves del objeto como unión de strings.
// 4️⃣ `(typeof ALLOWED_INSTRUMENTS)[keyof typeof ALLOWED_INSTRUMENTS]` → Indexed Access Type,
//     devuelve la unión de los tipos de los valores de todas las claves.
// Resultado: AllowedInstruments = 'guitar' | 'bass' | 'vocals' | 'drums'
// Esto evita usar “magic strings” y mantiene tipos y valores sincronizados automáticamente.
// --------------------------------------------------------------------------------
export type AllowedInstruments =
  (typeof ALLOWED_INSTRUMENTS)[keyof typeof ALLOWED_INSTRUMENTS]
