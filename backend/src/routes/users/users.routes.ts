import { Router } from "express";
import { Users } from "../../models/models";
import asyncHandler from "../../common/helpers/async-handler.helper";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "user1"
 *         name:
 *           type: string
 *           example: "Alice"
 *         email:
 *           type: string
 *           example: "alice@example.com"
 *         enrolledCourses:
 *           type: array
 *           example: ["test", "test1"]
 *     Error:
 *      type: object
 *      properties:
 *       code:
 *         type: string
 *       message:
 *         type: string
 *      required:
 *        - code
 *        - message
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *     - users
 *     summary: Retrieve users list
 *     description: Retrieve users list
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *          application/json:
 *            schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 *       default:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await Users.find();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json(users);
    }
  }),
);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags:
 *     - users
 *     summary: Get a single user
 *     description: Get a single user
 *     operationId: findById
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id that needs to be fetched and updated. Use user1 for testing
 *        required: true
 *        schema:
 *          type: string

 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 *       default:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const user = await Users.find({ enrolledCourses: req.params.id });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json(user);
    }
  }),
);
export { router as userRoutes };
