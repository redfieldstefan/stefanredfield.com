import glob from 'glob'
import path from 'path'

const entryFiles = glob.sync('./scripts/*.js').map((file) => {
  const base = file.replace('scripts/', '').replace('.js', '')
  return {
    base,
    file: `./${file}`,
  }
})

const entries = entryFiles.reduce((accum, { file, base }) => {
  return {
    [base]: file,
    ...accum,
  }
}, {})

export default {
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false, // disable the behaviour
        },
      },
    ],
  },
}
