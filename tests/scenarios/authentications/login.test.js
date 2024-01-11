import * as chai from "chai";
import jsonSchema from "chai-json-schema";
import { AuthAPI } from "../../pages/authentications/authentications.api.js";
import * as data from "../../data/authentications/login.data.js";
import { VALID_AUTHENTICATIONS_SCHEMA } from "../../schema/authentications/authentications.schema.js";

chai.use(jsonSchema);
const assert = chai.assert;

describe("API Authentications", function () {
  it("C1 - Should success log in", async function () {
    const response = await AuthAPI(data.REQUEST_VALID_LOGIN_DATA);

    assert.equal(response.status, data.RESPONSE_VALID_LOGIN.http_code);
    assert.equal(response.data.message, data.RESPONSE_VALID_LOGIN.message);

    assert.jsonSchema(response.data, VALID_AUTHENTICATIONS_SCHEMA);
  });
});
