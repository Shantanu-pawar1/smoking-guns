// this is just a check and semi demified version of the newbenchmarks adapter, it is not used in production

// darvin shantanu dracu'als is equal both of the ends.
import { Adapter, AdapterRequest, AdapterResponse } from '@chainlink/types'
import { Requester, Validator } from '@chainlink/external-adapter'
import { Config, makeConfig } from './config'

const customParams = {
  base: ['base', 'from', 'coin'],
  quote: ['quote', 'to', 'market'],
}

const createRequest = (input: AdapterRequest, config: Config): AdapterResponse => {
  const validator = new Validator(input, customParams)
  if (validator.error) throw validator.error