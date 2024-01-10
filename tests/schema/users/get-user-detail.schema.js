export const VALID_GET_USER_DETAIL_SCHEMA = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    status: {
      type: "string",
      enum: ["success"],
    },
    data: {
      type: "object",
      properties: {
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
            email: {
              type: "string",
              format: "email",
            },
            role: {
              type: "string",
            },
          },
          required: ["id", "name", "email", "role"],
        },
      },
      required: ["user"],
    },
  },
  required: ["status", "data"],
};
