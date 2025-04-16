export const swaggerOptions = {
  definition: {
    openapi: "3.0.4",
    info: {
      title: "Courses REST API - OpenAPI 3.0",
      version: "1.0.0",
      description: "Just showing stuff here nothing important",
    },
    servers: [{ url: "http://localhost:5000" }],
    tags: [
      {
        name: "courses",
        description: "All about courses",
      },
      {
        name: "users",
        description: "All about users",
      },
    ],
  },
  apis: [
    "src/routes/courses/courses.routes.ts",
    "src/routes/users/users.routes.ts",
  ],
};
