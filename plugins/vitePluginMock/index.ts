import path from 'path'
import type { Plugin, Connect } from 'vite'

export interface MockOptions {
  /**
   * mock地址数据
   */
  entry?: string
  /**
   * 是否使用mock数据
   */
  isMock?: boolean
}

export interface ResponseConfig<T> {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS'
  response: () => T
}

export interface MockResponseConfig<T> {
  [key: string]: ResponseConfig<T>
}

function matchRoute<T>(
  req: Connect.IncomingMessage,
  mockApiMaps: MockResponseConfig<T>
) {
  const url = req.url
  const method = req.method?.toLowerCase()
  const result = mockApiMaps[url!]

  if (result) {
    if (result.method.toLowerCase() === method) {
      return typeof result.response === 'function'
        ? result.response()
        : result.response
    } else {
      return null
    }
  } else {
    return null
  }
}

export default function <T extends object>(
  options: MockOptions = {}
): Plugin | null {
  options.entry = options.entry || './mocks/index.ts'

  if (!path.isAbsolute(options.entry)) {
    options.entry = path.resolve(process.cwd(), options.entry)
  } else {
    console.error('mock: 路径不存在')
    return null
  }

  // 终止mock
  if (!options.isMock) {
    return null
  }

  return {
    name: 'ViteMockPlugin',
    configureServer: function (server) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const mockApiMaps = require(options.entry!) as MockResponseConfig<T>
      const middleware: Connect.NextHandleFunction = (req, res, next) => {
        const route = matchRoute<T>(req, mockApiMaps)
        if (route) {
          const chunk = JSON.stringify(route)
          res.setHeader('Content-Type', 'application/json')
          res.statusCode = 200
          res.end(Buffer.from(chunk, 'utf-8'), 'utf8')
        } else {
          next()
        }
      }
      server.middlewares.use(middleware)
    }
  }
}
