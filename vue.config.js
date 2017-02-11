import webpack                      from 'webpack'
import dotenv                       from 'dotenv'
import { readFileSync, existsSync } from 'fs'

const envFile = `.env.${process.env.NODE_ENV}`

dotenv.config({ path: '.env' })

if (existsSync(envFile)) {
  const envConfig = dotenv.parse(readFileSync(envFile))

  for (var k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

let webpackEnvs = {}
let envs        = [
  'FB_API_KEY',
  'FB_AUTH_DOMAIN',
  'FB_DATABASE_URL',
  'FB_STORAGE_BUCKET',
  'FB_MESSAGING_SENDER_ID'
]

envs.forEach(name => {
  webpackEnvs[`process.env.${name}`] = JSON.stringify(process.env[name])
})

export default {
  title: 'yah',
  resolve: true,
  vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'firebase'],
  mergeConfig: {
    resolve: {
      extensions: ['.js', '.vue', '.scss', '.json', '.html'],
      alias: {
        '~': 'src'
      }
    },
    plugins: [
      new webpack.DefinePlugin(webpackEnvs)
    ]
  }
}
