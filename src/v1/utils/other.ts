// Lib

// Include in project

// ================================================================

/**
 *
 * @param prefix  [Require] String to tell this ID is about ?
 * @returns       prefix_V1StGXR8_Z5jdHi6B-myT
 */
export function generateID(prefix: string): string {
  const randomID = Math.random()
    .toString(36)
    .substring(2, 10 + 2)
  return `${prefix}.${randomID}`
}
