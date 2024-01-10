export const VALID_AUTHENTICATIONS_SCHEMA = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    status: {
      type: "string",
      enum: ["success"],
    },
    message: {
      type: "string",
    },
    data: {
      type: "object",
      properties: {
        accessToken: {
          type: "string",
        },
        refreshToken: {
          type: "string",
        },
        user: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
            },
            name: {
              type: "string",
            },
            role: {
              type: "string",
            },
            email: {
              type: "string",
              format: "email",
            },
            officeId: {
              type: "string",
              format: "uuid",
            },
            companyId: {
              type: "string",
              format: "uuid",
            },
            company_name: {
              type: "string",
            },
          },
          required: [
            "id",
            "name",
            "role",
            "email",
            "officeId",
            "companyId",
            "company_name",
          ],
        },
      },
      required: ["accessToken", "refreshToken", "user"],
    },
  },
  required: ["status", "message", "data"],
};
