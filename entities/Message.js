const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Message",
  tableName: "MESSAGE",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
      nullable: false,
    },
    role: {
      type: "varchar",
      length: 20,
      nullable: false,
    },
    content: {
      type: "text",
      nullable: false,
    },
    timestamp: {
      type: "timestamp",
      nullable: false,
    },
  },
  relations: {
    conversation: {
      type: "many-to-one",
      target: "Conversation",
      joinColumn: {
        name: "conversation_id",
      },
      onDelete: "CASCADE",
    },
  },
});
