import axios from "axios";
import * as fs from "fs";
import * as path from "path";
import FormData from "form-data";
import * as chai from "chai";

const UploadAPI = axios.create({
  baseURL: "https://api.upload.io/v1/files",
  headers: {
    Authorization: "Bearer free",
    "Content-Type": "multipart/form-data",
  },
});

const assert = chai.assert;

const currentDir = path.dirname(new URL(import.meta.url).pathname);

const FILE_PATH = path.join(currentDir, "data", "test.JPG");

const REQUEST_VALID_UPLOAD_FILES = new FormData();
REQUEST_VALID_UPLOAD_FILES.append(
  "file",
  fs.createReadStream(path.resolve(currentDir, FILE_PATH))
);

describe("Upload File API", function () {
  it("Should upload file successfully", async function () {
    const response = await UploadAPI.post(
      "/form_data",
      REQUEST_VALID_UPLOAD_FILES,
      {
        headers: REQUEST_VALID_UPLOAD_FILES.getHeaders(),
      }
    );

    assert.equal(response.status, 200);
  });
});
