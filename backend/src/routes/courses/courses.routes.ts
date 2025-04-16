import { Router } from "express";
import { Courses } from "../../models/models";
import asyncHandler from "../../common/helpers/async-handler.helper";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Courses:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "course1"
 *         title:
 *           type: string
 *           example: "Intro to Node"
 *         description:
 *           type: string
 *           example: "Learn about Intro to Node."
 *         imageUrl:
 *           type: string
 *           example: "https://picsum.photos/seed/course1/400/200"
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
 * /api/courses:
 *   get:
 *     tags:
 *     - courses
 *     summary: Retrieve courses list
 *     description: Retrieve courses list
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *          application/json:
 *            schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Courses'
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
    const courses = await Courses.find();
    if (courses) {
      res.status(200).json(courses);
    } else {
      res.status(404).json(courses);
    }
  }),
);

export { router as coursesRoutes };
