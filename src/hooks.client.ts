import { clientInit } from '@jill64/sentry-sveltekit-cloudflare'

const onError = clientInit(
  'https://4b26d4bf27aac206e2bfe1064cdc94f6@o4505814639312896.ingest.sentry.io/4506204750807040'
)

export const handleError = onError()
