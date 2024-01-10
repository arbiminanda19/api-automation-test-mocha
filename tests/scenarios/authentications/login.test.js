import * as chai from "chai";
import { AuthAPI } from "../../pages/authentications/authentications.api.js";
import * as data from "../../data/authentications/login.data.js";

const assert = chai.assert;

describe("API Authentications", function () {
  it("C1 - Should success log in", async function () {
    const response = await AuthAPI(data.REQUEST_VALID_LOGIN_DATA);

    assert.equal(response.status, data.RESPONSE_VALID_LOGIN.http_code);
    assert.equal(response.data.message, data.RESPONSE_VALID_LOGIN.message);
  });
});
