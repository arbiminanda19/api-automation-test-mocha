import * as chai from "chai";
import jsonSchema from "chai-json-schema";
import { UserAPI } from "../../pages/users/users.api.js";
import { VALID_GET_USER_DETAIL_SCHEMA } from "../../schema/users/get-user-detail.schema.js";
import { REQUEST_VALID_LOGIN_DATA } from "../../data/authentications/login.data.js";
import * as data from "../../data/users/get-user-detail.data.js";
import { login } from "../../helper/login.js";

chai.use(jsonSchema);
const assert = chai.assert;
const expect = chai.expect;

describe("API Authentications", function () {
  let token, userId;
  before(async () => {
    const dataLogin = await login(REQUEST_VALID_LOGIN_DATA);
    token = dataLogin.token;
    userId = dataLogin.userId;
  });

  it("C1 - Should success get user detail", async function () {
    const response = await UserAPI.getUserDetail(token, userId);

    assert.equal(
      response.status,
      data.RESPONSE_VALID_GET_USER_DETAIL.http_code
    );
    assert.equal(
      response.data.message,
      data.RESPONSE_VALID_GET_USER_DETAIL.message
    );

    expect(response.data).to.be.jsonSchema(VALID_GET_USER_DETAIL_SCHEMA);
  });
});
