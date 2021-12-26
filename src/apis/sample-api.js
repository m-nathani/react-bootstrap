import { API_ENDPOINT_PARTNER_V2 } from 'constants/app';
import HttpRequest from 'utils/http-request';

class SampleApi extends HttpRequest {
  constructor() {
    super(`${API_ENDPOINT_PARTNER_V2}/venues`);
  }

  fetchSample = (venueId, config) => this.fetch(`/${venueId}`, {}, config);
}

export default new SampleApi();
