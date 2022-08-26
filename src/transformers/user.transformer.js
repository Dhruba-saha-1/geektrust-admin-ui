import User from "../models/user.model";

export default class UserTransformer {
  static transformOne = (user) => {
    return user
      ? new User(user.id, user.name, user.email, user.role, user.isSelected)
      : null;
  };

  static transformMany = (users) => {
    return users && users.length
      ? users.map((user) => this.transformOne(user))
      : [];
  };
}
