// server/schemas/resolvers.js
const resolvers = {
  Query: {
    users: async () => [{ _id: "1", username: "sampleUser", email: "sample@example.com" }],
    incomes: async () => [{ _id: "1", amount: 5000, source: "Job", date: "2024-01-01" }],
    expenses: async () => [{ _id: "1", amount: 200, category: "Food", date: "2024-01-02" }],
  },
};

export default resolvers;
