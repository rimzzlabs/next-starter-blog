import * as fs from 'fs/promises'
import * as path from 'path'

export const CONTENT_DIRECTORY = path.join(process.cwd(), 'src/data')

/**
 * It takes a path, reads the directory at that path, and returns an array of files that end in .mdx
 * @param path - The path to the directory you want to get the files from. `e.g: /blog`
 * @returns an array of files end with .mdx extension
 */
const getPathDirectory = async (path: string) => {
  const dir = await fs.readdir(`${CONTENT_DIRECTORY}/${path}`)
  return dir.filter((f) => /\.mdx?$/.test(f))
}

export default getPathDirectory
