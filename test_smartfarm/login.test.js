import axios from "axios";
import * as chai from "chai";
import mysql from "mysql2/promise"; // Import the MySQL library

const LoginAPI = axios.create({
  baseURL: "http://localhost:9000/user",
  headers: {
    "Content-Type": "application/json",
  },
});

const REQUEST_VALID_LOGIN_DATA = {
  umail: "arbiminanda",
  password: "P@ssword1234",
};

const assert = chai.assert;

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "smartfarm",
};

async function getUserDataFromDatabase(connection, umail) {
  const [rows] = await connection.execute(
    "SELECT * FROM users WHERE username = ? or email = ?",
    [umail, umail]
  );
  if (rows.length > 0) {
    return rows[0];
  } else {
    throw new Error(`User with umail '${umail}' not found in the database.`);
  }
}

describe("User Login API", function () {
  let expectedData;
  let connection;

  before(async function () {
    connection = await mysql.createConnection(dbConfig);

    expectedData = await getUserDataFromDatabase(
      connection,
      REQUEST_VALID_LOGIN_DATA.umail
    );
  });

  after(async function () {
    if (connection) {
      await connection.end();
    }
  });

  it("Should successfully log in", async function () {
    const response = await LoginAPI.post("/login", REQUEST_VALID_LOGIN_DATA);

    assert.equal(response.status, 200);
    assert.equal(response.data.status, "success");
    assert.equal(
      response.data.msg,
      `Welcome Aboard, ${REQUEST_VALID_LOGIN_DATA.umail}`
    );
    assert.equal(response.data.token, expectedData.id);
    assert.equal(response.data.level, expectedData.level);
  });
});
