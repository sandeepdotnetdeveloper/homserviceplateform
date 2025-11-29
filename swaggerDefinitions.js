/**
 * Swagger/OpenAPI Definitions for DoorStepService API
 * This file contains all @openapi JSDoc comments for comprehensive documentation
 */

/**
 * @openapi
 * /admin-registration:
 *   post:
 *     tags:
 *       - Admin
 *     summary: Register a new admin
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               mobile:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Admin created successfully
 *       '400':
 *         description: Validation error
 */

/**
 * @openapi
 * /admin-registration/{id}:
 *   delete:
 *     tags:
 *       - Admin
 *     summary: Delete an admin
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Admin deleted successfully
 *       '404':
 *         description: Admin not found
 */

/**
 * @openapi
 * /admin-addstate:
 *   post:
 *     tags:
 *       - Admin
 *     summary: Add a new state
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stateName:
 *                 type: string
 *     responses:
 *       '201':
 *         description: State added successfully
 *       '400':
 *         description: Validation error
 */

/**
 * @openapi
 * /admin-readstate:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Get all states
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: List of states
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   stateName:
 *                     type: string
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /admin-deletestate/{id}:
 *   delete:
 *     tags:
 *       - Admin
 *     summary: Delete a state
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: State deleted successfully
 *       '404':
 *         description: State not found
 */

/**
 * @openapi
 * /admin-addcity:
 *   post:
 *     tags:
 *       - Admin
 *     summary: Add a new city
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cityName:
 *                 type: string
 *               stateId:
 *                 type: string
 *     responses:
 *       '201':
 *         description: City added successfully
 *       '400':
 *         description: Validation error
 */

/**
 * @openapi
 * /admin-readcity:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Get all cities
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: List of cities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   cityName:
 *                     type: string
 *                   stateId:
 *                     type: string
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /admin-deletecity/{id}:
 *   delete:
 *     tags:
 *       - Admin
 *     summary: Delete a city
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: City deleted successfully
 *       '404':
 *         description: City not found
 */

/**
 * @openapi
 * /managecategory:
 *   post:
 *     tags:
 *       - Admin
 *     summary: Add a new category
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Category created successfully
 *       '400':
 *         description: Validation error
 *   get:
 *     tags:
 *       - Admin
 *     summary: Get all categories
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: List of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   categoryName:
 *                     type: string
 *                   description:
 *                     type: string
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /managecategory/{id}:
 *   delete:
 *     tags:
 *       - Admin
 *     summary: Delete a category
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Category deleted successfully
 *       '404':
 *         description: Category not found
 */

/**
 * @openapi
 * /managesubcategory:
 *   post:
 *     tags:
 *       - Admin
 *     summary: Add a new subcategory
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subCategoryName:
 *                 type: string
 *               categoryId:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Subcategory created successfully
 *       '400':
 *         description: Validation error
 *   get:
 *     tags:
 *       - Admin
 *     summary: Get all subcategories
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: List of subcategories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   subCategoryName:
 *                     type: string
 *                   categoryId:
 *                     type: string
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /managesubcategory/{id}:
 *   delete:
 *     tags:
 *       - Admin
 *     summary: Delete a subcategory
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Subcategory deleted successfully
 *       '404':
 *         description: Subcategory not found
 */

/**
 * @openapi
 * /admin/providerinfo:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Get all provider information
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: List of providers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /admin/providerinfo/{id}:
 *   delete:
 *     tags:
 *       - Admin
 *     summary: Delete provider information
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Provider deleted
 *       '404':
 *         description: Provider not found
 */

/**
 * @openapi
 * /provider-status/{id}:
 *   put:
 *     tags:
 *       - Admin
 *     summary: Update provider status
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [approved, rejected, pending]
 *     responses:
 *       '200':
 *         description: Status updated
 *       '400':
 *         description: Invalid status
 */

/**
 * @openapi
 * /admin/userinfo:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Get all user information
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /admin/userinfo/{id}:
 *   delete:
 *     tags:
 *       - Admin
 *     summary: Delete user information
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User deleted
 *       '404':
 *         description: User not found
 */

/**
 * @openapi
 * /admin/verifyemail:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Verify admin email for password recovery
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OTP sent to email
 *       '404':
 *         description: Email not found
 */

/**
 * @openapi
 * /admin/verifyotp:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Verify OTP for admin password reset
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               otp:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OTP verified
 *       '400':
 *         description: Invalid OTP
 */

/**
 * @openapi
 * /admin/updatePassword:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Update admin password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Password updated
 *       '400':
 *         description: Invalid request
 */

/**
 * @openapi
 * /admin-login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Admin login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Login successful
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /user/verifyemail:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Verify user email for password recovery
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OTP sent to email
 *       '404':
 *         description: Email not found
 */

/**
 * @openapi
 * /user/verifyotp:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Verify OTP for user password reset
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               otp:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OTP verified
 *       '400':
 *         description: Invalid OTP
 */

/**
 * @openapi
 * /user/updatePassword:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Update user password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Password updated
 *       '400':
 *         description: Invalid request
 */

/**
 * @openapi
 * /provider/verifyemail:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Verify service provider email for password recovery
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OTP sent to email
 *       '404':
 *         description: Email not found
 */

/**
 * @openapi
 * /provider/verifyotp:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Verify OTP for provider password reset
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               otp:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OTP verified
 *       '400':
 *         description: Invalid OTP
 */

/**
 * @openapi
 * /provider/updatePassword:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Update service provider password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Password updated
 *       '400':
 *         description: Invalid request
 */

/**
 * @openapi
 * /provider/city/{id}:
 *   get:
 *     tags:
 *       - ServiceProvider
 *     summary: Get cities for a provider state
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: List of cities
 *       '404':
 *         description: Not found
 */

/**
 * @openapi
 * /provider/state:
 *   get:
 *     tags:
 *       - ServiceProvider
 *     summary: Get all states for provider selection
 *     responses:
 *       '200':
 *         description: List of states
 */

/**
 * @openapi
 * /managesubcategory/{id}:
 *   get:
 *     tags:
 *       - ServiceProvider
 *     summary: Get subcategories for a category
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: List of subcategories
 */

/**
 * @openapi
 * /provider/managecategory:
 *   get:
 *     tags:
 *       - ServiceProvider
 *     summary: Get all categories for provider
 *     responses:
 *       '200':
 *         description: List of categories
 */

/**
 * @openapi
 * /serviceprovider:
 *   post:
 *     tags:
 *       - ServiceProvider
 *     summary: Register a new service provider
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               mobile:
 *                 type: string
 *               subcategoryId:
 *                 type: string
 *               cityId:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Service provider registered
 *       '400':
 *         description: Validation error
 */

/**
 * @openapi
 * /serviceproviderlogin:
 *   post:
 *     tags:
 *       - ServiceProvider
 *     summary: Service provider login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Login successful
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /serviceprovider/info:
 *   get:
 *     tags:
 *       - ServiceProvider
 *     summary: Get service provider info
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Provider information
 *       '401':
 *         description: Unauthorized
 *   delete:
 *     tags:
 *       - ServiceProvider
 *     summary: Delete service provider info
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Provider deleted
 *       '404':
 *         description: Not found
 */

/**
 * @openapi
 * /serviceprovider/changepassword:
 *   put:
 *     tags:
 *       - ServiceProvider
 *     summary: Change service provider password
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Password changed
 *       '400':
 *         description: Invalid request
 */

/**
 * @openapi
 * /user-registration:
 *   post:
 *     tags:
 *       - Users
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               mobile:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User created
 *       '400':
 *         description: Validation error
 *   get:
 *     tags:
 *       - Users
 *     summary: View user registration
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: User data
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /user-registration/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete user registration
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User deleted
 *       '404':
 *         description: User not found
 */

/**
 * @openapi
 * /user-login:
 *   post:
 *     tags:
 *       - Users
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Login successful
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /user/changepassword:
 *   put:
 *     tags:
 *       - Users
 *     summary: Change user password
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Password changed
 *       '400':
 *         description: Invalid request
 */

/**
 * @openapi
 * /view-single-category/{id}:
 *   get:
 *     tags:
 *       - Admin
 *     summary: View single category
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Category details
 *       '404':
 *         description: Category not found
 */

/**
 * @openapi
 * /category-photo-update/{id}:
 *   post:
 *     tags:
 *       - Admin
 *     summary: Update category photo
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Photo updated
 *       '400':
 *         description: Invalid file
 */

/**
 * @openapi
 * /updatecategory/{id}:
 *   put:
 *     tags:
 *       - Admin
 *     summary: Update category
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Category updated
 *       '400':
 *         description: Invalid data
 */

/**
 * @openapi
 * /view-single-subcategory/{id}:
 *   get:
 *     tags:
 *       - Admin
 *     summary: View single subcategory
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Subcategory details
 *       '404':
 *         description: Subcategory not found
 */

/**
 * @openapi
 * /subcategory-photo-update/{id}:
 *   post:
 *     tags:
 *       - Admin
 *     summary: Update subcategory photo
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Photo updated
 *       '400':
 *         description: Invalid file
 */

/**
 * @openapi
 * /updatesubcategory/{id}:
 *   put:
 *     tags:
 *       - Admin
 *     summary: Update subcategory
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subCategoryName:
 *                 type: string
 *               categoryId:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Subcategory updated
 *       '400':
 *         description: Invalid data
 */

/**
 * @openapi
 * /view-single-state/{id}:
 *   get:
 *     tags:
 *       - Admin
 *     summary: View single state
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: State details
 *       '404':
 *         description: State not found
 */

/**
 * @openapi
 * /updatestate/{id}:
 *   put:
 *     tags:
 *       - Admin
 *     summary: Update state
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stateName:
 *                 type: string
 *     responses:
 *       '200':
 *         description: State updated
 *       '400':
 *         description: Invalid data
 */

/**
 * @openapi
 * /view-single-city/{id}:
 *   get:
 *     tags:
 *       - Admin
 *     summary: View single city
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: City details
 *       '404':
 *         description: City not found
 */

/**
 * @openapi
 * /updatecity/{id}:
 *   put:
 *     tags:
 *       - Admin
 *     summary: Update city
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cityName:
 *                 type: string
 *               stateId:
 *                 type: string
 *     responses:
 *       '200':
 *         description: City updated
 *       '400':
 *         description: Invalid data
 */

/**
 * @openapi
 * /view-single-provider/{id}:
 *   get:
 *     tags:
 *       - ServiceProvider
 *     summary: View single provider
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Provider details
 *       '404':
 *         description: Provider not found
 */

/**
 * @openapi
 * /provider-photo-update/{id}:
 *   post:
 *     tags:
 *       - ServiceProvider
 *     summary: Update provider photo
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Photo updated
 *       '400':
 *         description: Invalid file
 */

/**
 * @openapi
 * /updateprovider/{id}:
 *   put:
 *     tags:
 *       - ServiceProvider
 *     summary: Update provider
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               mobile:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Provider updated
 *       '400':
 *         description: Invalid data
 */

/**
 * @openapi
 * /view-single-user:
 *   get:
 *     tags:
 *       - Users
 *     summary: View single user
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: User details
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /user-photo-update:
 *   post:
 *     tags:
 *       - Users
 *     summary: Update user photo
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Photo updated
 *       '400':
 *         description: Invalid file
 */

/**
 * @openapi
 * /updateuser:
 *   put:
 *     tags:
 *       - Users
 *     summary: Update user
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               mobile:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User updated
 *       '400':
 *         description: Invalid data
 */

/**
 * @openapi
 * /adminbookingdata:
 *   get:
 *     tags:
 *       - Booking
 *     summary: Get admin booking data
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: List of bookings
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /providerbookingdata:
 *   get:
 *     tags:
 *       - Booking
 *     summary: Get provider booking data
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: List of bookings for provider
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /userbookingdata:
 *   get:
 *     tags:
 *       - Booking
 *     summary: Get user booking data
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: List of bookings for user
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /updateBookingStatus:
 *   put:
 *     tags:
 *       - Booking
 *     summary: Update booking status by provider
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookingId:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [accepted, rejected, completed]
 *     responses:
 *       '200':
 *         description: Booking status updated
 *       '400':
 *         description: Invalid request
 */

/**
 * @openapi
 * /userbookingstatus:
 *   put:
 *     tags:
 *       - Booking
 *     summary: Update booking status by user
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookingId:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Booking status updated
 *       '400':
 *         description: Invalid request
 */

/**
 * @openapi
 * /subcatprovider/{id}:
 *   get:
 *     tags:
 *       - Public
 *     summary: Get providers of specific subcategory
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: List of providers
 *       '404':
 *         description: Not found
 */

/**
 * @openapi
 * /manageproviders/{subid}:
 *   get:
 *     tags:
 *       - Public
 *     summary: Get public provider list by subcategory
 *     parameters:
 *       - name: subid
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: List of public providers
 */

/**
 * @openapi
 * /providerinfo:
 *   get:
 *     tags:
 *       - Public
 *     summary: Get all providers (public)
 *     responses:
 *       '200':
 *         description: List of all providers
 */

/**
 * @openapi
 * /user/managecategory:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get categories for user
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: List of categories
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /check-available-slots:
 *   post:
 *     tags:
 *       - Booking
 *     summary: Check available slots for a provider
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               providerId:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *     responses:
 *       '200':
 *         description: List of available slots
 *       '400':
 *         description: Invalid request
 */

/**
 * @openapi
 * /user-booking:
 *   post:
 *     tags:
 *       - Booking
 *     summary: Create a booking
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               providerId:
 *                 type: string
 *               serviceDate:
 *                 type: string
 *                 format: date
 *               serviceTime:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Booking created
 *       '400':
 *         description: Invalid request
 */

/**
 * @openapi
 * /submitreview:
 *   post:
 *     tags:
 *       - Feedback
 *     summary: Submit review/feedback
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookingId:
 *                 type: string
 *               providerId:
 *                 type: string
 *               rating:
 *                 type: number
 *               comment:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Feedback submitted
 *       '400':
 *         description: Invalid request
 */

/**
 * @openapi
 * /contact:
 *   post:
 *     tags:
 *       - Public
 *     summary: Submit contact form
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Message sent
 *       '400':
 *         description: Validation error
 */

/**
 * @openapi
 * /getFeedback:
 *   get:
 *     tags:
 *       - Feedback
 *     summary: Get all feedback
 *     responses:
 *       '200':
 *         description: List of feedback
 */

/**
 * @openapi
 * /getParticularFeedback/{pid}:
 *   get:
 *     tags:
 *       - Feedback
 *     summary: Get feedback for specific provider
 *     parameters:
 *       - name: pid
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: List of feedback for provider
 *       '404':
 *         description: Not found
 */

module.exports = {};
