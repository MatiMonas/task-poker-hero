import mongoose from 'mongoose';
import env from '../utils/env';

const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DB } = env;

export async function conn() {
  return mongoose.connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`,
    {
      retryWrites: false,
      replicaSet: 'rs0',
      readPreference: 'secondaryPreferred',
    },
  );
}

export default mongoose;
