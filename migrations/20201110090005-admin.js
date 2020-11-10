module.exports = {
  async up(db, client) {

    const superadmin = await db.collection('roles').findOne({ name: 'superadmin' })
    const admin = await db.collection('roles').findOne({ name: 'admin' })
    const users = [
      {
        name: 'superadmin',
        email: 'superadmin@gmail.com',
        password: 'superadmin123',
        createdAt: new Date(),
        updatedAt: new Date(),
        role: superadmin._id,
      },
      {
        name: 'admin',
        email: 'admin@gmail.com',
        password: 'admin123',
        createdAt: new Date(),
        updatedAt: new Date(),
        role: admin._id,
      }
    ]

    /**
     * @description UP MIGRATION TO NEXT ADD ROLES STAGE
     */
    await db.collection('users').insertMany(users);
  },

  async down(db, client) {
    /**
     * @description REVERY MIGRATION TO LAST STAGE
     */
    //  await db.collection('users').destroy({ where: { email: ['admin@gmail.com', 'superadmin@gmail.com'] } })
    await db.collection('users').deleteMany([{ email: 'admin@gmail' }, { email: 'superadmin@gmail.com' }])
  }
}