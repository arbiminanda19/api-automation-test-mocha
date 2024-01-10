import axios from "axios";
import * as chai from "chai";

const LoginAPI = axios.create({
  baseURL: "https://kasir-api.belajarqa.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const REQUEST_VALID_LOGIN_DATA = {
  email: "test_selenium@gmail.com",
  password: "pass_test_selenium",
};

const assert = chai.assert;

const RESPONSE_VALID_LOGIN = {
  http_code: 201,
  message: "Authentication berhasil ditambahkan",
};

describe("API Authentications", function () {
  it("C1 - Should success log in", async function () {
    const response = await LoginAPI.post(
      `/authentications`,
      REQUEST_VALID_LOGIN_DATA
    );

    assert.equal(response.status, RESPONSE_VALID_LOGIN.http_code);
    assert.equal(response.data.message, RESPONSE_VALID_LOGIN.message);
  });
});
