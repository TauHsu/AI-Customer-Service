const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Conversations",
  tableName: "CONVERSATIONS",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
      nullable: false,
    },
    userId: {
      type: "varchar",
      length: 100,
      nullable: false,
      name: "user_id",
    },
    lastActivity: {
      type: "timestamp",
      name: "last_activity",
      nullable: false,
    },
    createdAt: {
      type: "timestamp",
      createDate: true,
      name: "created_at",
      nullable: false,
    },
  },
});
