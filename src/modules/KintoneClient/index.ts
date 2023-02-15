import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import { getSpaceId } from '../GetSpaceId'

export class KintoneClient {
  constructor() {}
  static async client(token: string): Promise<KintoneRestAPIClient> {
    const isGuestSpace = await getSpaceId()
    const options: apiclient.Options = {}
    if (token) options.auth = { apiToken: token }
    if (isGuestSpace) options.guestSpaceId = isGuestSpace
    return new KintoneRestAPIClient(options)
  }
}
